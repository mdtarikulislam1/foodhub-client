"use server";

import { categoryService } from "@/service/category.service";
import { CreateCategory } from "@/types/product.type";
import { revalidatePath } from "next/cache";

export const createCategory = async (data: CreateCategory) => {
  const res = await categoryService.createCategory(data);

  if (!res.error) {

    revalidatePath("/provider-dashboard/categories");
  }

  return res;
};
