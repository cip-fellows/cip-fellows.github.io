// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-program",
          title: "Program",
          description: "About the CIP Fellows Program",
          section: "Navigation",
          handler: () => {
            window.location.href = "/program/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "About the CIP Fellows Team, including PIs and Co-PIs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-fellows",
          title: "Fellows",
          description: "About the current CIP Fellows and alumni, along with links to their individual pages",
          section: "Navigation",
          handler: () => {
            window.location.href = "/fellows/";
          },
        },{id: "nav-news-amp-events",
          title: "News &amp; Events",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news-events/index.html";
          },
        },{id: "news-this-is-a-test-announcement",
          title: 'This is a test announcement.',
          description: "",
          section: "News",},{id: "news-this-is-a-test-announcement",
          title: 'This is a test announcement.',
          description: "",
          section: "News",},{id: "projects-alumni-1",
          title: 'Alumni 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/alumni1/";
            },},{id: "projects-fellow-1",
          title: 'Fellow 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fellow1/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
