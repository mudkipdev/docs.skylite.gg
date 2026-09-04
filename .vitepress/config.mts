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
        useFolderLinkFromIndexFile: false
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
                        text: "pvp",
                        link: "/libraries/vibenilla/pvp",
                    },
                    {
                        text: "placement",
                        link: "/libraries/vibenilla/placement",
                    },
                    {
                        text: "worldgen",
                        link: "/libraries/vibenilla/worldgen",
                    },
                    {
                        text: "crafting",
                        link: "/libraries/vibenilla/crafting",
                    },
                    {
                        text: "fluids",
                        link: "/libraries/vibenilla/fluids",
                    },
                    {
                        text: "loot",
                        link: "/libraries/vibenilla/loot"
                    }
                ],
            },
        ],
    },
];

export default defineConfig(config);
