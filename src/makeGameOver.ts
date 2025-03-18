import {KAPLAYCtx} from "kaplay";

export const makeGameOver = (k: KAPLAYCtx) => {
  return k.scene("gameOver", () => {
      k.add([
          k.text("Game Over", {
              size: 32,
              font: "press2p",
          }),
          k.pos(k.center().x, k.center().y),
          k.color(k.Color.fromHex("#e0f8cf")),
          k.anchor("center")
      ])
      k.add([
          k.text("Press enter to play again", {
              size: 24,
              font: "press2p",
          }),
          k.pos(k.center().x, k.center().y + 64),
          k.color(k.Color.fromHex("#e0f8cf")),
          k.anchor("center")
      ])

      k.onKeyPress("enter", () => {
          k.go("game")
      })
  })
}