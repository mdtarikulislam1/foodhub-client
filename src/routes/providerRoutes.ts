export const providerRoutes = [
  {
    title: "Provider Analytics",
    items: [
      {
        title: "Dashboard",
        url: "/provider-dashboard/dashboard",
      },
      // orders
      {
        title: "Orders",
        items: [
          {
            title: "All Orders",
            url: "/provider-dashboard/orders",
          },
          {
            title: "Pending Orders",
            url: "/provider-dashboard/orders/pending",
          },
          {
            title: "Completed Orders",
            url: "/provider-dashboard/orders/completed",
          },
        ],
      },

      {
        title: "Categories",
        url: "/provider-dashboard/categories",
      },

      {
        title: "Dietary Preferences",
        url: "/provider-dashboard/dietary-preferences",
      },
      {
        title: "Products",
        items: [
          {
            title: "All Products",
            url: "/provider-dashboard/products",
          },
          {
            title: "Add Product",
            url: "/provider-dashboard/products/add",
          },
        ],
      },
      {
        title: "Profile",
        url: "/provider-dashboard/profile",
      },
    ],
  },
];
