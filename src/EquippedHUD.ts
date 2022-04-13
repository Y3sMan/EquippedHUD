import { browser, once, printConsole, Game, on, createText, setTextString, destroyAllTexts, storage, settings, getNumCreatedTexts, getTextString, Utility} from  "skyrimPlatform";
import { SetIntValue, GetIntValue } from "@skyrim-platform/papyrus-util/StorageUtil"

browser.setVisible(true);
browser.setFocused(false);
const visible = browser.isVisible();
const focused = browser.isFocused();

export function pl() { return Game.getPlayer(); }

const key = '.equipped-hud.'

var left_text: number = storage[key+'left.'] as number
var right_text: number = storage[key+'right.'] as number
var shout_text: number = storage[key+'shout.'] as number
let x = settings["equippedhud"]["x"] as number;
let y = settings["equippedhud"]["y"] as number;
var left_offset = -500
var right_offset = 500

var init: number
storage[key + 'init.'] == false
once('skyrimLoaded', () => {init = 0});
once('update', () => {
    // destroyAllTexts()
    if ( init == 0 && storage[key + 'init.'] == true ) {
        left_text = createText(x + left_offset, y, "Left", [1,1,1,1]);
        right_text = createText(x + right_offset, y, "Right", [1,1,1,1]);
        shout_text = createText(x, y, "Shout", [1,1,1,1]);
        storage[key+'left.'] = left_text
        storage[key+'right.'] = right_text
        storage[key+'shout.'] = shout_text
        storage[key + 'init.'] = true
        init = 1
        SetIntValue(null, key + 'init', 1)
        SetEquipped(left_text, right_text, shout_text)
        printConsole('EquippedHUD - SP initialized')
    }
    // printConsole(`The number of texts is ${getNumCreatedTexts()}`)
    // for (let i = getNumCreatedTexts(); i > 0; i--) {
    //     printConsole(`The widget id is ${i} and it's string is ${getTextString(i)}`)
    // }
});
on('menuOpen', () => { browser.setVisible(false); });
on('menuClose', () => { browser.setVisible(true); });
var flag = false
on('actionBeginDraw', () => { 
    flag = true
    browser.setVisible(true); 
});
on('actionBeginSheathe', () => { 
    flag = false
    fadeout()
});
const fadeout = async () => {
    await Utility.wait(3.0);
    if ( !flag ){browser.setVisible(false); }
}
on('equip', (e) => {
    browser.setVisible(true); 
    if ( e.actor.getFormID() != pl()?.getFormID() ) { return; }
    SetEquipped(left_text, right_text, shout_text)
    fadeout()
});
on('unequip', (e) => {
    browser.setVisible(true); 
    if ( e.actor.getFormID() != pl()?.getFormID() ) { return; }
    SetEquipped(left_text, right_text, shout_text)
    fadeout()
});

function SetEquipped(l: number, r: number, s: number) {
    /* 
        0 = left hand
        1 = right hand
        2 = shout slot
    */
    var l_id = pl()?.getEquippedObject(0)
    var r_id = pl()?.getEquippedObject(1)
    var s_id = pl()?.getEquippedObject(2)
    var l_name = l_id?.getName()
    var r_name = r_id?.getName()
    var s_name = s_id?.getName()
    if ( l_name == undefined ) { l_name = "None"}
    if ( r_name == undefined ) { r_name = "None"}
    if ( s_name == undefined ) { s_name = "None"}
    setTextString(l, l_name)
    setTextString(r, r_name)
    setTextString(s, s_name)
}