import fs from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  const index = fs.readFileSync("./src/mailingui/themes/index.ts", "utf8");
  const theme = fs.readFileSync("./src/mailingui/themes/theme.ts", "utf8");
  const types = fs.readFileSync("./src/mailingui/themes/types.ts", "utf8");
  return NextResponse.json({ index, theme, types });
}
