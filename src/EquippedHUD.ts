import { browser, once, printConsole, Game, on, createText, setTextString, destroyAllTexts, storage, settings} from  "skyrimPlatform";
import { SetIntValue, GetIntValue } from "@skyrim-platform/papyrus-util/StorageUtil"

browser.setVisible(true);
browser.setFocused(false);
const visible = browser.isVisible();
const focused = browser.isFocused();

export function pl() { return Game.getPlayer(); }

var left_text: number
var right_text: number
var shout_text: number
let x = settings["equippedhud"]["x"] as number;
let y = settings["equippedhud"]["y"] as number;
var left_offset = -500
var right_offset = 500

const key = '.equipped-hud.'
function CreateWidgets() {
    left_text = createText(x + left_offset, y, "Left", [1,1,1,1]);
    right_text = createText(x + right_offset, y, "Right", [1,1,1,1]);
    shout_text = createText(x, y, "Shout", [1,1,1,1]);
    storage[key + 'init.'] = true
    printConsole('EquippedHUD - SP initialized')
}
function SetWidgetValues() {
    SetIntValue(null, key + 'left', left_text)
    SetIntValue(null, key + 'right', right_text)
    SetIntValue(null, key + 'shout', shout_text)
    SetIntValue(null, key + 'init', 1)
    SetEquipped()
}
function init() {
    var init = GetIntValue(null, key + 'init', 0)
    // if ( init == 0 ) {
        CreateWidgets()
        SetWidgetValues()
    // }
    SetIntValue(null, key + 'init', 1)
}
once('skyrimLoaded', () => { 
    printConsole('skryimLoaded')
    SetIntValue(null, key + 'init', 0)
    CreateWidgets()
});
once('scriptInit', () => {
    printConsole('scriptinit')
    init()
});
once('loadGame', () => {
    printConsole('loadgame')
    SetIntValue(null, key + 'init', 0)
    init()
});
once('update', () => {
    printConsole('init')
    init()
});
on('menuOpen', () => { browser.setVisible(false); });
on('menuClose', () => { browser.setVisible(true); });
on('actionBeginDraw', () => { 
    printConsole('begindraw')
    browser.setVisible(false); });
    on('actionBeginSheathe', () => { 
    printConsole('beginsheathe')
    browser.setVisible(true); });
on('equip', (e) => {
    if ( e.actor.getFormID() != pl()?.getFormID() ) { return; }
    SetEquipped()
});
on('unequip', (e) => {
    if ( e.actor.getFormID() != pl()?.getFormID() ) { return; }
    SetEquipped()
});

function SetEquipped() {
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
    let l: number 
    let r: number 
    let s: number 
    // try {
        l = GetWidget('left')
        r = GetWidget('right')
        s = GetWidget('shout')
    // } catch (error) {
        // error
    // }
    setTextString(l, l_name)
    setTextString(r, r_name)
    setTextString(s, s_name)
}
function GetWidget(slot:string) {
    slot = slot.toLowerCase()
    if ( slot != 'left' || slot != 'right' || slot != 'shout') { return `${slot} is not a proper argument for GetWidget()`}
    if ( GetIntValue(null, key + slot, 0) == 0 ) { return `${slot} widget not created`}
    return GetIntValue(null, key + slot, 0)
}