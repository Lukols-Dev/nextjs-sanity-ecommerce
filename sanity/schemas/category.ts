export default {
  name: "category",
  type: "document",
  title: "Categories",
  fields: [
    {
      name: "name",
      title: "Name of Category",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      title: "Category Image",
    },
    {
      name: "slug",
      type: "slug",
      title: "Category Slug",
      options: {
        source: "name",
      },
    },
  ],
};
