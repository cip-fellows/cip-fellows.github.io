// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-program-overview",
    title: "Program Overview",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "Team",
          description: "About the CIP Fellows Team, including PIs and Co-PIs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-cip-fellows",
          title: "CIP Fellows",
          description: "About the current CIP Fellows and alumni, along with links to their individual pages",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cip-fellows/";
          },
        },{id: "nav-project-outcomes",
          title: "Project Outcomes",
          description: "About the CIP Fellows Program",
          section: "Navigation",
          handler: () => {
            window.location.href = "/project-outcomes/";
          },
        },{id: "nav-community-engagement",
          title: "Community Engagement",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/community-engagement/index.html";
          },
        },{id: "post-placeholder-post",
      
        title: "PLACEHOLDER POST",
      
      description: "CyberTraining: Implementation: Small: Developing a Best Practices Training Program in Cyberinfrastructure-Enabled Machine Learning Research",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/NSF-Awards-the-CIML-Project/";
        
      },
    },{id: "projects-anjali-shinde",
          title: 'Anjali Shinde',
          description: "2025, SDSU | Velit excepteur ullamco ut eiusmod lorem voluptate sint fugiat dolore enim nisi. Ullamco excepteur ut velit eiusmod voluptate lorem sint nisi. Dolor aliquip sit cupidatat cillum proident sed velit ad lorem. Nisi lorem dolore dolor ut ullamco ad sit quis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/anjali-shinde/";
            },},{id: "projects-aram-valafar",
          title: 'Aram Valafar',
          description: "2025, SDSU",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aram-valafar/";
            },},{id: "projects-brendan-dennis",
          title: 'Brendan Dennis',
          description: "2025, UCSD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brendan-dennis/";
            },},{id: "projects-choonhan-yoon",
          title: 'Choonhan Yoon',
          description: "2025, UCSD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/choonhan-yoon/";
            },},{id: "projects-christopher-hill",
          title: 'Christopher Hill',
          description: "2025, CSUSB",
          section: "Projects",handler: () => {
              window.location.href = "/projects/christopher-hill/";
            },},{id: "projects-dung-vu",
          title: 'Dung Vu',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dung-vu/";
            },},{id: "projects-eric-leslie",
          title: 'Eric Leslie',
          description: "2025, UCSD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eric-leslie/";
            },},{id: "projects-fernando-garzon",
          title: 'Fernando Garzon',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fernando-garzon/";
            },},{id: "projects-henri-li",
          title: 'Henri Li',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/henri-li/";
            },},{id: "projects-hovakin-grabski",
          title: 'Hovakin Grabski',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hovakin-grabski/";
            },},{id: "projects-kyle-krick",
          title: 'Kyle Krick',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kyle-krick/";
            },},{id: "projects-matthew-mccoy",
          title: 'Matthew McCoy',
          description: "2025, UCSD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/matthew-mccoy/";
            },},{id: "projects-nabeel-alzahrani",
          title: 'Nabeel Alzahrani',
          description: "Adjunct Professor in the Computer Science and Engineering Department &amp; Security Consultant in the Identity, Security, and Enterprise Technology Department",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nabeel-alzahrani/";
            },},{id: "projects-paul-hoover",
          title: 'Paul Hoover',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paul-hoover/";
            },},{id: "projects-victoria-nguyen",
          title: 'Victoria Nguyen',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/victoria-nguyen/";
            },},{id: "projects-vikrant-tripathy",
          title: 'Vikrant Tripathy',
          description: "2025, UCSD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vikrant-tripathy/";
            },},{id: "projects-youngsu-kim",
          title: 'Youngsu Kim',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/youngsu-kim/";
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
