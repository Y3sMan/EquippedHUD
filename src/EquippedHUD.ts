import { browser, once, printConsole, Game, on, createText, setTextString, destroyAllTexts, storage, settings, Actor, getTextString, Utility, setTextColor, getTextColor, getNumCreatedTexts} from  "skyrimPlatform";
import { GetIntValue, SetIntValue } from "@skyrim-platform/papyrus-util/StorageUtil"
browser.setVisible(true);
browser.setFocused(false);

function pl() { return Game.getPlayer(); }

const key = '.equipped-hud'

var left_text: number = storage[key+'left.'] as number
var right_text: number = storage[key+'right.'] as number
var shout_text: number = storage[key+'shout.'] as number
let x = settings["equippedhud"]["x"] as number;
let y = settings["equippedhud"]["y"] as number;
var left_offset = -500
var right_offset = 500

var plugin_init = key + '.init.'
var init = storage[plugin_init] as number | 0
storage[plugin_init] == false
// let allowInit = storage[plugin_init] as boolean | false;
const WasInitialized = () => GetIntValue(null, plugin_init, 0);
const MarkInitialized = () => SetIntValue(null, plugin_init, 1);

const InitPlugin = function(){
    left_text = createText(x + left_offset, y, "Left", [1,1,1,1]);
    right_text = createText(x + right_offset, y, "Right", [1,1,1,1]);
    shout_text = createText(x, y, "Shout", [1,1,1,1]);
    storage[key+'left.'] = left_text
    storage[key+'right.'] = right_text
    storage[key+'shout.'] = shout_text
    storage[plugin_init] = true
    MarkInitialized()
    init = 1
    printConsole('EquippedHUD - SP initialized')
}

once('update', () => {
    if ( init == 0 || WasInitialized() == 0) {
        InitPlugin()
    }
});
on('loadGame', () => {
    init = 0
    InitPlugin()
    SetEquipped()
});
var bfadein = false
var bfadeout = false
on('menuOpen', () => { browser.setVisible(false) });
on('menuClose', () => {  browser.setVisible(true);fadein() });
on('actionEndDraw', () => { 
    fadein()
});
on('actionEndSheathe', () => { 
    fadeout()
});
const fadeout = async () => {
    bfadeout= true
    await Utility.wait(3.0);
    if ( bfadeout ){
        var widgets: number[] = [ storage[key+'left.'] as number, storage[key+'right.'] as number, storage[key+'shout.'] as number]
        // var widgets: number[]  = [ left_text, right_text, shout_text]
        widgets.forEach(w => {
            let c = getTextColor(w)
            c[3] = 0
            setTextColor(w, c) 
        }); 
    }
    bfadeout = false
}
function fadein() {
    bfadein = true
    bfadeout = false
    // if ( !bfadeout ){
    let widgets: number[] = [ storage[key+'left.'] as number, storage[key+'right.'] as number, storage[key+'shout.'] as number]
    // var widgets: number[]  = [ left_text, right_text, shout_text]
    widgets.forEach(w => {
        let c = getTextColor(w)
        c[3] = 1
        setTextColor(w, c) 
    }); 
    // }
    bfadein = false
}
on('equip', (e) => {
    fadein()
    SetEquipped()
    if (!pl()?.isWeaponDrawn()) {fadeout()}
});
on('unequip', (e) => {
    fadein()
    SetEquipped()
    if (!pl()?.isWeaponDrawn()) {fadeout()}
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
    setTextString(left_text, l_name)
    setTextString(right_text, r_name)
    setTextString(shout_text, s_name)
}