import { BASE_URL } from "../constants";

type ThemeAPIResponse = {
  theme: string;
};

export async function getTheme(): Promise<ThemeAPIResponse> {
  try {
    const response = fetch(`${BASE_URL}/api/theme`).then((res) => res.json());

    return response;
  } catch (error) {
    throw new Error(`Failed to fetch theme from ${BASE_URL}/api/theme.`);
  }
}
