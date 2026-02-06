"use server";

import { categoryService } from "@/service/category.service";
import { CreateCategory } from "@/types/category.type";
import { revalidatePath } from "next/cache";

export const createCategory = async (data: CreateCategory) => {
  const res = await categoryService.createCategory(data);

  if (!res.error) {
    // ✅ এখানে যেই path এ fresh data দেখাতে চাও তা revalidate করো
    revalidatePath("/provider-dashboard/categories");
  }

  return res;
};
