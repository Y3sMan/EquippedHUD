import { browser, once, printConsole, Game, on, Form } from  "skyrimPlatform";

browser.setVisible(true);
browser.setFocused(false);
const visible = browser.isVisible();
const focused = browser.isFocused();
browser.loadUrl("file:///Data/Platform/UI/test.html"); 
export function pl() { return Game.getPlayer(); }
on('equip', (e) => {
    // printConsole('help')
    let help = 'help'
    /* 
        0 = left hand
        1 = right hand
        2 = shout slot
    */
    // if ( e.actor != pl() ) { return; }
    var l_id = pl()?.getEquippedObject(0)
    var r_id = pl()?.getEquippedObject(1)
    var l_name = l_id?.getName()
    var r_name = r_id?.getName()
    if ( l_name == undefined ) { l_name = "None"}
    if ( r_name == undefined ) { r_name = "None"}
    browser.executeJavaScript(`document.getElementById("left").innerHTML = "${l_name}";`);
    browser.executeJavaScript(`document.getElementById("right").innerHTML = "${r_name}";`);

});