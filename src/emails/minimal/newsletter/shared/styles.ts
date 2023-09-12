import * as React from "react";

export const body: React.CSSProperties = {
  backgroundColor: "#fafafa", // Background color outside container
  margin: 0, // Margin reset
};

export const container: React.CSSProperties = {
  backgroundColor: "#fff", // Email background color
  padding: "60px 0", // We remove inline padding to enable full-width banners
  maxWidth: "580px", // Estalbish the maximum size of the email
};

export const row: React.CSSProperties = {
  padding: "0 30px", // Here we can enable the default padding for each table AKA rows
};
