import fs from "fs";
import path from "path";
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
  const index = fs.readFileSync(
    path.resolve("./src/mailingui/themes/index.ts"),
    "utf8"
  );
  const theme = fs.readFileSync(
    path.resolve("./src/mailingui/themes/theme.ts"),
    "utf8"
  );
  const types = fs.readFileSync(
    path.resolve("./src/mailingui/themes/types.ts"),
    "utf8"
  );
  res.status(200).json({ index, theme, types });
}
