import { StaticImageData } from "next/image";

import ImageOnlyHeroMjml from "../email-components/heroes/ImageOnly.mjml";
import HeroWithHeading from "../email-components/heroes/WithHeading.mjml";
import HeroWithCenteredHeading from "../email-components/heroes/WithCenteredHeading.mjml";
import HeroWithOverlaidCenteredHeading from "../email-components/heroes/WithOverlaidCenteredHeading.mjml";
import HeroWithPaddedOverlaidCenteredHeading from "../email-components/heroes/WithPaddedOverlaidCenteredHeading.mjml";
import HeroWithPaddedOverlaidHeading from "../email-components/heroes/WithPaddedOverlaidHeading.mjml";

import PrimaryButtonsMjml from "../email-components/buttons/PrimaryButtons.mjml";
import SecondaryButtonsMjml from "../email-components/buttons/SecondaryButtons.mjml";
import TertiaryButtonsMjml from "../email-components/buttons/TertiaryButtons.mjml";
import PrimaryRoundButtonsMjml from "../email-components/buttons/PrimaryRoundButtons.mjml";
import SecondaryRoundButtonsMjml from "../email-components/buttons/SecondaryRoundButtons.mjml";
import TertiaryRoundButtonsMjml from "../email-components/buttons/TertiaryRoundButtons.mjml";

import SmallBadgesMjml from "../email-components/badges/SmallBadges.mjml";
import MediumBadgesMjml from "../email-components/badges/MediumBadges.mjml";
import SmallRoundBadgesMjml from "../email-components/badges/SmallRoundBadges.mjml";
import MediumRoundBadgesMjml from "../email-components/badges/MediumRoundBadges.mjml";

import VerticalLeftListMjml from "../email-components/lists/VerticalLeftList.mjml";
import VerticalCenterListMjml from "../email-components/lists/VerticalCenterList.mjml";
import HorizontalLeftListMjml from "../email-components/lists/HorizontalLeftList.mjml";
import HorizontalCenterListMjml from "../email-components/lists/HorizontalCenterList.mjml";
import BulletListMjml from "../email-components/lists/BulletList.mjml";
import NumberedListMjml from "../email-components/lists/NumberedList.mjml";

import BasicSocialIcons from "../email-components/icons/Basic.mjml";

import BasicEmojisMjml from "../email-components/emojis/BasicEmojis.mjml";
import EmojisWithBackgroundMjml from "../email-components/emojis/WithBackground.mjml";

import BasicParagraphsMjml from "../email-components/paragraphs/Basic.mjml";
import CenteredParagraphsMjml from "../email-components/paragraphs/Centered.mjml";

import SolidDividersMjml from "../email-components/dividers/Solid.mjml";
import DashedDividersMjml from "../email-components/dividers/Dashed.mjml";
import DottedDividersMjml from "../email-components/dividers/Dotted.mjml";

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

interface EmailComponentExample {
  title: string;
  mjml: string;
}

interface EmailComponent {
  image: StaticImageData;
  title: string;
  subtitle: string;
  type: string;
  examples: EmailComponentExample[];
}

export const emailComponents: EmailComponent[] = [
  {
    type: "heroes",
    title: "Hero section",
    subtitle: "Beautiful headers to showcase your message",
    image: Heroes,
    examples: [
      { title: "Image only", mjml: ImageOnlyHeroMjml },
      { title: "With heading", mjml: HeroWithHeading },
      { title: "With centered heading", mjml: HeroWithCenteredHeading },
      {
        title: "With padded overlaid heading",
        mjml: HeroWithPaddedOverlaidHeading,
      },
      {
        title: "With padded overlaid centered heading",
        mjml: HeroWithPaddedOverlaidCenteredHeading,
      },
      {
        title: "With overlaid centered heading",
        mjml: HeroWithOverlaidCenteredHeading,
      },
    ],
  },
  {
    type: "lists",
    title: "Lists",
    subtitle: "Organize information with simple lists",
    image: Lists,
    examples: [
      {
        title: "Vertical left-aligned list",
        mjml: VerticalLeftListMjml,
      },
      {
        title: "Vertical centered list",
        mjml: VerticalCenterListMjml,
      },
      {
        title: "Horizontal left-aligned list",
        mjml: HorizontalLeftListMjml,
      },
      {
        title: "Horizontal centered list",
        mjml: HorizontalCenterListMjml,
      },
      /**
       * TODO: Think about using `<ul>` and `<li>` elements. Keep in mind that they're styled differently in each client.
       * Premail's custom mjml component https://premail.dev/docs/components/mjml-bullet-list/ might be a good solution.
       */
      {
        title: "Bullet list",
        mjml: BulletListMjml,
      },
      /** TODO: Think about using `<ol>` and `<li>` elements. Keep in mind that they're styled differently in each client. */
      {
        title: "Numbered list",
        mjml: NumberedListMjml,
      },
    ],
  },
  {
    type: "badges",
    title: "Badges",
    subtitle: "Highlight key information with attention-grabbing badges",
    image: Badges,
    examples: [
      {
        title: "Small badges",
        mjml: SmallBadgesMjml,
      },
      {
        title: "Medium badges",
        mjml: MediumBadgesMjml,
      },
      {
        title: "Small round badges",
        mjml: SmallRoundBadgesMjml,
      },
      {
        title: "Medium round badges",
        mjml: MediumRoundBadgesMjml,
      },
    ],
  },
  {
    type: "buttons",
    title: "Buttons",
    subtitle: "Drive user action with clickable buttons",
    image: Buttons,
    examples: [
      {
        title: "Primary buttons",
        mjml: PrimaryButtonsMjml,
      },
      {
        title: "Secondary buttons",
        mjml: SecondaryButtonsMjml,
      },
      {
        title: "Tertiary buttons",
        mjml: TertiaryButtonsMjml,
      },
      {
        title: "Primary round buttons",
        mjml: PrimaryRoundButtonsMjml,
      },
      {
        title: "Secondary round buttons",
        mjml: SecondaryRoundButtonsMjml,
      },
      {
        title: "Tertiary round buttons",
        mjml: TertiaryRoundButtonsMjml,
      },
    ],
  },
  {
    type: "emojis",
    title: "Emojis",
    subtitle: "Add personality and emotion to your messages",
    image: Emojis,
    examples: [
      {
        title: "Basic emojis",
        mjml: BasicEmojisMjml,
      },
      {
        title: "With background",
        mjml: EmojisWithBackgroundMjml,
      },
    ],
  },
  {
    type: "social-icons",
    title: "Social icons",
    subtitle: "Increase engagement with clickable social icons",
    image: SocialIcons,
    examples: [
      {
        title: "Basic",
        mjml: BasicSocialIcons,
      },
    ],
  },
  {
    type: "paragraphs",
    title: "Paragraphs",
    subtitle: "Craft compelling content with easy-to-read paragraphs",
    image: Paragraphs,
    examples: [
      {
        title: "Basic paragraphs",
        mjml: BasicParagraphsMjml,
      },
      {
        title: "Centered paragraphs",
        mjml: CenteredParagraphsMjml,
      },
    ],
  },
  {
    type: "dividers",
    title: "Dividers",
    subtitle: "Create visual separation for a clean, professional look",
    image: Dividers,
    examples: [
      {
        title: "Solid",
        mjml: SolidDividersMjml,
      },
      {
        title: "Dashed",
        mjml: DashedDividersMjml,
      },
      {
        title: "Dotted",
        mjml: DottedDividersMjml,
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
