import kaplay from "kaplay";

const k = kaplay({
    letterbox: true,
    width: 1280,
    height: 720,
    crisp: true,
    global: false,
});

k.loadRoot("./"); // A good idea for Itch.io publishing later
// k.loadSprite("wizard", "sprites/wizzard_m_idle_anim_f0.png");
k.loadSpriteAtlas("public/sprites/knight.png", {
    wizard: {x: 0, y: 0, width:128, height:128}
})

k.setBackground(k.Color.fromHex("#071821"))

k.add([k.pos(120, 80), k.sprite("wizard")]);

k.onClick(() => k.addKaboom(k.mousePos()));