import { Base_URL } from "@/helper/baseUrl";
import { CreateCategory } from "@/types/category.type";
import { cookies } from "next/headers";

export const categoryService = {
  createCategory: async (categoryData: CreateCategory) => {
    try {
      const cookieStore = await cookies();
      const response = await fetch(`${Base_URL}/categories`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(categoryData),
      });
      const data = await response.json();

      if (data.error) {
        return {
          data: null,
          error: { message: data.error || "Post created faild" },
        };
      }
      return { data: data, error: null };
    } catch (err) {
      return {
        data: null,
        error: { message: "Something went wrong", details: err },
      };
    }
  },
};
