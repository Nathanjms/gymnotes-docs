import { defineConfig } from "vitepress";
import { GYMNOTES_APP_URL, GYMNOTES_DOCS_URL } from "../constants.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GymNotes",
  titleTemplate: "GymNotes - Free Fitness Tracking Tool",
  lang: "en-GB",
  description: "An offline-first, free, and easy-to-use fitness tracking app, available right in your browser.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {
        async: "",
        src: "https://static.cloudflareinsights.com/beacon.min.js",
        "data-cf-beacon": '{"token": "613a115732c44d259ff4a2cfb7dab43c"}',
      },
    ],
  ],
  sitemap: {
    hostname: GYMNOTES_DOCS_URL,
  },
  lastUpdated: true,

  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/horizontal-light-GymNotes-logo.png",
      dark: "/horizontal-dark-GymNotes-logo.png",
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
      { text: "Your Year of GymNotes", link: "year-of-gymnotes" },

      {
        text: "Sections",
        collapsed: false,
        items: [
          { text: "Dashboard", link: "/pages/dashboard" },
          { text: "Workout History", link: "/pages/workout-history" },
          { text: "User Profile", link: "/pages/user-profile" },
          { text: "Add Exercise To Workout", link: "/pages/add-to-workout" },
          {
            text: "Exercises",
            collapsed: false,
            items: [
              { text: "Add/Edit an Exercise", link: "/pages/exercises/create-or-edit" },
              { text: "Manage Muscle Groups", link: "/pages/exercises/manage-muscle-groups" },
            ],
          },
          {
            text: "Stats",
            collapsed: false,
            items: [
              { text: "Stats Dashboard", link: "/pages/stats/index" },
              { text: "Stats Details", link: "/pages/stats/details" },
            ],
          },
        ],
      },
      {
        text: "Support",
        collapsed: false,
        items: [{ text: "Migrating from Old Website", link: "/support/migrating-from-old-website" }],
      },
      {
        text: "Privacy Policy & Terms of Service",
        collapsed: false,
        items: [
          { text: "Privacy Policy", link: "/privacy-policy" },
          { text: "Terms of Service", link: "/terms-of-service" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/nathanjms/gymnotes-docs" }],

    editLink: {
      pattern: "https://github.com/nathanjms/gymnotes-docs/edit/main/:path",
    },

    footer: {
      message:
        '<a href="/privacy-policy" class="underline">Privacy Policy</a> | <a href="/terms-of-service" class="underline">Terms of Service</a>',
    },
  },
});
