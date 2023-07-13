const baseUrl = process.env.COMPONENTS_BASE_URL ?? "http://localhost:3000";

type ThemeAPIResponse = {
  theme: string;
};

export async function getTheme(): Promise<ThemeAPIResponse> {
  try {
    const response = fetch(`${baseUrl}/api/theme`).then((res) => res.json());

    return response;
  } catch (error) {
    throw new Error(`Failed to fetch theme from ${baseUrl}/api/theme.`);
  }
}
