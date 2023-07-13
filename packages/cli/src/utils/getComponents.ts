import { Component } from "../types";

const baseUrl = process.env.COMPONENTS_BASE_URL ?? "http://localhost:3000";

type ComponentsAPIResponse = {
  components: Record<string, Component>;
};

export async function getAvailableComponents(): Promise<ComponentsAPIResponse> {
  try {
    const response = fetch(`${baseUrl}/api/components`).then((res) =>
      res.json()
    );

    return response;
  } catch (error) {
    throw new Error(
      `Failed to fetch components from ${baseUrl}/api/components.`
    );
  }
}
