import { KAPLAYCtx } from "kaplay";

export const loadAssets = (k: KAPLAYCtx) => {
  k.loadSprite("wizard", "/sprites/wizzard_m_idle_anim_f0.png");
  k.loadSprite("demon", "/sprites/big_demon_idle_anim_f0.png");
  k.loadSprite("magic", "/sprites/weapon.png");
  k.loadSprite("arrow", "/sprites/arrow.png");
  k.loadSprite("background", "/sprites/floor.png");

  k.loadFont("press2p", "/fonts/PixelOperator8.ttf");

  k.loadSound("fire", "/sounds/fire.wav");
  k.loadSound("wind", "/sounds/wind.wav");
  k.loadSound("explosion", "/sounds/explosion.wav");

  k.loadMusic("bg", "/music/bgMusic.mp3")
};
