import { browser, once, printConsole, Game, on, createText, setTextString, destroyAllTexts, storage, settings, getNumCreatedTexts, getTextString, Utility} from  "skyrimPlatform";
import { SetIntValue, GetIntValue } from "@skyrim-platform/papyrus-util/StorageUtil"
// import * as wt from "@skyrim-platform/WidgetTools/WidgetTools";
import * as wt from '../../modules/SPTextUtils/spTextUtils'

browser.setVisible(true);
browser.setFocused(false);
const visible = browser.isVisible();
const focused = browser.isFocused();

export function pl() { return Game.getPlayer(); }

const key = '.equipped-hud.'

var left_hand: wt.spText 
var right_hand: wt.spText 
var shoutslot: wt.spText
// let x = settings["equippedhud"]["x"] as number;
// let y = settings["equippedhud"]["y"] as number;
let x: number = 1500
let y: number = 1000
var left_offset = -500
var right_offset = 500

var init: number
var modname: string = 'EquippedHUD' 
const colors = {
    white: [1, 1, 1, 1]
}
wt.spText.destroyAllModTexts(modname)
left_hand = new wt.spText(x +left_offset, y, 'left', colors['white'], undefined, modname)
right_hand = new wt.spText(x +right_offset, y, 'right', colors['white'], undefined, modname)
shoutslot = new wt.spText(x, y, 'shout', colors['white'], undefined, modname)

// storage[key + 'init.'] == false
once('skyrimLoaded', () => {init = 0});
once('update', () => {
    init = 1
    SetIntValue(null, key + 'init', 1)
    SetEquipped(left_hand, right_hand, shoutslot)
    printConsole('EquippedHUD - SP initialized')
});
on('menuOpen', () => {wt.spText.disableModTexts(modname)});
on('menuClose', () => {wt.spText.enableModTexts(modname)});
var flag = false
on('actionBeginDraw', () => { 
    flag = true
    wt.spText.enableModTexts(modname)
});
on('actionBeginSheathe', () => { 
    flag = false
    fadeout()
});
const fadeout = async () => {
    await Utility.wait(3.0);
    if ( !flag ){wt.spText.disableModTexts(modname)}
}
on('equip', (e) => {
    if ( e.actor.getFormID() != pl()?.getFormID() ) { return; }
    SetEquipped(left_hand, right_hand, shoutslot)
});
on('unequip', (e) => {
    if ( e.actor.getFormID() != pl()?.getFormID() ) { return; }
    SetEquipped(left_hand, right_hand, shoutslot)
});

function SetEquipped(l: wt.spText, r: wt.spText, s: wt.spText) {
    /* 
        0 = left hand
        1 = right hand
        2 = shoutslot slot
    */
   wt.spText.enableModTexts(modname)
    var l_id = pl()?.getEquippedObject(0)
    var r_id = pl()?.getEquippedObject(1)
    var s_id = pl()?.getEquippedObject(2)
    var l_name = l_id?.getName()
    var r_name = r_id?.getName()
    var s_name = s_id?.getName()
    if ( l_name == undefined ) { l_name = "None"}
    if ( r_name == undefined ) { r_name = "None"}
    if ( s_name == undefined ) { s_name = "None"}

    left_hand.setText(l_name)
    right_hand.setText(r_name)
    shoutslot.setText(s_name)
    fadeout()
}