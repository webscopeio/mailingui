import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  utils: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const utils = fs.readFileSync("./src/mailingui/utils/utils.ts", "utf8");
  res.status(200).json({ utils });
}
