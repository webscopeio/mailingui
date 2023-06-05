import { type StaticImageData } from "next/image";

import Viola from "public/static/images/templates-preview/viola.png";
import Olivio from "public/static/images/templates-preview/olivio.png";
import Giola from "public/static/images/templates-preview/giola.png";
import Finanza from "public/static/images/templates-preview/finanza.png";
import Espace from "public/static/images/templates-preview/espace.png";
import Bianco from "public/static/images/templates-preview/bianco.png";
import SocialIcons from "public/static/images/components-preview/social_icons.png";
import Paragraphs from "public/static/images/components-preview/paragraphs.png";
import Lists from "public/static/images/components-preview/listing.png";
import Heroes from "public/static/images/components-preview/heroes.png";
import Emojis from "public/static/images/components-preview/emojis.png";
import Dividers from "public/static/images/components-preview/dividers.png";
import Buttons from "public/static/images/components-preview/buttons.png";
import Badges from "public/static/images/components-preview/badges.png";

interface EmailComponent {
  image: StaticImageData;
  title: string;
  subtitle: string;
  type: string;
}

export const emailComponents: EmailComponent[] = [
  {
    type: "heroes",
    title: "Hero section",
    subtitle: "Beautiful headers to showcase your message",
    image: Heroes,
  },
  {
    type: "lists",
    title: "Lists",
    subtitle: "Organize information with simple lists",
    image: Lists,
  },
  {
    type: "badges",
    title: "Badges",
    subtitle: "Highlight key information with attention-grabbing badges",
    image: Badges,
  },
  {
    type: "buttons",
    title: "Buttons",
    subtitle: "Drive user action with clickable buttons",
    image: Buttons,
  },
  {
    type: "emojis",
    title: "Emojis",
    subtitle: "Add personality and emotion to your messages",
    image: Emojis,
  },
  {
    type: "social-icons",
    title: "Social icons",
    subtitle: "Increase engagement with clickable social icons",
    image: SocialIcons,
  },
  {
    type: "paragraphs",
    title: "Paragraphs",
    subtitle: "Craft compelling content with easy-to-read paragraphs",
    image: Paragraphs,
  },
  {
    type: "dividers",
    title: "Dividers",
    subtitle: "Create visual separation for a clean, professional look",
    image: Dividers,
  },
];

export const emailTemplates = [
  {
    title: "Espace",
    image: Espace,
    type: "espace",
    templates: [
      {
        title: "Reset password",
        route: "reset-password",
        preview: "src/email-templates/espace/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview: "src/email-templates/espace/booking-confirmation/preview.html",
      },
    ],
  },
  {
    title: "Giola",
    image: Giola,
    type: "giola",
    templates: [
      {
        title: "Reset password",
        route: "reset-password",
        preview: "src/email-templates/giola/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview: "src/email-templates/giola/booking-confirmation/preview.html",
      },
    ],
  },
  {
    title: "Viola",
    image: Viola,
    type: "viola",
    templates: [
      {
        title: "Reset password",
        route: "reset-password",
        preview: "src/email-templates/viola/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview: "src/email-templates/viola/booking-confirmation/preview.html",
      },
    ],
  },
  {
    title: "Finanza",
    image: Finanza,
    type: "finanza",
    templates: [
      {
        title: "Reset password",
        route: "reset-password",
        preview: "src/email-templates/finanza/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview:
          "src/email-templates/finanza/booking-confirmation/preview.html",
      },
    ],
  },
  {
    title: "Bianco",
    image: Bianco,
    type: "bianco",
    templates: [
      {
        title: "Reset password",
        route: "reset-password",
        preview: "src/email-templates/bianco/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview: "src/email-templates/bianco/booking-confirmation/preview.html",
      },
    ],
  },
  {
    title: "Olivio",
    image: Olivio,
    type: "olivio",
    templates: [
      {
        title: "Reset password",
        route: "reset-password",
        preview: "src/email-templates/olivio/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview: "src/email-templates/olivio/booking-confirmation/preview.html",
      },
    ],
  },
];
