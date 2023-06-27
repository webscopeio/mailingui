"use client";

import React, { FC, CSSProperties } from "react";
import { Img, Link } from "@react-email/components";

interface EmojiProps {
  type: EmojiType;
  small?: boolean;
  href?: string;
  style?: CSSProperties,
  bg?: boolean;
}

const Emoji: FC<EmojiProps> = ({ type, href, style, small, bg }) => {
  const size = small ? "32px" : bg ? "72px" : "44px";

  const emoji = (
    <Img
      style={{
        height: size,
        width: size,
        margin: bg ? undefined : "14px",
        ...style
      }}
      src={getEmojiImg(type, bg)}
      alt={type}
    />
  );

  if (href) {
    return <Link href={href}>{emoji}</Link>;
  }

  return emoji;
};

type EmojiType =
  | "grinning-face"
  | "grinning-face-with-sweat"
  | "face-joy-tears"
  | "slightly-smiling-face"
  | "heart-eyes-face"
  | "enraged-face"
  | "sad-face"
  | "sobbing-face"
  | "star-struck-face"
  | "sunglasses-face"
  | "partying-face"
  | "sneezing-face"
  | "cold-face"
  | "hot-face"
  | "smiling-face"
  | "shushing-face"
  | "waving-hand"
  | "handshake"
  | "heart-hands"
  | "sleeping-face"
  | "sun-behind-rain-cloud"
  | "sun-behind-small-cloud"
  | "snowflake"
  | "cloud-with-lightning-and-rain"
  | "sun"
  | "folded-hands"
  | "thumbs-up"
  | "thumbs-down"
  | "red-heart"
  | "star"
  | "neutral-face"
  | "confounded-face";

const emojiImgMapping: Record<EmojiType, Record<"noBg" | "bg", string>> = {
  "confounded-face": {
    noBg: "https://i.ibb.co/W3xxzyp/confounded-face.png",
    bg: "https://i.ibb.co/9hMPjfc/confounded-face-bg.png",
  },
  "neutral-face": {
    noBg: "https://i.ibb.co/qy348qN/neutral-face.png",
    bg: "https://i.ibb.co/Rgw5Sc8/neutral-face-bg.png",
  },
  star: {
    noBg: "https://i.ibb.co/8X0QM4Y/star.png",
    bg: "https://i.ibb.co/VLpF26j/star-bg.png",
  },
  "red-heart": {
    noBg: "https://i.ibb.co/dW5djSp/red-heart.png",
    bg: "https://i.ibb.co/wcZWw5v/red-heart-bg.png",
  },
  "thumbs-down": {
    noBg: "https://i.ibb.co/mTFWRLS/thumbs-down.png",
    bg: "https://i.ibb.co/LQqK1D6/thumbs-down-bg.png",
  },
  "thumbs-up": {
    noBg: "https://i.ibb.co/nc5tK5J/thumbs-up.png",
    bg: "https://i.ibb.co/xgNkWQJ/thumbs-up-bg.png",
  },
  "folded-hands": {
    noBg: "https://i.ibb.co/6gkwB9Y/folded-hands.png",
    bg: "https://i.ibb.co/y6gTj4C/folded-hands-bg.png",
  },
  sun: {
    noBg: "https://i.ibb.co/W33fgfg/sun.png",
    bg: "https://i.ibb.co/6F3ZHkn/sun-bg.png",
  },
  "cloud-with-lightning-and-rain": {
    noBg: "https://i.ibb.co/jDVstXc/cloud-with-lightning-and-rain.png",
    bg: "https://i.ibb.co/9r0Tc17/cloud-with-lightning-and-rain-bg.png",
  },
  snowflake: {
    noBg: "https://i.ibb.co/g4PmFJ7/snowflake.png",
    bg: "https://i.ibb.co/ky5C4fg/snowflake-bg.png",
  },
  "sun-behind-small-cloud": {
    noBg: "https://i.ibb.co/48cJR1K/sun-behind-small-cloud.png",
    bg: "https://i.ibb.co/KbPSKdZ/sun-behind-small-cloud-bg.png",
  },
  "sun-behind-rain-cloud": {
    noBg: "https://i.ibb.co/zZDx8Hc/sun-behind-rain-cloud.png",
    bg: "https://i.ibb.co/NWF8zfz/sun-behind-rain-cloud-bg.png",
  },
  "sleeping-face": {
    noBg: "https://i.ibb.co/R08VkYy/sleeping-face.png",
    bg: "https://i.ibb.co/RvBtWVk/sleeping-face-bg.png",
  },
  "heart-hands": {
    noBg: "https://i.ibb.co/QQ6c4yL/heart-hands.png",
    bg: "https://i.ibb.co/c10w7Mq/heart-hands-bg.png",
  },
  handshake: {
    noBg: "https://i.ibb.co/FBkGKpM/handshake.png",
    bg: "https://i.ibb.co/7j4cGf6/handshake-bg.png",
  },
  "waving-hand": {
    noBg: "https://i.ibb.co/vxrnGbL/waving-hand.png",
    bg: "https://i.ibb.co/SRXk3GW/waving-hand-bg.png",
  },
  "shushing-face": {
    noBg: "https://i.ibb.co/YDb53KN/shushing-face.png",
    bg: "https://i.ibb.co/SyGRD1L/shusing-face-bg.png",
  },
  "smiling-face": {
    noBg: "https://i.ibb.co/Qn1rS3S/similing-face.png",
    bg: "https://i.ibb.co/NSgVdvg/smiling-face-bg.png",
  },
  "hot-face": {
    noBg: "https://i.ibb.co/vmNJpmJ/hot-face.png",
    bg: "https://i.ibb.co/vxzYX2r/hot-face-bg.png",
  },
  "cold-face": {
    noBg: "https://i.ibb.co/X4Tvtdr/cold-face.png",
    bg: "https://i.ibb.co/WK1Zzyh/cold-face-bg.png",
  },
  "sneezing-face": {
    noBg: "https://i.ibb.co/0jvB760/sneezing-face.png",
    bg: "https://i.ibb.co/fHdQ1dc/sneezing-face-bg.png",
  },
  "partying-face": {
    noBg: "https://i.ibb.co/WfB35x1/partying-face.png",
    bg: "https://i.ibb.co/443MNMX/partying-face-bg.png",
  },
  "sunglasses-face": {
    noBg: "https://i.ibb.co/ctjDySn/sunglasses-face.png",
    bg: "https://i.ibb.co/sQs5j38/sunglasses-face-bg.png",
  },
  "star-struck-face": {
    noBg: "https://i.ibb.co/cxfS1vW/star-struck.png",
    bg: "https://i.ibb.co/9pvJKcc/star-struck-bg.png",
  },
  "sobbing-face": {
    noBg: "https://i.ibb.co/d0M5XDR/sobbing-face.png",
    bg: "https://i.ibb.co/rdh6N9X/sobbing-face-bg.png",
  },
  "sad-face": {
    noBg: "https://i.ibb.co/4VszWpw/sad-face.png",
    bg: "https://i.ibb.co/mRRvD4y/sad-face-bg.png",
  },
  "enraged-face": {
    noBg: "https://i.ibb.co/wKT1v8S/enraged-face.png",
    bg: "https://i.ibb.co/zb0QR6C/enraged-face-bg.png",
  },
  "heart-eyes-face": {
    noBg: "https://i.ibb.co/Msz3Tqm/heart-eyes-face.png",
    bg: "https://i.ibb.co/NTFDz9Y/heart-eyes-face-bg.png",
  },
  "slightly-smiling-face": {
    noBg: "https://i.ibb.co/Wy8BMLf/slightly-smiling-face.png",
    bg: "https://i.ibb.co/4Jy58kx/slightly-smiling-face-bg.png",
  },
  "grinning-face": {
    noBg: "https://i.ibb.co/g47b3Pv/grinning-face.png",
    bg: "https://i.ibb.co/JvmVfxg/ginning-face-bg.png",
  },
  "grinning-face-with-sweat": {
    noBg: "https://i.ibb.co/nM65wzL/grinning-face-with-sweat.png",
    bg: "https://i.ibb.co/C07c7BH/grinning-face-with-sweat-bg.png",
  },
  "face-joy-tears": {
    noBg: "https://i.ibb.co/7yH5tRd/face-joy-tears.png",
    bg: "https://i.ibb.co/n3WdpTB/face-joy-tears-bg.png",
  },
};

const getEmojiImg = (type: EmojiType, withBackground?: boolean) =>
  emojiImgMapping[type][withBackground ? "bg" : "noBg"];

export { Emoji };
