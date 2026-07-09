// All editable site content lives in this file.
// Update text, links, and placeholders here — components read from this data.

export const site = {
  name: "Sergio Paulo Caetano",
  role: "Ph.D. Student in Artificial Intelligence",
  institution: "Ajou University, South Korea",
  department: "Department of Artificial Intelligence",
  advisor: "Prof. Seok-Won Lee",
  location: "Suwon, South Korea",
  titleTag: "Sergio Paulo Caetano | Ph.D. Student in Artificial Intelligence",
  description:
    "Personal academic website of Sergio Paulo Caetano, Ph.D. student in Artificial Intelligence at Ajou University, researching fairness requirements engineering for AI-based sociotechnical systems.",
};

export const bio = `I am a Ph.D. student in Artificial Intelligence at Ajou University, South Korea. My research focuses on Requirements Engineering for AI-based sociotechnical systems, with emphasis on fairness, explainability, responsible AI, and robust AI software systems. My broader background includes machine learning, deep learning, computer vision, natural language processing, cloud computing, big data, distributed systems, and high-performance computing.`;

export const links = {
  email: "sa20ra202124015@ajou.ac.kr",
  github: "https://github.com/caetanosergio",
  googleScholar: "https://scholar.google.com/citations?user=3IMD-7AAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0001-4960-189X",
  linkedin: "https://www.linkedin.com/in/s%C3%A9rgio-caetano-94279117a",
  labWebsite: "http://nise.ajou.ac.kr/people.html",
  cvPdf: "/CV.pdf",
  photo: "/Profile_photo.jpeg",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "News", href: "#news" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Teaching", href: "#teaching" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Languages", href: "#languages" },
  { label: "Service", href: "#service" },
  { label: "Contact", href: "#contact" },
];

export type NewsItem = {
  date: string; // e.g. "2026-07"
  text: string;
};

export const news: NewsItem[] = [
  {
    date: "2026-07",
    text: "Personal Ph.D. website launched.",
  },
  {
    date: "2026-06",
    text: "Continued research progress on MIFF (Multidimensional Iterative Fairness Framework).",
  },
  {
    date: "2026-05",
    text: "Systematic literature review on fairness requirements engineering in progress.",
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  status: string;
  thesis?: string;
};

export const education: EducationItem[] = [
  {
    degree: "Ph.D. in Artificial Intelligence",
    institution: "Ajou University, South Korea",
    status: "Expected completion: 2027",
  },
  {
    degree: "Master's in Industrial Engineering",
    institution: "Ajou University, South Korea",
    status: "Graduated: 2023",
    thesis:
      "Design Knowledge Discovery and Extractor Analytical Pipeline System for COVID-19 Research Based on Hadoop-Spark Big Data Frameworks.",
  },
  {
    degree: "Bachelor's in Marine Geology",
    institution: "Eduardo Mondlane University, Mozambique",
    status: "Graduated: 2017",
    thesis: "Morphodynamics and Sedimentary Facies of Bons Sinais Estuary in the Gazela River.",
  },
];

export type ResearchItem = {
  title: string;
  description: string;
};

export const research: ResearchItem[] = [
  {
    title: "Fairness Requirements Engineering for AI Systems",
    description:
      "Investigating how fairness concerns can be elicited, specified, and validated as first-class requirements throughout the AI system lifecycle.",
  },
  {
    title: "MIFF: Multidimensional Iterative Fairness Framework",
    description:
      "A framework for iteratively addressing fairness across multiple dimensions — from elicitation and specification to operationalization, monitoring, and revision.",
  },
  {
    title: "Fairness-Context Representation and Traceability",
    description:
      "Developing representations that connect fairness requirements to their sociotechnical context and maintain traceability across development artifacts.",
  },
  {
    title: "Lifecycle-Oriented Fairness: Elicitation to Monitoring and Revision",
    description:
      "Studying how fairness requirements evolve across the full engineering lifecycle, including post-deployment monitoring and requirement revision.",
  },
  {
    title: "Case Studies: Lending and Hiring AI Systems",
    description:
      "Applying fairness requirements engineering methods to real-world sociotechnical domains, including loan approval and hiring decision systems.",
  },
  {
    title: "Previous Research: Distributed Systems, Big Data, and HPC",
    description:
      "Previous work on cloud computing, Hadoop-Spark big data frameworks, graph partitioning, Apache Flink checkpointing, and HPC task execution optimization.",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  status: string;
  year: string;
  pdfUrl?: string;
  bibtexUrl?: string;
  codeUrl?: string;
};

export const publications: Publication[] = [
  {
    title: "Surrogate Model of Autotuning Techniques for Optimizing HPC Task Execution",
    authors: "Sergio Paulo Caetano", // TODO: confirm full author list from the KCC 2024 paper
    venue: "KCC 2024, Korea Information Science Society",
    status: "Conference paper",
    year: "2024",
  },
  {
    title: "Dynamic Programming-Based Multilevel Graph Partitioning for Large-Scale Graph Data",
    authors: "Sergio Paulo Caetano", // TODO: confirm full author list
    venue: "Winter Conference of the Korean Telecommunications Society",
    status: "Conference paper",
    year: "2024",
  },
  {
    title: "Analysis of the In-Memory Checkpointing Approach in Apache Flink",
    authors: "Sergio Paulo Caetano", // TODO: confirm full author list
    venue: "Summer Conference of the Korean Telecommunications Society",
    status: "Conference paper",
    year: "2023",
  },
  {
    title: "Fairness Requirements Engineering for AI-Based Sociotechnical Systems: A Systematic Literature Review",
    authors: "Sergio Paulo Caetano, Seok-Won Lee",
    venue: "Manuscript under review",
    status: "Under review",
    year: "2026",
  },
  {
    title: "Fairness-Relevant Context Mining for ML-Enabled Systems",
    authors: "Sergio Paulo Caetano, Seok-Won Lee",
    venue: "Manuscript in preparation",
    status: "Manuscript in preparation",
    year: "2026",
  },
];

export type TeachingItem = {
  title: string;
  institution: string;
  period: string;
  details: string[];
};

export const teaching: TeachingItem[] = [
  {
    title: "Teaching Assistant",
    institution: "Department of Software and Computer Engineering, Ajou University, South Korea",
    period: "2023.03 – 2024.12",
    details: [
      "Artificial Intelligence",
      "Computer Networks",
      "Object-Oriented Programming in Java: lab sessions and grading",
    ],
  },
  {
    title: "Teaching Assistant",
    institution: "Department of Marine Geology, Eduardo Mondlane University, Mozambique",
    period: "2016.02 – 2017.12",
    details: [
      "Mathematics: Differential Equations and Integral Calculus",
      "Statistics and Probability",
    ],
  },
];

export type AdditionalTeachingItem = {
  title: string;
  description: string;
};

export const additionalTeaching: AdditionalTeachingItem[] = [
  {
    title: "Middle School AI",
    description: "Introductory AI concepts taught to middle school students.",
  },
  {
    title: "High School AI",
    description: "AI fundamentals and applied concepts taught to high school students.",
  },
  {
    title: "Algebra / Math Tutoring",
    description: "Tutoring in algebra and general mathematics.",
  },
  {
    title: "Spanish A1 Teaching",
    description: "Beginner-level (A1) Spanish language instruction.",
  },
];

export type ProjectItem = {
  title: string;
  description: string;
};

export const projects: ProjectItem[] = [
  {
    title: "MIFF Framework",
    description:
      "Ongoing development of the Multidimensional Iterative Fairness Framework for fairness requirements engineering.",
  },
  {
    title: "Fairness Requirements SLR",
    description:
      "A systematic literature review mapping the state of the art in fairness requirements engineering for AI systems.",
  },
  {
    title: "FairCredit / Fairness Readiness Assistant (Planned)",
    description:
      "Planned fairness readiness assistant applied to credit/lending decision systems.",
  },
  {
    title: "AI Education Materials (Planned)",
    description:
      "Planned teaching materials for AI education across middle school, high school, and tutoring contexts.",
  },
];

export type SkillGroup = {
  category: string;
  items: string;
};

export const skills: SkillGroup[] = [
  {
    category: "Programming",
    items: "C, C++, Python, SQL, Java, JavaScript, R, MATLAB, Scala",
  },
  {
    category: "Machine Learning / AI",
    items: "Scikit-learn, PyTorch, TensorFlow, Keras, computer vision, natural language processing",
  },
  {
    category: "Big Data / Distributed Systems",
    items: "Hadoop, Spark, MapReduce, CUDA, MPI, multithread programming",
  },
  {
    category: "Tools / Platforms",
    items: "MySQL Workbench, Tableau, MS Office, Ubuntu, Windows, macOS",
  },
];

export type AwardItem = {
  title: string;
  years: string;
};

export const awards: AwardItem[] = [
  { title: "BK Graduate Student Research Scholarship, Ajou University", years: "2023–Present" },
  {
    title: "Exemplary Academic Performance Award, K-TOPIK Program, Konyang University",
    years: "2020",
  },
  { title: "Korean Government Scholarship Program (GKS), South Korea", years: "2019–2023" },
  { title: "Eduardo Mondlane University Full Scholarship, Mozambique", years: "2014–2017" },
];

export const languages: string[] = ["English", "Korean", "Portuguese", "Spanish"];

export type ServiceItem = {
  title: string;
  description: string;
};

export const service: ServiceItem[] = [
  {
    title: "Korean Researcher Information (KRI)",
    description: "Registered researcher profile under the Korean Researcher Information system.",
  },
  {
    title: "Seminar and Conference Presentations",
    description: "Presentations delivered at lab seminars and academic conferences.",
  },
  {
    title: "Lab Responsibilities",
    description: "Ongoing responsibilities within the research lab.",
  },
  {
    title: "Academic Service and Peer Review",
    description: "Peer review and broader academic service activity, updated as engagements are confirmed.",
  },
];
