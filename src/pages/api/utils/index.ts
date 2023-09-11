import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  index: string;
  utils: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const index = fs.readFileSync(
    path.join(process.cwd(), "./src/mailingui/utils/index.ts"),
    "utf8"
  );
  const utils = fs.readFileSync(
    path.join(process.cwd(), "./src/mailingui/utils/utils.ts"),
    "utf8"
  );
  res.status(200).json({ index, utils });
}
