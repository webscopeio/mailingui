"use client";

import React, { FC, CSSProperties } from "react";
import { Img, Link } from "@react-email/components";

interface SocialIconProps {
  type: SocialIconType;
  size?: number;
  href?: string;
  style?: CSSProperties;
  bg?: boolean;
}

const SocialIcon: FC<SocialIconProps> = ({
  type,
  href,
  style,
  size: sizeProp,
  bg,
}) => {
  const size = sizeProp ? `${sizeProp}px` : bg ? "44px" : "24px";

  const emoji = (
    <Img
      style={{
        height: size,
        width: size,
        margin: bg ? 0 : "14px",
        ...style,
      }}
      src={getIconUrl(type, bg)}
      alt={type}
      width={sizeProp}
      height={sizeProp}
    />
  );

  if (href) {
    return <Link href={href}>{emoji}</Link>;
  }

  return emoji;
};

const getIconUrl = (type: SocialIconType, bg?: boolean) => {
  const baseUrl = `${
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
  }/socials`;

  return `${baseUrl}/${type}${bg ? "-bg" : ""}.png`;
};

type SocialIconType =
  | "spotify"
  | "rss"
  | "houzz"
  | "goodreads"
  | "meetup"
  | "telegram"
  | "9gag"
  | "envato"
  | "google drive"
  | "git"
  | "blogger"
  | "instagram"
  | "vimeo"
  | "stack overflow"
  | "github"
  | "tinder"
  | "kakao talk"
  | "airbnb"
  | "foursquare"
  | "dropbox"
  | "tumblr"
  | "steam"
  | "product hunt"
  | "medium"
  | "behance"
  | "flickr"
  | "tiktok"
  | "devianart"
  | "google play"
  | "skype"
  | "wordpress"
  | "messenger"
  | "soundcloud"
  | "slack"
  | "twitter"
  | "discord"
  | "patreon"
  | "coderwall"
  | "linkedin"
  | "trello"
  | "angelist"
  | "badoo"
  | "dribbble"
  | "codepen"
  | "evernote"
  | "reddit"
  | "yahoo"
  | "twitch"
  | "youtube"
  | "pinterest"
  | "whatsapp"
  | "facebook"
  | "unsplash"
  | "quora"
  | "snapchat"
  | "kickstarter";

export { SocialIcon, type SocialIconType, type SocialIconProps };
