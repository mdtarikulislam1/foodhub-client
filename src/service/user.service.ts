import { Base_URL } from "@/helper/baseUrl";
import { cookies } from "next/headers";

export const userService = {
  getSession: async () => {
    try {
      const cookieStore = await cookies();
      const response = await fetch(`${Base_URL}/auth/session`, {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch session");
      }
      const data = await response.json();
      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  },
};
