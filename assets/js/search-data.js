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
        },{id: "nav-products",
          title: "Products",
          description: "About the CIP Fellows Program",
          section: "Navigation",
          handler: () => {
            window.location.href = "/products/";
          },
        },{id: "nav-news-amp-events",
          title: "News &amp; Events",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news-events/index.html";
          },
        },{id: "post-placeholder-post",
      
        title: "PLACEHOLDER POST",
      
      description: "CyberTraining: Implementation: Small: Developing a Best Practices Training Program in Cyberinfrastructure-Enabled Machine Learning Research",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/NSF-Awards-the-CIML-Project/";
        
      },
    },{id: "outcomes-instructional-cluster-intro",
          title: 'Instructional Cluster Intro',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/instructional-cluster-intro/";
            },},{id: "outcomes-kyle-39-s-final-report",
          title: 'Kyle&amp;#39;s Final Report',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/kyles-final-report/";
            },},{id: "outcomes-containerization-of-quick",
          title: 'Containerization of QUICK',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/containerization-of-quick/";
            },},{id: "outcomes-documentation-of-benchmarking-of-containerized-quick",
          title: 'Documentation of Benchmarking of Containerized QUICK',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/documentation-of-containerized-quick/";
            },},{id: "outcomes-benchmarking-of-containerized-quick",
          title: 'Benchmarking of Containerized QUICK',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/benchmarking-of-containerized-quick/";
            },},{id: "outcomes-csusb-summer-research-program-in-ai-ml",
          title: 'CSUSB Summer Research Program in AI/ML',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/summer-research-program/";
            },},{id: "outcomes-educational-aids-or-curricula",
          title: 'Educational aids or Curricula',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/educational-aids/";
            },},{id: "outcomes-instructional-intro-to-nextflow-on-hpc",
          title: 'Instructional Intro to NextFlow on HPC',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/instructional-intro-to-nextflow-on-hpc/";
            },},{id: "outcomes-containerizing-fourcastnet-for-kubernetes-cluster",
          title: 'Containerizing FourCastNet for Kubernetes Cluster',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/software-container/";
            },},{id: "outcomes-nabeel-39-s-final-report",
          title: 'Nabeel&amp;#39;s Final Report',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/nabeels-project/";
            },},{id: "outcomes-singularity-conversion-of-nvidia-containers-for-expanse-nairr-expansion",
          title: 'Singularity Conversion of NVIDIA Containers for Expanse NAIRR Expansion',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/singularity-conversion-of-nvidia-containers-for-expanse-nairr-expansion/";
            },},{id: "outcomes-containerizing-fourcastnet-for-kubernetes-cluster",
          title: 'Containerizing FourCastNet for Kubernetes Cluster',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/containerizing-fourcastnet-for-kubernetes-cluster/";
            },},{id: "outcomes-accessible-ai-and-hpc-education-for-all",
          title: 'Accessible AI and HPC Education for All',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/accessible-ai-and-hpc-education-for-all/";
            },},{id: "projects-anjali-shinde",
          title: 'Anjali Shinde',
          description: "2025, SDSU",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AnjaliShinde/";
            },},{id: "projects-aram-valifar",
          title: 'Aram Valifar',
          description: "2025, SDSU",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AramValifar/";
            },},{id: "projects-brendan-dennis",
          title: 'Brendan Dennis',
          description: "2025, UCSD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/BrendanDennis/";
            },},{id: "projects-choonhan-yoon",
          title: 'Choonhan Yoon',
          description: "2025, UCSD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ChoonhanYoon/";
            },},{id: "projects-christopher-hill",
          title: 'Christopher Hill',
          description: "2025, CSUSB",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ChristopherHill/";
            },},{id: "projects-dung-vu",
          title: 'Dung Vu',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DungVu/";
            },},{id: "projects-eric-leslie",
          title: 'Eric Leslie',
          description: "2025, UCSD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/EricLeslie/";
            },},{id: "projects-fernando-garzon",
          title: 'Fernando Garzon',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FernandoGarzon/";
            },},{id: "projects-henry-li",
          title: 'Henry Li',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HenryLi/";
            },},{id: "projects-hovakim-grabski",
          title: 'Hovakim Grabski',
          description: "Hovakim Grabski is a visiting scholar from Armenia and Researcher/SysAdmin at Abagyan Lab, UC San Diego and SDSC, with experience in Python programming, ICM programming language for molecular modeling, docking, screening, and infrastructure automation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HovakimGrabski/";
            },},{id: "projects-kyle-krick",
          title: 'Kyle Krick',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/KyleKrick/";
            },},{id: "projects-matthew-mccoy",
          title: 'Matthew McCoy',
          description: "2025, UCSD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MatthewMcCoy/";
            },},{id: "projects-nabeel-alzahrani",
          title: 'Nabeel Alzahrani',
          description: "Adjunct Professor in the Computer Science and Engineering Department &amp; Security Consultant in the Identity, Security, and Enterprise Technology Department",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NabeelAlzahrani/";
            },},{id: "projects-paul-hoover",
          title: 'Paul Hoover',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PaulHoover/";
            },},{id: "projects-victoria-nguyen",
          title: 'Victoria Nguyen',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/VictoriaNguyen/";
            },},{id: "projects-vikrant-tripathy",
          title: 'Vikrant Tripathy',
          description: "2025, UC San Diego",
          section: "Projects",handler: () => {
              window.location.href = "/projects/VikrantTripathy/";
            },},{id: "projects-youngsu-kim",
          title: 'Youngsu Kim',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/YoungsuKim/";
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
