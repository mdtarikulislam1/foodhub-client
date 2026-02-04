"use server";

import { categoryService } from "@/service/category.service";
import { CreateCategory } from "@/types/category.type";

export const createCategory = async (data: CreateCategory) => {
  const res = await categoryService.createCategory(data);

  return res;
};
