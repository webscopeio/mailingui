import fs from "fs";
import { NextResponse } from "next/server";

export async function GET(
) {
  const index = fs.readFileSync("./src/mailingui/utils/index.ts", "utf8");
  const utils = fs.readFileSync("./src/mailingui/utils/utils.ts", "utf8");
  return NextResponse.json({ index, utils})
}
