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
        },{id: "nav-core-competencies",
          title: "Core Competencies",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/core-competencies/";
          },
        },{id: "post-in-the-news-three-california-universities-commit-to-growing-a-community-of-cyberinfrastructure-professionals",
      
        title: "In The News! Three California Universities Commit To Growing A Community Of Cyberinfrastructure...",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/In-the-News!-Three-California-Universities-Commit-to-Growing-a-Community-of-Cyberinfrastructure-Professionals/";
        
      },
    },{id: "post-three-california-universities-commit-to-growing-a-community-of-cyberinfrastructure-professionals",
      
        title: "“Three California Universities Commit to Growing a Community of Cyberinfrastructure Professionals”",
      
      description: "See related article: https://www.sdsc.edu/news/2022/PR20221020_cyberinfrastructure.html",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/In-the-News!-Three-California-Universities-Commit-to-Growing-a-Community-of-Cyberinfrastructure-Professionals/";
        
      },
    },{id: "post-nsf-award-announced-for-the-cip-fellows-project",
      
        title: "NSF Award Announced for the CIP-Fellows Project",
      
      description: "NSF Awards CyberTraining: CIP: Training and Developing a Research Computing and Data CI Professionals (RCD-CIP) Community to SDSC and collaborators",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/NSF-Award-Announced/";
        
      },
    },{id: "outcomes-instructional-cluster-intro",
          title: 'Instructional Cluster Intro',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/instructional-cluster-intro/";
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
            },},{id: "outcomes-software-container-for-fourcastnet",
          title: 'Software Container for FourCastNet',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/software-container/";
            },},{id: "outcomes-nextflow-core-quickflow",
          title: 'Nextflow Core Quickflow',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/nf-core-quickflow/";
            },},{id: "outcomes-singularity-conversion-of-nvidia-containers-for-expanse-nairr-expansion",
          title: 'Singularity Conversion of NVIDIA Containers for Expanse NAIRR Expansion',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/singularity-conversion-of-nvidia-containers-for-expanse-nairr-expansion/";
            },},{id: "outcomes-rag-for-nairr-resources-project",
          title: 'RAG For NAIRR Resources Project',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/rag-for-nairr-resources/";
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
            },},{id: "outcomes-about-an-ai-assisted-mobile-solution-to-reliably-diagnose-obstructive-sleep-apnea-osa",
          title: 'About an AI-assisted mobile solution to reliably diagnose Obstructive Sleep Apnea (OSA)',
          description: "",
          section: "Outcomes",handler: () => {
              window.location.href = "/outcomes/obstructive-sleep-apnea/";
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
