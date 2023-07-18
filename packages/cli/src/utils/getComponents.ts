import { BASE_URL } from "../constants";
import { Component } from "../types";

type ComponentsAPIResponse = {
  components: Record<string, Component>;
};

export async function getAvailableComponents(): Promise<ComponentsAPIResponse> {
  try {
    const response = fetch(`${BASE_URL}/api/components`).then((res) =>
      res.json()
    );

    return response;
  } catch (error) {
    throw new Error(
      `Failed to fetch components from ${BASE_URL}/api/components.`
    );
  }
}
