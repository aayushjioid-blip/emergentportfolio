// TODO: Replace this mock data with actual resume parsing data

export const portfolioData = {
  personal: {
    name: "Aayush Rajput",
    role: "Product Manager & Product Owner",
    tagline: "Building products at the intersection of fintech, enterprise & agile delivery",
    location: "Pune, India",
    openTo: "Senior PM roles in fintech and payments",
    locationNote: "Based in Pune, open to Bangalore / Mumbai / remote",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AR&backgroundColor=0a1628&textColor=ffffff",
    email: "aayush.rajput@example.com",
    linkedin: "https://linkedin.com/in/aayush-rajput",
    resumePdf: "/resume.pdf"
  },

  hero: {
    headline: "I build products people actually use",
    subheadline: "5 years shipping enterprise products across fintech, life sciences & e-commerce"
  },

  about: {
    summary: "PM/PO with 5 years at Cognizant across enterprise clients. Background in BA at TCS before that. I bridge business goals with technical delivery — roadmaps, sprint ceremonies, stakeholder alignment, the works.",
    stats: [
      { value: "5+", label: "Years in product" },
      { value: "4", label: "Enterprise clients" },
      { value: "6", label: "Industry domains" }
    ],
    certifications: ["SAFe 6.0 POPM"],
    education: {
      mba: "IMT Ghaziabad",
      undergrad: "BE — Electronics & Communication Engineering"
    }
  },

  projects: [
    {
      id: 1,
      title: "Payments Platform — Mastercard",
      domain: "BFSI / Payments",
      role: "Product Owner",
      oneLiner: "Led roadmap and sprint delivery for a payments integration product",
      problem: "Mastercard needed a scalable integration platform to streamline payment processing across multiple channels and reduce transaction latency.",
      approach: "Owned product backlog, conducted stakeholder interviews, defined sprint goals, and coordinated with engineering teams across 3 geographies. Implemented SAFe framework for large-scale delivery.",
      outcome: "Reduced integration time by 40%, improved transaction processing speed by 25%, and successfully delivered 8 sprints on schedule.",
      tags: ["Payments", "Agile", "SAFe", "Stakeholder Management"]
    },
    {
      id: 2,
      title: "Supply Chain Portal — Abbott Nutrition",
      domain: "Life Sciences",
      role: "Product Owner",
      oneLiner: "Owned end-to-end product backlog for a supply chain visibility tool",
      problem: "Abbott needed real-time visibility into their supply chain operations to reduce delays and improve inventory management across multiple facilities.",
      approach: "Created user stories, prioritized backlog based on business value, facilitated sprint planning sessions, and managed release cycles. Used MIRO for collaborative planning.",
      outcome: "Delivered 12 features across 6 sprints, achieved 95% sprint commitment accuracy, and improved supply chain visibility by 60%.",
      tags: ["Life Sciences", "Backlog Management", "Stakeholder Alignment"]
    },
    {
      id: 3,
      title: "Infrastructure Delivery — Network Rail",
      domain: "Manufacturing / Infrastructure",
      role: "Product Manager",
      oneLiner: "Drove digital transformation delivery for rail infrastructure client",
      problem: "Network Rail required a digital transformation initiative to modernize legacy infrastructure management systems and improve operational efficiency.",
      approach: "Defined product vision and roadmap, conducted user research with field engineers, managed cross-functional teams, and tracked KPIs using Power BI dashboards.",
      outcome: "Successfully migrated 5 legacy systems to cloud, reduced operational costs by 30%, and improved user satisfaction scores by 45%.",
      tags: ["Digital Transformation", "Azure DevOps", "Cross-geography"]
    },
    {
      id: 4,
      title: "Banking Product Suite — US Bank",
      domain: "BFSI",
      role: "Product Owner",
      oneLiner: "Managed product backlog and release planning for banking feature suite",
      problem: "US Bank needed to enhance their digital banking suite with new features while maintaining compliance and security standards.",
      approach: "Managed epic and feature breakdown, coordinated with compliance teams, ran PI planning sessions, and maintained product roadmap using Jira and Confluence.",
      outcome: "Delivered 15 features across 4 releases, maintained 100% compliance standards, and increased customer engagement by 35%.",
      tags: ["Banking", "Release Planning", "Jira", "Compliance"]
    }
  ],

  skills: [
    {
      category: "Product craft",
      items: ["Roadmapping", "PRD writing", "User story mapping", "OKR setting", "Backlog grooming", "Release planning"]
    },
    {
      category: "Delivery & agile",
      items: ["SAFe 6.0", "Scrum ceremonies", "Sprint planning", "PI Planning", "Azure DevOps", "Jira / Confluence"]
    },
    {
      category: "Discovery & design",
      items: ["User interviews", "Wireframing", "Figma", "MIRO", "A/B testing mindset"]
    },
    {
      category: "Analytics & data",
      items: ["Power BI", "KPI dashboards", "Funnel analysis", "Stakeholder reporting"]
    }
  ],

  timeline: [
    {
      year: "2024",
      event: "Led delivery across Mastercard, Abbott, Network Rail, US Bank",
      company: "Cognizant Technology Solutions"
    },
    {
      year: "2021",
      event: "SAFe 6.0 POPM Certified",
      company: "Scaled Agile"
    },
    {
      year: "2020",
      event: "Moved to Product Owner role at Cognizant",
      company: "Cognizant Technology Solutions"
    },
    {
      year: "2019",
      event: "Started as Business Analyst at TCS",
      company: "Tata Consultancy Services"
    }
  ],

  tools: ["Jira", "Confluence", "MIRO", "Figma", "Power BI", "Azure DevOps"],
  
  domains: [
    "BFSI / Payments",
    "Life Sciences",
    "E-commerce",
    "EdTech",
    "Manufacturing"
  ],

  clients: ["Mastercard", "Abbott Nutrition", "Network Rail", "US Bank"]
};
