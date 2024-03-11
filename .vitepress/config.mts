import { defineConfig } from "vitepress";
import { GYMNOTES_APP_URL, GYMNOTES_DOCS_URL } from "../constants.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GymNotes",
  lang: "en-GB",
  description: "An offline-first, free, and easy-to-use fitness tracking app, available right in your browser.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  sitemap: {
    hostname: GYMNOTES_DOCS_URL,
  },
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "horizontal-light-GymNotes-logo.png",
      dark: "horizontal-dark-GymNotes-logo.png",
      alt: "GymNotes logo",
    },

    nav: [
      { text: "Docs", link: "/introduction/what-is-gymnotes" },
      { text: "Go to GymNotes", link: GYMNOTES_APP_URL },
    ],

    sidebar: [
      { text: "Go to GymNotes", link: GYMNOTES_APP_URL },
      {
        text: "Introduction",
        collapsed: false,
        items: [
          { text: "What is GymNotes?", link: "/introduction/what-is-gymnotes" },
          { text: "Getting Started", link: "/introduction/getting-started" },
        ],
      },
      {
        text: "Support",
        collapsed: false,
        items: [{ text: "Migrating from Old Website", link: "/support/migrating-from-old-website" }],
      },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/nathanjms/gymnotes-docs" }],

    editLink: {
      pattern: "https://github.com/nathanjms/gymnotes-docs/edit/main/:path",
    },
  },
});
