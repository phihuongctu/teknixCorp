import { defineConfig, defineSchema } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const schema = defineSchema({
  collections: [
    {
      label: "Section_1",
      name: "page",
      path: "content/page",
      format: "md",
      fields: [
        // {
        //   type: "string",
        //   label: "Title",
        //   name: "title",
        // },
        {
          name: "Title_1",
          label: "Title 1",
          type: "rich-text",
          isBody: true,
          ui: {
            component: "textarea",
          },
        },
        // {
        //   name: "Title_2",
        //   label: "Title 2",
        //   type: "string",
        //   // isBody: true,
        //   ui: {
        //     component: "textarea",
        //   },
        // },
      ],
      ui: {
        router: ({ document }) => {
          if (document._sys.filename === "/") {
            return `/`;
          }
          return undefined;
        },
      },
    },
    {
      label: "Blog Posts",
      name: "post",
      path: "content/post",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea",
          },
        },
      ],
      ui: {
        router: ({ document }) => {
          return `/posts/${document._sys.filename}`;
        },
      },
    },
  ],
});

export default defineConfig({
  branch,
  clientId: "cae0fddf-0c98-4fb1-918a-50d38dba557e", // Get this from tina.io
  token: "0c36ae860ad05f987d54b339facb54f881717095", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema
});
