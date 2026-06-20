import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

export default defineConfig(
    withSidebar(
        {
            title: "Skylite",
            description: "Documentation for the Skylite Minecraft server and its libraries.",
            cleanUrls: true,

            head: [
                ["link", { rel: "icon", href: "/favicon.ico" }]
            ],

            themeConfig: {
                lang: "en",
                logo: "/logo.png",
                docFooter: {
                    prev: false,
                    next: false,
                },
                socialLinks: [
                    {
                        icon: "discord",
                        link: "https://",
                    }
                ]
            }
        },

        {
            documentRootPath: "/",
            useTitleFromFileHeading: true,
            useFolderTitleFromIndexFile: true,
            useTitleFromFrontmatter: true,
            sortMenusByFrontmatterOrder: true,
            useFolderLinkFromIndexFile: false,
            capitalizeFirst: true,
        },
    ),
);
