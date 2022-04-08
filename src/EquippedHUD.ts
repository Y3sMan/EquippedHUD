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
var init = GetIntValue(null, key + 'init', 0)
// var init = false
once('update', () => {
    destroyAllTexts()
    if ( init == 0 ) {
        left_text = createText(x + left_offset, y, "Left", [1,1,1,1]);
        right_text = createText(x + right_offset, y, "Right", [1,1,1,1]);
        shout_text = createText(x, y, "Shout", [1,1,1,1]);
        storage[key + 'init.'] = true
        init = 1
        SetIntValue(null, key + 'init', 1)
        SetEquipped(left_text, right_text, shout_text)
        printConsole('EquippedHUD - SP initialized')
    }
});
on('menuOpen', () => { browser.setVisible(false); });
on('menuClose', () => { browser.setVisible(true); });
on('actionBeginDraw', () => { browser.setVisible(false); });
on('actionBeginSheathe', () => { browser.setVisible(true); });
on('equip', (e) => {
    if ( e.actor.getFormID() != pl()?.getFormID() ) { return; }
    SetEquipped(left_text, right_text, shout_text)
});
on('unequip', (e) => {
    if ( e.actor.getFormID() != pl()?.getFormID() ) { return; }
    SetEquipped(left_text, right_text, shout_text)
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