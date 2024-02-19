import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s | React GIS-OL",
    };
  },
  logo: <span>React GIS-OL</span>,
  project: {
    link: "https://github.com/ZippyIO/react-gis-ol",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "React GIS-OL Documentation",
  },
};

export default config;
