import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  index: string;
  theme: string;
  types: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const index = fs.readFileSync("./src/mailingui/themes/index.ts", "utf8");
  const theme = fs.readFileSync("./src/mailingui/themes/theme.ts", "utf8");
  const types = fs.readFileSync("./src/mailingui/themes/types.ts", "utf8");
  res.status(200).json({ index, theme, types });
}
