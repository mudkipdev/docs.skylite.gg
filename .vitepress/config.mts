import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const config = withSidebar(
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
                    link: "https://discord.gg/skylite",
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
);

config.themeConfig.sidebar = [
    {
        text: "Libraries",
        items: [
            {
                text: "Thunder",
                link: "/libraries/thunder",
            },
            {
                text: "Vibenilla",
                link: "/libraries/vibenilla",
                items: [
                    {
                        text: "PvP",
                        link: "/libraries/vibenilla/pvp",
                    },
                    {
                        text: "Placement",
                        link: "/libraries/vibenilla/placement",
                    },
                    {
                        text: "Worldgen",
                        link: "/libraries/vibenilla/worldgen",
                    },
                    {
                        text: "Crafting",
                        link: "/libraries/vibenilla/crafting",
                    },
                    {
                        text: "Fluids",
                        link: "/libraries/vibenilla/fluids",
                    },
                ],
            },
        ],
    },
];

export default defineConfig(config);
