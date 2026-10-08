/**
 * Site content lives here.
 * Update jobs, skills, projects, links and articles without rewriting components.
 * Replace every value marked PLACEHOLDER before publishing.
 */

export const profile = {
  name: "Athenkosi Marobo",
  role: "IT Engineer · Network · Zero Trust Security · IT Support",
  location: "Cape Town, South Africa",
  yearsLabel: "5+ years",
  email: "PLACEHOLDER — add your email",
  emailHref: "",
  hero:
    "IT Engineer with 5 years of experience supporting end users, Microsoft enterprise environments and IT infrastructure. Experienced across Microsoft 365, Entra ID, Intune, Active Directory, Exchange, Zero Trust security, networking and enterprise support.",
  about: [
    "I am an IT professional based in Cape Town with about five years of hands-on experience across end-user support, systems administration and enterprise infrastructure.",
    "Most of my work has sat in Microsoft environments: Microsoft 365, Entra ID, Intune, Active Directory, Exchange Online and the day-to-day tools that keep a business running. More recently that has included Zero Trust work with Zscaler, identity, endpoint security and private application access.",
    "I like the part of the job where something is broken and the path is not obvious. Supporting users, cleaning up an environment, and learning the next piece of the stack — networking, cloud security, automation — is what keeps the work interesting."
  ],
  focusAreas: [
    "IT Support",
    "Systems Administration",
    "Microsoft 365",
    "Azure / Entra ID",
    "Active Directory",
    "Exchange Online",
    "Intune",
    "Networking",
    "Zero Trust Security",
    "Zscaler",
    "Endpoint Security",
    "Enterprise Infrastructure"
  ]
};

export const links = {
  linkedin: "https://www.linkedin.com/in/PLACEHOLDER",
  github: "https://github.com/Athenkosi1565",
  credly: "https://www.credly.com/users/PLACEHOLDER",
  microsoftLearn: "https://learn.microsoft.com/en-us/users/PLACEHOLDER/",
  cvNote:
    "CV file is not connected yet. Replace public/cv/athenkosi-marobo-cv.pdf and set cvReady to true in lib/data.ts."
};

export const cvReady = false;

export const socials = [
  { label: "LinkedIn", href: links.linkedin, key: "linkedin" },
  { label: "GitHub", href: links.github, key: "github" },
  { label: "Credly", href: links.credly, key: "credly" },
  { label: "Microsoft Learn", href: links.microsoftLearn, key: "learn" }
] as const;

export type SkillGroup = {
  id: string;
  title: string;
  summary: string;
  skills: { name: string; note: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "microsoft",
    title: "Microsoft & Cloud",
    summary: "Day-to-day administration and support across the Microsoft estate.",
    skills: [
      { name: "Microsoft 365", note: "Experienced with" },
      { name: "Azure", note: "Experienced with" },
      { name: "Entra ID / Azure AD", note: "Experienced with" },
      { name: "Exchange Online", note: "Experienced with" },
      { name: "SharePoint", note: "Experienced with" },
      { name: "Teams", note: "Experienced with" },
      { name: "OneDrive", note: "Experienced with" },
      { name: "Intune", note: "Experienced with" },
      { name: "Microsoft Defender", note: "Experienced with" }
    ]
  },
  {
    id: "systems",
    title: "Systems & Support",
    summary: "Endpoint, directory and service-desk work in enterprise environments.",
    skills: [
      { name: "Windows 10/11", note: "Experienced with" },
      { name: "Windows Server", note: "Experienced with" },
      { name: "Active Directory", note: "Experienced with" },
      { name: "Group Policy", note: "Experienced with" },
      { name: "DNS", note: "Experienced with" },
      { name: "DHCP", note: "Experienced with" },
      { name: "RMM", note: "Experienced with" },
      { name: "ServiceNow", note: "Experienced with" },
      { name: "ITIL", note: "Familiar with" },
      { name: "SLA management", note: "Experienced with" }
    ]
  },
  {
    id: "network",
    title: "Networking",
    summary: "LAN, routing and firewall troubleshooting, plus ongoing Cisco study.",
    skills: [
      { name: "TCP/IP", note: "Experienced with" },
      { name: "VLANs", note: "Experienced with" },
      { name: "Routing", note: "Experienced with" },
      { name: "Switching", note: "Experienced with" },
      { name: "Cisco", note: "Studying / lab" },
      { name: "FortiGate", note: "Experienced with" },
      { name: "VPN", note: "Experienced with" },
      { name: "Firewall troubleshooting", note: "Experienced with" },
      { name: "Wireless networking", note: "Experienced with" },
      { name: "OSPF", note: "Lab / study" },
      { name: "BGP", note: "Lab / study" },
      { name: "HSRP", note: "Lab / study" }
    ]
  },
  {
    id: "security",
    title: "Security",
    summary: "Zero Trust, secure web and private access, and endpoint protection.",
    skills: [
      { name: "Zero Trust", note: "Experienced with" },
      { name: "Zscaler ZIA", note: "Experienced with" },
      { name: "Zscaler ZPA", note: "Experienced with" },
      { name: "Zscaler ZDX", note: "Experienced with" },
      { name: "Mimecast", note: "Experienced with" },
      { name: "Microsoft Defender", note: "Experienced with" },
      { name: "Endpoint security", note: "Experienced with" },
      { name: "Identity security", note: "Experienced with" },
      { name: "SASE / SSE", note: "Familiar with" }
    ]
  }
];

export const roles = [
  {
    title: "IT Engineer – Zero Trust Exchange",
    org: "Ardagh / EXL",
    period: "Recent role",
    points: [
      "Zscaler ZIA, ZPA and ZDX",
      "Zero Trust architecture support",
      "Azure AD / Entra ID",
      "Adaxes and security groups",
      "App Segments, Private and Service Edges",
      "Windows Server and Debian App Connector VMs",
      "SCOM and IPAM",
      "Enterprise troubleshooting"
    ]
  },
  {
    title: "Desktop Support Engineer",
    org: "IGT Solutions",
    period: "Enterprise support",
    points: [
      "Microsoft 365, Azure and Intune",
      "Active Directory and Exchange Online",
      "Teams and SharePoint",
      "SCCM and ServiceNow",
      "Citrix and VMware",
      "FortiGate and Cisco networking",
      "Support for large call-centre environments",
      "Domain joining and workstation deployment"
    ]
  },
  {
    title: "IT Desktop Support",
    org: "Artibeus",
    period: "Systems and network support",
    points: [
      "Microsoft 365 administration",
      "Exchange administration and Mimecast",
      "Active Directory and Intune",
      "VPN configuration",
      "Firewall administration",
      "Switches and network troubleshooting"
    ]
  },
  {
    title: "IT Support Consultant",
    org: "iStore",
    period: "Device and customer support",
    points: [
      "Apple device support and Windows PC support",
      "Troubleshooting and customer support",
      "Ticket management",
      "Device configuration",
      "Basic MDM experience"
    ]
  },
  {
    title: "Web Developer Intern",
    org: "Capaciti / Cape Innovation & Technology Initiative",
    period: "Internship",
    points: [
      "Drupal and Angular",
      "JavaScript, HTML and CSS",
      "Node.js",
      "Adobe XD"
    ]
  }
];

export const projects = [
  {
    slug: "home-lab",
    title: "Home Cybersecurity & Networking Lab",
    kind: "Lab",
    summary:
      "A home lab used to practise directory services, segmentation and routing outside of production. Built around Windows Server, Cisco-style networking and security tools.",
    highlights: [
      "Windows Server, Active Directory, DNS, DHCP and NPS",
      "Cisco networking in GNS3, plus VirtualBox / VMware",
      "Kali Linux and OpenVAS",
      "Cisco ASAv, VPN, VLANs, OSPF, BGP and HSRP",
      "Firewall policies and network segmentation"
    ],
    stack: ["Windows Server", "Active Directory", "GNS3", "Cisco", "Kali", "OpenVAS", "VMware"],
    github: "https://github.com/Athenkosi1565",
    demo: "",
    visual: "lab"
  },
  {
    slug: "vuka-mzansi",
    title: "Vuka Mzansi",
    kind: "Concept",
    summary:
      "A South African-focused platform concept for people navigating job loss: UIF guidance, financial planning, CV building and employment resources in one place.",
    highlights: [
      "Plain-language guidance for UIF and job-loss steps",
      "CV building and employment resource links",
      "Financial planning prompts aimed at a local audience"
    ],
    stack: ["Web", "Content design", "South Africa focus"],
    github: "https://github.com/Athenkosi1565",
    demo: "",
    visual: "vuka"
  },
  {
    slug: "township-taxi-tracker",
    title: "TownshipTaxiTracker",
    kind: "Concept",
    summary:
      "A transport concept for township routes: clearer route information so people can see how local taxi movement is organised.",
    highlights: [
      "Route and area information for township transport",
      "Built around a local mobility problem rather than a generic map clone"
    ],
    stack: ["Web / app concept", "Maps", "Local transport"],
    github: "https://github.com/Athenkosi1565",
    demo: "",
    visual: "taxi"
  },
  {
    slug: "local-business-sites",
    title: "Local Business Websites",
    kind: "Web",
    summary:
      "Website concepts for South African businesses, including Emajiteni Braai, Mzoli's and Teez Lounge.",
    highlights: ["Emajiteni Braai", "Mzoli's", "Teez Lounge"],
    stack: ["HTML", "CSS", "JavaScript", "Web design"],
    github: "https://github.com/Athenkosi1565",
    demo: "",
    visual: "sites"
  }
];

export const learning = [
  { name: "Cisco networking studies", detail: "CCNA-related training", href: links.credly },
  { name: "CCNP-level networking studies", detail: "Ongoing deeper routing and switching study", href: links.credly },
  { name: "Cisco Python Essentials", detail: "Automation fundamentals", href: links.credly },
  { name: "Cisco Ethical Hacker", detail: "Security training", href: links.credly },
  { name: "Microsoft security training", detail: "Includes SC-900 study", href: links.microsoftLearn },
  { name: "Microsoft SC-900", detail: "Security, compliance and identity fundamentals", href: links.microsoftLearn },
  { name: "Palo Alto AI Security Fundamentals", detail: "AI security foundations", href: links.credly },
  { name: "Linux Foundation learning", detail: "Linux foundations", href: links.credly },
  { name: "Microsoft Learn achievements", detail: "Profile linked once the URL is added", href: links.microsoftLearn },
  { name: "Credly badges", detail: "Profile linked once the URL is added", href: links.credly }
];

export const currentlyLearning = [
  "Cybersecurity",
  "Cloud security",
  "Azure",
  "Zero Trust",
  "AI security",
  "Networking",
  "Automation",
  "Python"
];

export const education = [
  { place: "College of Cape Town", focus: "IT / Cisco Specialist studies" },
  { place: "On The Ball College", focus: "Systems Development" },
  { place: "CPUT", focus: "IT Network Professional studies" },
  { place: "System Support studies", focus: "Technical system support training" },
  { place: "Additional technical training", focus: "Certifications and short courses listed in Learning" }
];

export const services = [
  "L1 / L2 / L3 IT Support",
  "Microsoft 365 Administration",
  "Microsoft Entra ID",
  "Active Directory",
  "Exchange Administration",
  "Endpoint Management",
  "Intune",
  "Network Troubleshooting",
  "Firewall Support",
  "VPN Support",
  "Zero Trust Support",
  "Cybersecurity Operations",
  "Infrastructure Support",
  "Remote IT Support"
];

export const dashboard = [
  { label: "Experience", value: "5+ years", note: "Support, systems and infrastructure" },
  { label: "Microsoft 365", value: "Daily estate", note: "Identity, mail, endpoint, collaboration" },
  { label: "Zero Trust", value: "Zscaler", note: "ZIA, ZPA and ZDX in enterprise work" },
  { label: "Networking", value: "LAN to edge", note: "VLANs, VPN, firewalls, Cisco study" },
  { label: "Cloud", value: "Azure / Entra", note: "Identity and Microsoft cloud admin" },
  { label: "Cybersecurity", value: "In practice", note: "Endpoint, identity and secure access" },
  { label: "IT Support", value: "L1–L3", note: "Users, devices and escalation" }
];

export const articles = [
  {
    slug: "zero-trust-in-the-enterprise",
    title: "What Zero Trust Means in a Real Enterprise Environment",
    category: "Zero Trust",
    reading: "6 min",
    excerpt:
      "Zero Trust is less a product name and more a way of deciding who can reach what. A practical look from the support and engineering side.",
    draft: true
  },
  {
    slug: "zpa-vs-zia",
    title: "Understanding Zscaler ZPA vs ZIA",
    category: "Zero Trust",
    reading: "5 min",
    excerpt:
      "ZIA handles traffic going out to the internet. ZPA handles private applications. They solve different paths.",
    draft: true
  },
  {
    slug: "microsoft-home-lab",
    title: "Building a Microsoft Home Lab",
    category: "Home Lab",
    reading: "7 min",
    excerpt:
      "A small Windows Server lab is still one of the clearest ways to practise Active Directory, DNS and DHCP without touching production.",
    draft: true
  },
  {
    slug: "ad-vs-entra",
    title: "Active Directory vs Entra ID",
    category: "Microsoft 365",
    reading: "6 min",
    excerpt:
      "They both hold identities, but they are not the same directory. Here is how the split shows up in support work.",
    draft: true
  },
  {
    slug: "cybersecurity-home-lab",
    title: "How I Built My Cybersecurity Home Lab",
    category: "Home Lab",
    reading: "8 min",
    excerpt:
      "Segmentation, a firewall, a vulnerable target and a scanner. The lab is for practice, not for pretending to run a SOC.",
    draft: true
  },
  {
    slug: "lessons-from-enterprise-support",
    title: "Lessons From Working in Enterprise IT Support",
    category: "Career & IT",
    reading: "5 min",
    excerpt:
      "Tickets, call centres, and the difference between closing a call and actually fixing the cause.",
    draft: true
  }
];

export const articleBodies: Record<string, string[]> = {
  "zero-trust-in-the-enterprise": [
    "In vendor decks, Zero Trust is a diagram. In an enterprise ticket queue it is a set of decisions: which identity, which device, which application, and which path is allowed.",
    "On the Zero Trust Exchange work I have been around, that shows up as Zscaler ZIA for internet-bound traffic, ZPA for private applications, and ZDX when the question is why a user experience is poor rather than whether a port is open.",
    "The identity side still matters. Entra ID, security groups and tools like Adaxes are how access gets granted or cleaned up. App Segments describe what a private application actually is. Private and Service Edges are part of how that access is reached.",
    "None of this removes the need for ordinary troubleshooting. Windows Server, connectors (including Debian App Connector VMs), SCOM and IPAM still sit underneath the policy. Zero Trust changes the path. It does not remove the infrastructure."
  ],
  "zpa-vs-zia": [
    "ZIA and ZPA are easy to mix up because both sit under the Zscaler name.",
    "ZIA (Zscaler Internet Access) is the path for traffic leaving toward the internet. Policy, inspection and controls apply to that outbound use.",
    "ZPA (Zscaler Private Access) is for private applications. Users reach an application through the Zero Trust exchange instead of a traditional network VPN that drops them onto a subnet.",
    "ZDX is the experience side: when a user says an application is slow, it helps separate a local device issue from a path or application issue.",
    "In support work the useful question is which path the user is actually on, not which logo is on the portal."
  ],
  "microsoft-home-lab": [
    "A Microsoft home lab does not need to look like a datacentre. A Windows Server virtual machine, a client, and a careful network is enough to practise the things that come up at work.",
    "I use the lab for Active Directory, DNS, DHCP and NPS. Those services are easier to break on purpose at home than in a production domain.",
    "VirtualBox or VMware is enough to host the machines. The point is repeatable practice: promote a domain controller, join a client, watch DNS, and undo the mistake."
  ],
  "ad-vs-entra": [
    "Active Directory is the on-premises directory most Windows estates still depend on. Group Policy, domain joins and many line-of-business systems still expect it.",
    "Entra ID (formerly Azure AD) is Microsoft's cloud identity service. Microsoft 365 sign-in, Conditional Access and a lot of Intune targeting live there.",
    "In support, the same person can exist in both. A password issue, a sync issue, or a device that is domain-joined but not enrolled are different tickets. Knowing which directory owns the object saves time."
  ],
  "cybersecurity-home-lab": [
    "The security side of the lab is separate from the directory side on purpose. Segmentation matters even at home.",
    "The setup includes Cisco-style networking in GNS3, VLANs, VPN, firewall policy on Cisco ASAv, and routing practice with OSPF, BGP and HSRP. Kali Linux and OpenVAS are there for scanning and defensive practice against lab targets only.",
    "Nothing in the lab is aimed at systems I do not own. It is a place to see how a policy and a route interact before that conversation happens at work."
  ],
  "lessons-from-enterprise-support": [
    "Enterprise support is mostly repetition until it is not. Call-centre environments, workstation builds, domain joins and ticket tools like ServiceNow teach you to be clear under volume.",
    "The useful habit is writing down what you actually changed. Citrix, VMware, FortiGate or a simple Outlook profile can all look like 'the computer is slow' from the user's side.",
    "Moving from desktop support into Zero Trust and infrastructure work did not replace that habit. It just moved the same questions — who is affected, what changed, what does the path look like — onto a larger estate."
  ]
};

export const knowledgeCategories = [
  "Microsoft 365",
  "Networking",
  "Zero Trust",
  "Cybersecurity",
  "IT Support",
  "Home Lab",
  "Cloud",
  "Career & IT"
];
