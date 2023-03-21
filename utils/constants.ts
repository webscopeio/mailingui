// component images
import Heroes from "/public/static/images/components-preview/heroes.png";
import Listing from "/public/static/images/components-preview/listing.png";
import Badges from "/public/static/images/components-preview/badges.png";
import Buttons from "/public/static/images/components-preview/buttons.png";
import Emojis from "/public/static/images/components-preview/emojis.png";
import SocialIcons from "/public/static/images/components-preview/social_icons.png";
import Paragraphs from "/public/static/images/components-preview/paragraphs.png";
import Dividers from "/public/static/images/components-preview/dividers.png";

// template images
import Espace from "public/static/images/templates-preview/espace.png";
import Giola from "public/static/images/templates-preview/giola.png";
import Viola from "public/static/images/templates-preview/viola.png";
import Finanza from "public/static/images/templates-preview/finanza.png";
import Bianco from "public/static/images/templates-preview/bianco.png";
import Olivio from "public/static/images/templates-preview/olivio.png";

import MjmlIcon from "/public/static/icons/mjml.png";
import ReactIcon from "/public/static/icons/react.png";
import HtmlIcon from "/public/static/icons/html.png";

export const emailComponents = [
  {
    image: Heroes,
    title: "Hero section",
    subtitle: "Lorem ipsum dolor sit amet",
    type: "heroes",
    components: [
      {
        title: "Empty hero",
        htmlCode: "email-components/heroes/empty-hero/HtmlCode.html",
        htmlPreview: "email-components/heroes/empty-hero/HtmlPreview.html",
        reactEmailCode: "email-components/heroes/empty-hero/ReactEmailCode.tsx",
      },
      {
        title: "Top left icon",
        htmlCode: "email-components/heroes/top-left-icon-hero/HtmlCode.html",
        htmlPreview:
          "email-components/heroes/top-left-icon-hero/HtmlPreview.html",
        reactEmailCode:
          "email-components/heroes/top-left-icon-hero/ReactEmailCode.tsx",
      },
      {
        title: "Top center icon",
        htmlCode: "email-components/heroes/top-center-icon-hero/HtmlCode.html",
        htmlPreview:
          "email-components/heroes/top-center-icon-hero/HtmlPreview.html",
        reactEmailCode:
          "email-components/heroes/top-center-icon-hero/ReactEmailCode.tsx",
      },
      {
        title: "Fade top center icon",
        htmlCode:
          "email-components/heroes/fade-top-center-icon-hero/HtmlCode.html",
        htmlPreview:
          "email-components/heroes/fade-top-center-icon-hero/HtmlPreview.html",
        reactEmailCode:
          "email-components/heroes/fade-top-center-icon-hero/ReactEmailCode.tsx",
      },
      {
        title: "Padding black",
        htmlCode: "email-components/heroes/padding-black-hero/HtmlCode.html",
        htmlPreview:
          "email-components/heroes/padding-black-hero/HtmlPreview.html",
        reactEmailCode:
          "email-components/heroes/padding-black-hero/ReactEmailCode.tsx",
      },
      {
        title: "Padding white",
        htmlCode: "email-components/heroes/padding-white-hero/HtmlCode.html",
        htmlPreview:
          "email-components/heroes/padding-white-hero/HtmlPreview.html",
        reactEmailCode:
          "email-components/heroes/padding-white-hero/ReactEmailCode.tsx",
      },
    ],
  },
  {
    image: Listing,
    title: "Listing",
    subtitle: "Lorem ipsum dolor sit amet",
    type: "lists",
    components: [
      {
        title: "Horizontal center list",
        htmlCode: "email-components/lists/horizontal-center-list/HtmlCode.html",
        mjmlCode: "email-components/lists/horizontal-center-list/MjmlCode.mjml",
        htmlPreview:
          "email-components/lists/horizontal-center-list/HtmlPreview.html",
      },
      {
        title: "Horizontal left list",
        htmlCode: "email-components/lists/horizontal-left-list/HtmlCode.html",
        mjmlCode: "email-components/lists/horizontal-left-list/MjmlCode.mjml",
        htmlPreview:
          "email-components/lists/horizontal-left-list/HtmlPreview.html",
      },
      {
        title: "Vertical center list",
        htmlCode: "email-components/lists/vertical-center-list/HtmlCode.html",
        mjmlCode: "email-components/lists/vertical-center-list/MjmlCode.mjml",
        htmlPreview:
          "email-components/lists/vertical-center-list/HtmlPreview.html",
      },
      {
        title: "Vertical left list",
        htmlCode: "email-components/lists/vertical-left-list/HtmlCode.html",
        mjmlCode: "email-components/lists/vertical-left-list/MjmlCode.mjml",
        htmlPreview:
          "email-components/lists/vertical-left-list/HtmlPreview.html",
      },
      {
        title: "Bullet point list",
        htmlCode: "email-components/lists/bullet-point-list/HtmlCode.html",
        mjmlCode: "email-components/lists/bullet-point-list/MjmlCode.mjml",
        htmlPreview:
          "email-components/lists/bullet-point-list/HtmlPreview.html",
      },
      {
        title: "Bullet number list",
        htmlCode: "email-components/lists/bullet-number-list/HtmlCode.html",
        mjmlCode: "email-components/lists/bullet-number-list/MjmlCode.mjml",
        htmlPreview:
          "email-components/lists/bullet-number-list/HtmlPreview.html",
      },
    ],
  },
  {
    image: Badges,
    title: "Badges",
    subtitle: "Lorem ipsum dolor sit amet",
    type: "badges",
    components: [
      {
        title: "Small badges",
        htmlCode: "email-components/badges/small-badges/HtmlCode.html",
        mjmlCode: "email-components/badges/small-badges/MjmlCode.mjml",
        htmlPreview: "email-components/badges/small-badges/HtmlPreview.html",
      },
      {
        title: "Medium badges",
        htmlCode: "email-components/badges/medium-badges/HtmlCode.html",
        mjmlCode: "email-components/badges/medium-badges/MjmlCode.mjml",
        htmlPreview: "email-components/badges/medium-badges/HtmlPreview.html",
      },
      {
        title: "Small round badges",
        htmlCode: "email-components/badges/small-badges-round/HtmlCode.html",
        mjmlCode: "email-components/badges/small-badges-round/MjmlCode.mjml",
        htmlPreview:
          "email-components/badges/small-badges-round/HtmlPreview.html",
      },
      {
        title: "Medium round badges",
        htmlCode: "email-components/badges/medium-badges-round/HtmlCode.html",
        mjmlCode: "email-components/badges/medium-badges-round/MjmlCode.mjml",
        htmlPreview:
          "email-components/badges/medium-badges-round/HtmlPreview.html",
      },
    ],
  },
  {
    image: Buttons,
    title: "Buttons",
    subtitle: "Lorem ipsum dolor sit amet",
    type: "buttons",
    components: [
      {
        title: "Primary buttons",
        htmlCode: "email-components/buttons/primary-buttons/HtmlCode.html",
        mjmlCode: "email-components/buttons/primary-buttons/MjmlCode.mjml",
        htmlPreview:
          "email-components/buttons/primary-buttons/HtmlPreview.html",
      },
      {
        title: "Secondary buttons",
        htmlCode: "email-components/buttons/secondary-buttons/HtmlCode.html",
        mjmlCode: "email-components/buttons/secondary-buttons/MjmlCode.mjml",
        htmlPreview:
          "email-components/buttons/secondary-buttons/HtmlPreview.html",
      },
      {
        title: "Tertiary buttons",
        htmlCode: "email-components/buttons/tertiary-buttons/HtmlCode.html",
        mjmlCode: "email-components/buttons/tertiary-buttons/MjmlCode.mjml",
        htmlPreview:
          "email-components/buttons/tertiary-buttons/HtmlPreview.html",
      },
      {
        title: "Primary round buttons",
        htmlCode:
          "email-components/buttons/primary-buttons-round/HtmlCode.html",
        mjmlCode:
          "email-components/buttons/primary-buttons-round/MjmlCode.mjml",
        htmlPreview:
          "email-components/buttons/primary-buttons-round/HtmlPreview.html",
      },
      {
        title: "Secondary round buttons",
        htmlCode:
          "email-components/buttons/secondary-buttons-round/HtmlCode.html",
        mjmlCode:
          "email-components/buttons/secondary-buttons-round/MjmlCode.mjml",
        htmlPreview:
          "email-components/buttons/secondary-buttons-round/HtmlPreview.html",
      },
      {
        title: "Tertiary round buttons",
        htmlCode:
          "email-components/buttons/tertiary-buttons-round/HtmlCode.html",
        mjmlCode:
          "email-components/buttons/tertiary-buttons-round/MjmlCode.mjml",
        htmlPreview:
          "email-components/buttons/tertiary-buttons-round/HtmlPreview.html",
      },
    ],
  },
  {
    image: Emojis,
    title: "Emoji",
    subtitle: "Lorem ipsum dolor sit amet",
    type: "emojis",
    components: [
      {
        title: "Basic emojis",
        htmlCode: "email-components/emojis/basic-emojis/HtmlCode.html",
        mjmlCode: "email-components/emojis/basic-emojis/MjmlCode.mjml",
        htmlPreview: "email-components/emojis/basic-emojis/HtmlPreview.html",
      },
      {
        title: "Basic emojis with background",
        htmlCode:
          "email-components/emojis/basic-emojis-background/HtmlCode.html",
        mjmlCode:
          "email-components/emojis/basic-emojis-background/MjmlCode.mjml",
        htmlPreview:
          "email-components/emojis/basic-emojis-background/HtmlPreview.html",
      },
    ],
  },
  {
    image: SocialIcons,
    title: "Social icons",
    subtitle: "Lorem ipsum dolor sit amet",
    type: "icons",
    components: [
      {
        title: "Brand icons",
        htmlCode: "email-components/icons/brand-icons/HtmlCode.html",
        reactEmailCode: "email-components/icons/brand-icons/ReactEmailCode.tsx",
        htmlPreview: "email-components/icons/brand-icons/HtmlPreview.html",
      },
      {
        title: "Brand icons with background",
        htmlCode: "email-components/icons/brand-icons-background/HtmlCode.html",
        reactEmailCode:
          "email-components/icons/brand-icons-background/ReactEmailCode.tsx",
        htmlPreview:
          "email-components/icons/brand-icons-background/HtmlPreview.html",
      },
    ],
  },
  {
    image: Paragraphs,
    title: "Paragraph",
    subtitle: "Lorem ipsum dolor sit amet",
    type: "paragraphs",
    components: [],
  },
  {
    image: Dividers,
    title: "Dividers",
    subtitle: "Lorem ipsum dolor sit amet",
    type: "dividers",
    components: [
      {
        title: "Solid divider",
        htmlCode: "email-components/dividers/solid-divider/HtmlCode.html",
        mjmlCode: "email-components/dividers/solid-divider/MjmlCode.mjml",
        htmlPreview: "email-components/dividers/solid-divider/HtmlPreview.html",
      },
      {
        title: "Dashed divider",
        htmlCode: "email-components/dividers/dashed-divider/HtmlCode.html",
        mjmlCode: "email-components/dividers/dashed-divider/MjmlCode.mjml",
        htmlPreview:
          "email-components/dividers/dashed-divider/HtmlPreview.html",
      },
      {
        title: "Dotted divider",
        htmlCode: "email-components/dividers/dotted-divider/HtmlCode.html",
        mjmlCode: "email-components/dividers/dotted-divider/MjmlCode.mjml",
        htmlPreview:
          "email-components/dividers/dotted-divider/HtmlPreview.html",
      },
      {
        title: "Solid text center",
        htmlCode:
          "email-components/dividers/solid-divider-text-center/HtmlCode.html",
        mjmlCode:
          "email-components/dividers/solid-divider-text-center/MjmlCode.mjml",
        htmlPreview:
          "email-components/dividers/solid-divider-text-center/HtmlPreview.html",
      },
    ],
  },
  {
    image: Heroes,
    title: "Banners",
    subtitle: "Lorem ipsum dolor sit amet",
    type: "banners",
    components: [
      {
        title: "Title with button",
        htmlCode: "email-components/banners/title-button-banner/HtmlCode.html",
        mjmlCode: "email-components/banners/title-button-banner/MjmlCode.mjml",
        htmlPreview:
          "email-components/banners/title-button-banner/HtmlPreview.html",
      },
      {
        title: "Title center",
        htmlCode: "email-components/banners/title-banner-center/HtmlCode.html",
        mjmlCode: "email-components/banners/title-banner-center/MjmlCode.mjml",
        htmlPreview:
          "email-components/banners/title-banner-center/HtmlPreview.html",
      },
      {
        title: "Title with button large",
        htmlCode:
          "email-components/banners/title-button-banner-large/HtmlCode.html",
        mjmlCode:
          "email-components/banners/title-button-banner-large/MjmlCode.mjml",
        htmlPreview:
          "email-components/banners/title-button-banner-large/HtmlPreview.html",
      },
      {
        title: "Title bottom large",
        htmlCode:
          "email-components/banners/title-banner-bottom-large/HtmlCode.html",
        mjmlCode:
          "email-components/banners/title-banner-bottom-large/MjmlCode.mjml",
        htmlPreview:
          "email-components/banners/title-banner-bottom-large/HtmlPreview.html",
      },
    ],
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
        preview: "email-templates/espace/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview: "email-templates/espace/booking-confirmation/preview.html",
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
        preview: "email-templates/giola/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview: "email-templates/giola/booking-confirmation/preview.html",
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
        preview: "email-templates/viola/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview: "email-templates/viola/booking-confirmation/preview.html",
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
        preview: "email-templates/finanza/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview: "email-templates/finanza/booking-confirmation/preview.html",
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
        preview: "email-templates/bianco/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview: "email-templates/bianco/booking-confirmation/preview.html",
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
        preview: "email-templates/olivio/reset-password/preview.html",
      },
      {
        title: "Booking confirmation",
        route: "booking-confirmation",
        preview: "email-templates/olivio/booking-confirmation/preview.html",
      },
    ],
  },
];

export const emailCodeTypes = [
  {
    name: "MJML",
    icon: MjmlIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "HTML",
    icon: HtmlIcon,
  },
];
