import Viola from "public/static/images/templates-preview/viola.png";
import Olivio from "public/static/images/templates-preview/olivio.png";
import Giola from "public/static/images/templates-preview/giola.png";
import Finanza from "public/static/images/templates-preview/finanza.png";
import Espace from "public/static/images/templates-preview/espace.png";
import Bianco from "public/static/images/templates-preview/bianco.png";

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
