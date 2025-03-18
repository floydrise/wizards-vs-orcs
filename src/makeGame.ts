import { KAPLAYCtx } from "kaplay";

export const makeGame = (k: KAPLAYCtx) => {
  return k.scene("game", () => {
    const background = k.add([
      k.pos(0, 0),
      k.sprite("background", { width: 1280, height: 720, tiled: true }),
      k.scale(4),
    ]);

    const hudBox = k.add([
      k.pos(0, 0),
      k.rect(1280, 64),
      k.outline(4),
      k.color(k.Color.fromHex("#071821")),
      k.z(10),
    ]);

    const score = k.add([
      k.pos(20, 20),
      k.color(k.Color.fromHex("#e0f8fc")),
      k.text("Score: 0", {
        size: 32,
        font: "press2p",
      }),
      k.z(10),
      { value: 0 },
    ]);

    const player = k.add([
      k.pos(k.center().x, 700 - 64),
      k.sprite("wizard"),
      k.area(),
      k.body(),
      k.anchor("center"),
      k.scale(4),
      {
        speed: 800,
      },
      "player",
    ]);

    const makeEnemy = () => {
      return k.add([
        k.pos(k.rand(k.vec2(k.width(), 0))),
        k.sprite("demon"),
        k.area(),
        k.anchor("center"),
        k.scale(4),
        {
          speed: 300,
          fireTimer: 0,
          fireTime: k.rand(10, 100),
        },
        "enemy",
      ]);
    };

    for (let i = 0; i < 5; i++) {
      makeEnemy();
    }

    k.onKeyDown("left", () => {
      player.move(-player.speed, 0);
      if (player.pos.x <= 32) {
        player.pos.x = 32;
      }
    });

    k.onKeyDown("right", () => {
      player.move(player.speed, 0);
      if (player.pos.x >= 1280 - 32) {
        player.pos.x = 1280 - 32;
      }
    });

    k.onKeyDown("up", () => {
      player.move(0, -player.speed);
      if (player.pos.y <= 96) {
        player.pos.y = 96;
      }
    });

    k.onKeyDown("down", () => {
      player.move(0, player.speed);
      if (player.pos.y >= 720 - 64) {
        player.pos.y = 720 - 64;
      }
    });

  });
};
