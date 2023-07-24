import fs from "fs";

export const GET = async () => {
  try {
    const theme = fs.readFileSync("./src/mailingui/themes/index.ts", "utf8");
    return NextResponse.json({ theme });
  } catch (error) {
    return NextResponse.error();
  }
};

import { NextResponse } from "next/server";
