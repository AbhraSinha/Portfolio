// Portfolio content based on Abhra Sinha's LinkedIn profile.
const profile = "https://www.linkedin.com/in/abhra-sinha/";
const settings = { isSplash: false, useCustomCursor: true, googleTrackingID: "" };
const greeting = {
  title: "Hello.", title2: "Abhra", logo_name: "Abhra.S()", nickname: "Abhra Sinha",
  full_name: "Abhra Sinha",
  subTitle: "Solutions Architecture Leader at AWS Canada. Building secure cloud solutions and developing the next generation of architects.",
  resumeLink: profile, mail: "mailto:abhra.sinha2007@gmail.com"
};
const socialMediaLinks = {
  github: "https://github.com/AbhraSinha", linkedin: profile,
  gmail: "abhra.sinha2007@gmail.com", twitter: "", instagram: ""
};
const skills = { data: [
  { title: "Cloud Architecture & Security", fileName: "CloudInfraImg", skills: [
    "⚡ Designing scalable, secure, and cost-efficient AWS architectures",
    "⚡ Guiding migrations, modernization, security, compliance, and data platform design",
    "⚡ Building infrastructure as code and DevSecOps practices"
  ], softwareSkills: [
    { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws", style: { color: "#FF9900" } },
    { skillName: "Terraform", fontAwesomeClassname: "simple-icons:terraform", style: { color: "#7B42BC" } },
    { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker", style: { color: "#1488C6" } },
    { skillName: "Kubernetes", fontAwesomeClassname: "simple-icons:kubernetes", style: { color: "#326CE5" } }
  ] },
  { title: "Generative AI & Innovation", fileName: "DataScienceImg", skills: [
    "⚡ Leading generative and agentic AI enablement from ideation to production",
    "⚡ Architecting RAG pipelines, agentic frameworks, and foundation model integrations",
    "⚡ Helping customers connect technical decisions to business outcomes"
  ], softwareSkills: [] },
  { title: "Technical Leadership & People Development", fileName: "FullStackImg", skills: [
    "⚡ Leading technical strategy, customer advisory, and partner enablement",
    "⚡ Hiring, mentoring, and developing early-career Solutions Architects",
    "⚡ Creating immersive learning experiences and clear paths for growth"
  ], softwareSkills: [] }
] };
const degrees = { degrees: [
  { title: "University of Illinois Chicago", subtitle: "M.S. in Electrical and Computer Engineering", logo_path: "uic-mark.svg", alt_name: "UIC", duration: "2016 - 2018", descriptions: ["⚡ Studied cloud computing, networking, computer architecture, embedded systems and IoT.", "⚡ Engineering Toastmasters Club, Engineering Design Team and Leadershape Institute."], website_link: "https://www.uic.edu/" },
  { title: "SRM IST Chennai", subtitle: "B.Tech. in Instrumentation and Control Engineering", logo_path: "srm-mark.svg", alt_name: "SRM", duration: "2012 - 2016", descriptions: ["⚡ First Class with Distinction; focused on control systems, automation, virtual instrumentation and embedded systems.", "⚡ Member of the International Society of Automation and organizer of student technical events."], website_link: "https://www.srmist.edu.in/" }
] };
const certData = [
  ["AWS Certified Machine Learning Engineer – Associate", "Issued Apr 2026 · Expires Apr 2029", "04036f7b-ec17-4fe7-b72c-07fc514db908"],
  ["AWS Certified Generative AI Developer – Professional", "Issued Mar 2026 · Expires Mar 2029", "b34eeac9-a183-446c-93a7-8ff5740bed91"],
  ["AWS Certified Generative AI Developer – Professional Early Adopter", "Issued Mar 2026", "bba811d8-a5c1-49e8-96d8-c279da6a9863"],
  ["AWS Certified Security – Specialty", "Issued Sep 2022 · Expired Sep 2025", "d850aff6-09e2-4352-b9fb-bdc610317c0e"],
  ["AWS Certified Cloud Practitioner", "Issued Jun 2023 · Expired Jul 2026", "27b23cb0-a198-416e-ada7-9b049c7f8b96"],
  ["AWS Certified Solutions Architect – Professional", "Issued Jul 2023 · Expired Jul 2026", "5ba190e2-a934-4995-93fd-7ede52b8fb97"],
  ["AWS Certified DevOps Engineer – Professional", "Issued Feb 2022 · Expired Feb 2025", "a8d37631-d453-484b-804a-5b4d28f5f9a4"],
  ["AWS Certified SysOps Administrator – Associate", "Issued Jan 2019 · Expired Feb 2022"],
  ["AWS Certified Developer – Associate", "Issued Jan 2021 · Expired Apr 2024"],
  ["AWS Certified Solutions Architect – Associate", "Issued Jan 2021 · Expired Apr 2024"],
  ["AWS Certified Data Analytics – Specialty", "Issued Jan 2022 · Expired Jan 2025"]
];
const certifications = { certifications: certData.map(([title, date, badge]) => ({ title, subtitle: `Amazon Web Services · ${date}`, logo_path: "aws-mark.svg", alt_name: "AWS", color_code: "#FF9900", certificate_link: badge ? `https://www.credly.com/badges/${badge}` : `${profile}details/certifications/` })) };
const role = (title, company, duration, location, description, logo_path, company_url) => ({ title, company, duration, location, description, logo_path, company_url, color: "#FF9900" });
const experience = { title: "Experience", subtitle: "Cloud architecture, security and leadership", description: "I blend hands-on architecture advisory with technical strategy and people development, helping customers and teams innovate on the cloud.", header_image_path: "experience.svg", sections: [
  { title: "Professional Experience", experiences: [
    role("Residency Leader, CSC Canada", "Amazon Web Services", "Oct 2024 - Present", "Toronto, Canada", "Lead hiring and development for AWS Canada's early-career Solutions Architects, from structured interviews and immersive learning through customer engagements and progression into full-time roles.", "aws-mark.svg", "https://aws.amazon.com/"),
    role("Sr. Tech Lead, CSC Canada | Sr. Solutions Architect", "Amazon Web Services", "Jan 2024 - Present", "Toronto, Canada", "Lead technical strategy for the Scale segment, advise customers on migrations, modernization, AI and security, and mentor the next generation of cloud architects.", "aws-mark.svg", "https://aws.amazon.com/"),
    role("Sr. Solutions Architect", "Amazon Web Services", "Oct 2023 - Sep 2024", "Toronto, Canada", "Advised enterprise customers on secure cloud architecture, generative AI, migrations and modernization, from discovery and proof of concept to production.", "aws-mark.svg", "https://aws.amazon.com/"),
    role("Solutions Architect", "Amazon Web Services", "Oct 2021 - Sep 2023", "Toronto, Canada", "Partnered with enterprise customers on cloud architecture, security, migrations, workshops and production launches.", "aws-mark.svg", "https://aws.amazon.com/"),
    role("Solutions Architect", "Amazon Web Services", "Oct 2020 - Sep 2021", "Chicago, USA", "Advised enterprise healthcare customers on secure cloud architectures, migrations and modernization.", "aws-mark.svg", "https://aws.amazon.com/"),
    role("DevSecOps Engineer", "Yum! Brands", "Jul 2020 - Oct 2020", "Chicago, USA", "Built secure CI/CD pipelines and infrastructure-as-code frameworks using Terraform, CloudFormation and Ansible.", "yum-mark.svg", "https://www.yum.com/"),
    role("Cloud Security Engineer", "Groupon", "Sep 2019 - Jul 2020", "Greater Chicago Area", "Led cloud security strategy for a migration to AWS, implementing security-as-code, governance, IAM and automated detection across a multi-account environment.", "groupon-mark.svg", "https://www.groupon.com/"),
    role("Cloud Engineer", "Yum! Brands", "Jul 2018 - Sep 2019", "Chicago, USA", "Managed cloud infrastructure and DevOps for Pizza Hut Digital, including infrastructure as code, CI/CD, observability and security.", "yum-mark.svg", "https://www.yum.com/"),
    role("System Engineer", "University of Illinois Chicago", "Aug 2017 - May 2018", "Greater Chicago Area", "Supported research computing infrastructure, Windows and Linux systems, virtualization, disaster recovery and technical services for research users.", "uic-mark.svg", "https://www.uic.edu/")
  ] }
] };
const projectsHeader = { title: "Projects & Publications", description: "Selected projects and AWS publications spanning cloud security, DevOps, disaster recovery and embedded systems.", avatar_image_path: "projects_image.svg" };
const projectLink = `${profile}details/projects/`;
const pubLink = `${profile}details/publications/`;
const projects = { data: [
  { id: "1", name: "RRC Infrastructure Disaster Recovery", url: projectLink, description: "Designed and tested disaster recovery for research infrastructure workloads using Azure Site Recovery and VMware.", languages: [] },
  { id: "2", name: "Fully Autonomous Driving Car", url: projectLink, description: "An autonomous car prototype combining embedded C, sensors and IoT-based voice control with AWS.", languages: [] },
  { id: "3", name: "Smart Home Intruder Electronic Lockdown Device", url: projectLink, description: "A home security system combining sensors, cameras, LabVIEW and automated lockdown controls.", languages: [] },
  { id: "4", name: "Writing IAM Policies for User-Specific S3 Folders", url: "https://aws.amazon.com/blogs/security/writing-iam-policies-grant-access-to-user-specific-folders-in-an-amazon-s3-bucket/", description: "AWS Security Blog · November 2023. Restricting federated users' access to their own Amazon S3 folders.", languages: [] },
  { id: "5", name: "Connect On-Premises Active Directory to AWS Using AD Connector", url: "https://aws.amazon.com/blogs/security/how-to-connect-your-on-premises-active-directory-to-aws-using-ad-connector/", description: "AWS Security Blog · August 2023. Federated console access, role assignment and domain joining with AD Connector.", languages: [] },
  { id: "6", name: "How to Receive Alerts When Your IAM Configuration Changes", url: "https://aws.amazon.com/blogs/security/how-to-receive-alerts-when-your-iam-configuration-changes/", description: "AWS Security Blog · July 2023.", languages: [] },
  { id: "7", name: "Upskill and Reskill for Security Careers in the Cloud", url: "https://aws.amazon.com/blogs/training-and-certification/upskill-for-security-careers-in-the-cloud/", description: "AWS Training and Certification Blog · July 2023.", languages: [] },
  { id: "8", name: "Introduction to DevOps on AWS", url: "https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/introduction-devops-aws.html", description: "AWS Whitepaper · April 2023. A guide to AWS capabilities for DevOps, continuous delivery and infrastructure as code.", languages: [] }
] };
const contactPageData = {
  contactSection: { title: "Contact Me", description: "Let's connect about cloud architecture, AI, security, and developing technical talent." },
  blogSection: { title: "Publications", subtitle: "Explore my AWS articles and whitepaper on cloud security and DevOps.", link: pubLink, avatar_image_path: "blogs_image.svg" }
};
export { settings, greeting, socialMediaLinks, skills, degrees, certifications, experience, projectsHeader, contactPageData, projects };
