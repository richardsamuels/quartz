import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Richard Samuels",
    pageTitleSuffix: "Enginerd",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "samuels.xyz",
    ignorePatterns: [
      "private",
      "scripts",
      "Templates",
      ".obsidian",
      "Excalidraw/*.excalidraw.md",
      "Slip Box",
      "Fleeting Notes",
      "Projects - */**",
      "Highdeas",
      "Journal",
    ],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fira Sans",
        body: "Fira Sans",
        code: "Fira Mono",
      },
      colors: {
        lightMode: {
          light: "#220a27",
          lightgray: "#06647a",
          gray: "#2a0c31",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          //secondary: "#7b97aa",
          secondary: "#2375b3",
          //tertiary: "#06647a",
          tertiary: "#089bc2",
          //highlight: "rgba(143, 159, 169, 0.15)",
          highlight: "rgba(0, 232, 247, 0.15)",
          textHighlight: "#0bbee8",
        },
        darkMode: {
          light: "#220a27",
          //lightgray: "#393639",
          lightgray: "#06647a",
          gray: "#2a0c31",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          //secondary: "#7b97aa",
          secondary: "#2bb9d6",
          //tertiary: "#84a59d",
          tertiary: "#33ddff",
          //highlight: "rgba(143, 159, 169, 0.15)",
          highlight: "rgba(0, 232, 247, 0.15)",
          textHighlight: "#0bbee8",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      //Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.ElideTags(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
