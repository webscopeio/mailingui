import { templates } from "@/utils/constants";
import Link from "next/link";

export default function Templates() {
  return (
    <div className="flex flex-col items-center m-5">
      <div className="self-start">
        <h2 className="text-xl font-bold mb-2">Template List:</h2>
        <ul>
          {Object.keys(templates).map((key: any) => (
            <li
              key={key}
              className="capitalize underline hover:text-violet-300"
            >
              <Link href={`/templates/${key}`}>{key}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
