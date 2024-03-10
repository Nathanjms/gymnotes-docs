import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GymNotes",
  description: "An offline-first, free, and easy-to-use fitness tracking app, available right in your browser.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "horizontal-light-GymNotes-logo.png",
      dark: "horizontal-dark-GymNotes-logo.png",
      alt: "GymNotes logo",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],

    editLink: {
      pattern: "https://github.com/nathanjms/gymnotes-docs/edit/main/:path",
    },
  },
});
