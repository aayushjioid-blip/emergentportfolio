// Real data from Aayush Rajput's resume and certifications

export const portfolioData = {
  personal: {
    name: "Aayush Rajput",
    role: "Product Manager & Product Owner",
    designation: "Senior Consultant",
    tagline: "Building products at the intersection of fintech, enterprise & agile delivery",
    location: "Pune, India",
    openTo: "Senior PM roles in fintech and payments",
    locationNote: "Based in Pune, open to Bangalore / Mumbai / remote",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AR&backgroundColor=0a1628&textColor=ffffff",
    email: "aayushhrajput@gmail.com",
    phone: "+91-7000393919",
    linkedin: "https://linkedin.com/in/aayushhrajput",
    resumePdf: "/resume.pdf"
  },

  hero: {
    headline: "I build products people actually use",
    subheadline: "5+ years delivering enterprise-scale digital products across BFSI, Life Sciences, E-commerce, EdTech & Manufacturing"
  },

  about: {
    summary: "Product Manager with over 5 years of experience delivering enterprise-scale digital products across BFSI, Life Sciences, E-commerce, EdTech, and Manufacturing domains. Expert in product discovery, roadmap planning, and agile delivery with a focus on AI-augmented workflows.",
    stats: [
      { value: "5+", label: "Years in product" },
      { value: "4", label: "Enterprise clients" },
      { value: "95%", label: "Sprint completion" }
    ],
    certifications: [
      "SAFe 6.0 POPM (2024)",
      "Business Analysis: Functional and NFR (2025)",
      "Claude Code Beginner Crash Course (2026)"
    ],
    education: {
      mba: "IMT Ghaziabad (2021-2023)",
      undergrad: "BE — Electronics & Communication Engineering (2015-2019)"
    }
  },

  projects: [
    {
      id: 1,
      title: "Prepaid Card Management Platform — Mastercard",
      domain: "BFSI / B2B & B2C Payments",
      role: "Product Owner",
      company: "Cognizant Technology Solutions",
      duration: "Aug 2023 - Present",
      oneLiner: "Led end-to-end delivery of prepaid card management platform serving B2B/B2C payments ecosystem",
      problem: "Mastercard needed to modernize legacy prepaid card workflows to improve customer experience and enable faster adoption across new geographies and banking partners.",
      approach: "Owned product vision, roadmap, and prioritized backlogs aligned with business objectives and regulatory requirements. Led sprint planning, backlog grooming, and reviews across distributed teams. Authored detailed Functional User Stories (FUS), Testing User Stories (TUS), and acceptance criteria.",
      outcome: "Achieved 95%+ sprint goal completion consistently. Reduced requirement-related defects by 30%. Successfully modernized workflows enabling faster adoption across new geographies and banking partners. Improved customer experience significantly.",
      tags: ["Payments", "B2B/B2C", "Agile", "SAFe", "Regulatory Compliance"]
    },
    {
      id: 2,
      title: "E-commerce & Customer Engagement Platform — Abbott Nutrition",
      domain: "Life Sciences / Global Health & Nutrition",
      role: "Product Owner",
      company: "Cognizant Technology Solutions",
      duration: "2023-2024",
      oneLiner: "Delivered global e-commerce platform providing leadership with real-time visibility into sales and engagement metrics",
      problem: "Abbott Nutrition required a scalable e-commerce and customer engagement platform to track sales, engagement metrics, and onboard users across multiple websites globally.",
      approach: "Led product strategy and delivery using Agile methodologies. Collaborated with PowerBI teams to map attributes, validate dashboards, and enable accurate reporting. Streamlined backlog refinement and story estimation practices.",
      outcome: "Successfully onboarded 10K+ users across websites within 6 months. Provided leadership with real-time visibility into sales and engagement metrics. Improved delivery predictability through better backlog management.",
      tags: ["E-commerce", "Life Sciences", "Power BI", "User Onboarding", "Analytics"]
    },
    {
      id: 3,
      title: "Digital Survey & Order Management System — Network Rail",
      domain: "Infrastructure / Railway Operations",
      role: "Product Owner",
      company: "Cognizant Technology Solutions",
      duration: "2023",
      oneLiner: "Delivered digital transformation solution for infrastructure survey and order management",
      problem: "Network Rail needed to digitize legacy survey and order management processes to improve operational efficiency and enable better tracking of infrastructure projects.",
      approach: "Defined product vision and roadmap. Led sprint planning and stakeholder alignment across business and engineering teams. Ensured clear requirement translation and faster decision-making through effective liaison.",
      outcome: "Successfully delivered digital survey and order management system improving operational efficiency. Enhanced tracking and visibility of infrastructure projects.",
      tags: ["Infrastructure", "Digital Transformation", "Order Management", "Operations"]
    },
    {
      id: 4,
      title: "Banking Workflows Platform — US Bank",
      domain: "BFSI / Core Banking",
      role: "Product Owner",
      company: "Cognizant Technology Solutions",
      duration: "2023",
      oneLiner: "Delivered secure, scalable banking workflows focused on customer experience",
      problem: "US Bank required modern banking workflows with enhanced security, scalability, and improved customer experience while maintaining regulatory compliance.",
      approach: "Authored detailed requirements with focus on security and compliance. Participated in defect triage calls and partnered with QA teams to improve test coverage and release quality. Streamlined acceptance criteria and early stakeholder validation.",
      outcome: "Delivered secure and scalable banking workflows. Reduced rework through well-defined acceptance criteria. Improved customer experience while maintaining regulatory compliance.",
      tags: ["Banking", "Security", "Compliance", "Customer Experience", "Scalability"]
    }
  ],

  skills: [
    {
      category: "Product Management",
      items: ["Product Discovery", "Roadmap Planning", "Backlog Prioritization", "User Stories", "MVP Definition", "Stakeholder Management"]
    },
    {
      category: "Agile & Delivery",
      items: ["SAFe 6.0", "Scrum", "Kanban", "Sprint Planning", "Backlog Grooming", "SDLC"]
    },
    {
      category: "AI & Tools",
      items: ["ChatGPT", "Claude", "Copilot", "Jira", "Confluence", "MIRO", "Figma", "Power BI", "Azure DevOps"]
    },
    {
      category: "Domain Expertise",
      items: ["Payments", "Core Banking", "BFSI", "Life Sciences", "E-commerce", "BRD/FRD/PRD"]
    }
  ],

  timeline: [
    {
      year: "2023-Present",
      event: "Product Owner at Cognizant",
      description: "Leading enterprise product delivery for Mastercard, Abbott, Network Rail, US Bank",
      company: "Cognizant Technology Solutions"
    },
    {
      year: "2024",
      event: "SAFe 6.0 POPM Certified",
      company: "Scaled Agile Inc"
    },
    {
      year: "2021-2023",
      event: "MBA from IMT Ghaziabad",
      description: "Merit scholarship recipient",
      company: "IMT Ghaziabad"
    },
    {
      year: "2019-2021",
      event: "Business Analyst at TCS",
      description: "Supporting business analysis and requirements gathering",
      company: "Tata Consultancy Services"
    },
    {
      year: "2015-2019",
      event: "B.E. in Electronics & Communication",
      company: "Medi-caps Institute, Indore"
    }
  ],

  tools: ["Jira", "Confluence", "MIRO", "Figma", "Power BI", "Azure DevOps", "Rally", "ALM", "ChatGPT", "Claude", "Copilot"],
  
  domains: [
    "BFSI / Payments",
    "Life Sciences",
    "E-commerce",
    "EdTech",
    "Manufacturing",
    "Infrastructure"
  ],

  clients: ["Mastercard", "Abbott Nutrition", "Network Rail", "US Bank"],

  aiExpertise: {
    summary: "AI-augmented Product Management specialist with proven track record of leveraging AI tools to accelerate product delivery and decision-making.",
    achievements: [
      "Built and customized AI agents in Claude and Microsoft Copilot for payments domain contexts",
      "Reduced documentation effort by ~40% through AI-integrated workflows",
      "Improved first-pass quality of user stories and acceptance criteria using AI tools",
      "Fine-tuned custom AI agents for sprint analysis, defect triage, and review preparation",
      "Cut meeting prep time significantly through AI-assisted automation"
    ],
    tools: ["Claude Projects", "Microsoft Copilot Studio", "ChatGPT"],
    applications: ["Requirement Drafting", "BRD/FRD Generation", "Test Scenario Analysis", "Competitive Benchmarking", "Stakeholder Communication"]
  },

  highlights: [
    "95%+ sprint goal completion rate",
    "30% reduction in requirement-related defects",
    "40% reduction in documentation effort through AI",
    "10K+ users onboarded within 6 months",
    "32 months of continuous product ownership at Cognizant"
  ]
};
