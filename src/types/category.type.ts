

// CreateCategory type
export type CreateCategory = {
  name: string;
  image?: string;
  description?: string;
  
};

export  interface Category  {
  createdAt:string;
  description?:string | null;
  id:string;
  image?: string | null;
  isActive:boolean;
  orderCount:number;
  slug:string;
  name:string;
  updatedAt:string
}

// createdAt
// : 
// "2026-02-06T01:05:50.524Z"
// description
// : 
// null
// id
// : 
// "7ed2370d-298d-43a3-a1ee-aa359a47079c"
// image
// : 
// null
// isActive
// : 
// true
// name
// : 
// "vegetable"
// orderCount
// : 
// 0
// slug
// : 
// "vegetable"
// updatedAt
// : 
// "2026-02-06T01:05:50.524Z"