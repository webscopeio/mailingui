import { BASE_URL } from "../constants";

type UtilAPIResponse = {
  index: string;
  utils: string;
};

export async function getUtils(): Promise<UtilAPIResponse> {
  try {
    const response = fetch(`${BASE_URL}/api/utils`).then((res) => res.json());

    return response;
  } catch (error) {
    throw new Error(`Failed to fetch theme from ${BASE_URL}/api/theme.`);
  }
}
