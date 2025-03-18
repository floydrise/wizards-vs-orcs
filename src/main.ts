import kaplay from "kaplay";
import {loadAssets} from "./loadAssets";
import {makeMenu} from "./makeMenu";

const k = kaplay({
    letterbox: true,
    width: 1280,
    height: 720,
    crisp: true,
    global: false,
});

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.setBackground(k.Color.fromHex("#071821"))

loadAssets(k);
makeMenu(k);

k.go("menu");