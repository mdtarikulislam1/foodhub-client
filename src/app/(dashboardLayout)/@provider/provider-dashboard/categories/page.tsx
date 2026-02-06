import AllCagegory from "@/components/modules/category/allCagegory";
import { CreateCategory } from "@/components/modules/category/createCategory";
import { categoryService } from "@/service/category.service";

import React from "react";

export default async function Categories() {
  const {data} = await categoryService.getAllCategory();

  console.log(data);
  return (
    <div>
      <CreateCategory></CreateCategory>
      <AllCagegory data={data.data}></AllCagegory>
    </div>
  );
}
