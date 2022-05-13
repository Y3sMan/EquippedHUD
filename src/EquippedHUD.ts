import { browser, once, printConsole, Game, on, createText, setTextString, destroyAllTexts, storage, settings, getNumCreatedTexts, getTextString, Utility} from  "skyrimPlatform";
import { SetIntValue, GetIntValue } from "@skyrim-platform/papyrus-util/StorageUtil"
import * as wt from "@skyrim-platform/WidgetTools/WidgetTools";

browser.setVisible(true);
browser.setFocused(false);
const visible = browser.isVisible();
const focused = browser.isFocused();

export function pl() { return Game.getPlayer(); }

const key = '.equipped-hud.'

var left_hand: number = 0
var right_hand: number = 0
var shoutslot: number = 0
let x = settings["equippedhud"]["x"] as number;
let y = settings["equippedhud"]["y"] as number;
var left_offset = -500
var right_offset = 500

var init: number
var modname: string = 'EquippedHUD' 
const colors = {
    white: [1, 1, 1, 1]
}

storage[key + 'init.'] == false
once('skyrimLoaded', () => {init = 0});
once('update', () => {
    wt.DestroyAllModWidgets(modname)
    left_hand = wt.CreateText('left', 'left_hand', modname, x + left_offset, y, colors['white'])
    right_hand = wt.CreateText('right', 'right_hand', modname, x + right_offset, y, colors['white'])
    shoutslot = wt.CreateText('shout', 'shoutslot', modname, x, y, colors['white'])
    init = 1
    SetIntValue(null, key + 'init', 1)
    SetEquipped(left_hand, right_hand, shoutslot)
    printConsole('EquippedHUD - SP initialized')
});
on('menuOpen', () => {wt.FadeAllModTexts(modname, false)});
on('menuClose', () => {wt.FadeAllModTexts(modname, true)});
var flag = false
on('actionBeginDraw', () => { 
    flag = true
    wt.FadeAllModTexts(modname, true)
});
on('actionBeginSheathe', () => { 
    flag = false
    fadeout()
});
const fadeout = async () => {
    await Utility.wait(3.0);
    if ( !flag ){wt.FadeAllModTexts(modname, false)}
}
on('equip', (e) => {
    if ( e.actor.getFormID() != pl()?.getFormID() ) { return; }
    SetEquipped(left_hand, right_hand, shoutslot)
});
on('unequip', (e) => {
    if ( e.actor.getFormID() != pl()?.getFormID() ) { return; }
    SetEquipped(left_hand, right_hand, shoutslot)
});

function SetEquipped(l: number, r: number, s: number) {
    /* 
        0 = left hand
        1 = right hand
        2 = shoutslot slot
    */
    wt.FadeAllModTexts(modname, true)
    var l_id = pl()?.getEquippedObject(0)
    var r_id = pl()?.getEquippedObject(1)
    var s_id = pl()?.getEquippedObject(2)
    var l_name = l_id?.getName()
    var r_name = r_id?.getName()
    var s_name = s_id?.getName()
    if ( l_name == undefined ) { l_name = "None"}
    if ( r_name == undefined ) { r_name = "None"}
    if ( s_name == undefined ) { s_name = "None"}
    wt.EditModTextString(l_name, modname, 'left_hand')
    wt.EditModTextString(r_name, modname, 'right_hand')
    wt.EditModTextString(s_name, modname, 'shoutslot')
    fadeout()
}