export const profile = {
  name: "Kanithi Satya Sathvik",
  role: "SDE Intern | AI Engineer",
  heroTitle: "Building AI that turns messy workflows into reliable products.",
  heroSummary:
    "SDE Intern at Logikality. I turn domain workflows into product requirements, reproducible test cases, and end-to-end automation, and build AI-native prototypes across developer tooling, multi-agent operations, and full-stack workflows.",
  email: "kanithisathvik@gmail.com",
  phoneDisplay: "+91 9515136729",
  phoneHref: "+919515136729",
  location: "Bengaluru, India",
  github: "https://github.com/Sathvik2005",
  linkedin: "https://www.linkedin.com/in/kanithi-satya-sathvik-2b3452252",
  resumePath: "/Kanithi-Satya-Sathvik-Resume.pdf",
  openTo:
    "Open to AI Engineer, ML Engineer, FDE, Product Manager (AI), Data Engineer, Data Analyst, Data Scientist, SDE, and AI-native product engineering roles.",
};

export const stats = [
  { value: "8.45/10", label: "CGPA" },
  { value: "12", label: "AI projects shipped" },
  { value: "1M", label: "Records analyzed" },
  { value: "<800 ms", label: "Voice AI response latency" },
  { value: "60%", label: "Faster resume shortlisting" },
  { value: "95%", label: "Text-to-SQL test pass rate" },
  { value: "92%", label: "Top model accuracy" },
  { value: "35%", label: "Taxi failures reduced" },
];

export const strengths = [
  {
    title: "Product-focused AI",
    description:
      "I blend model quality, UX clarity, and delivery speed.",
  },
  {
    title: "Applied NLP depth",
    description:
      "Built with RAG, embeddings, semantic search, and transformers.",
  },
  {
    title: "Shipping mindset",
    description:
      "Comfortable shipping APIs, dashboards, and end-to-end systems.",
  },
  {
    title: "Real-world scope",
    description:
      "Experience across hiring, knowledge retrieval, healthcare, RL, and forecasting.",
  },
];

export const skillGroups = [
  {
    title: "Programming",
    items: [
      "Python",
      "Java",
      "SQL",
      "HTML",
      "CSS",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Feature Engineering",
      "LSTM",
      "XGBoost",
      "Time-Series Forecasting",
      "Reinforcement Learning",
      "DQN",
      "PPO",
      "SARSA",
      "Model Evaluation",
      "Explainable AI",
    ],
  },
  {
    title: "LLM / NLP",
    items: [
      "RAG",
      "Transformers",
      "Hugging Face",
      "Sentence Transformers",
      "DeBERTa-v3",
      "Embeddings",
      "Semantic Search",
      "Similarity Scoring",
      "Prompt Engineering",
      "LLM Agents",
      "Multi-Agent Systems",
      "Speech-to-Text",
      "Groq",
      "OpenAI API",
      "Gemini",
      "Ollama",
      "Vanna",
    ],
  },
  {
    title: "Frameworks / Tools",
    items: [
      "FastAPI",
      "Flask",
      "Streamlit",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "FAISS",
      "ChromaDB",
      "MySQL",
      "Whisper",
      "WebRTC",
      "Jupyter",
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      "Power BI",
      "SQL Analytics",
      "Data Visualization",
      "Plotly",
      "Exploratory Data Analysis",
      "Business Intelligence",
    ],
  },
  {
    title: "Full-Stack & QA",
    items: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "REST APIs",
      "Playwright",
      "End-to-End Testing",
      "Test Automation",
    ],
  },
  {
    title: "AI-Assisted Dev",
    items: [
      "Claude Code",
      "Coding Agents",
      "Agentic Workflows",
    ],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string[];
  tech: string[];
  links: { github?: string };
};

export const projects: Project[] = [
  {
    title: "SniperThink Voice AI",
    tagline: "Real-time voice conversation system that listens, reasons, and replies in under 800 ms.",
    description: [
      "Voice assistants break down on latency and fail outright when an LLM provider goes down.",
      "WebRTC streaming with Silero VAD, Faster-Whisper ASR, and an OpenAI, Ollama, rule-based fallback chain so it always responds.",
    ],
    tech: ["Python", "FastAPI", "WebRTC", "Faster-Whisper", "Silero VAD", "Ollama"],
    links: {
      github: "https://github.com/Sathvik2005/realtime-voice-ai-infrastructure-SniperThink",
    },
  },
  {
    title: "NeuroResearch",
    tagline: "Autonomous research engine blending local documents with live web intelligence.",
    description: [
      "Plain Q&A bots answer without grounding or showing where facts came from.",
      "Query routing across LLM, RAG, and Tavily web search produces source-attributed research reports in deep research mode.",
    ],
    tech: ["Python", "Streamlit", "RAG", "FAISS", "Tavily", "OpenAI", "Groq"],
    links: {
      github: "https://github.com/Sathvik2005/NeuroResearch-Autonomous-AI-Research-Engine.NeoStatas-use-case.",
    },
  },
  {
    title: "Insurance Risk Analytics",
    tagline: "Policy risk and profitability analysis on 1M simulated records with SQL and Power BI.",
    description: [
      "Leadership needed loss ratio, claims behaviour, and future liability in one view.",
      "Simulated 1,000,000 policies and claims, wrote 10 analytical SQL queries, and built a Power BI dashboard and report.",
    ],
    tech: ["Python", "Pandas", "SQL", "Power BI", "Jupyter"],
    links: {
      github: "https://github.com/Sathvik2005/data-analysis-and-data-science-projects",
    },
  },
  {
    title: "CogniNest AI",
    tagline: "Natural language to SQL assistant that answers database questions with safe queries and charts.",
    description: [
      "Business users could not query databases without writing SQL.",
      "Vanna 2.0 agent on FastAPI validates SELECT-only SQL and returned charts; 19/20 (95%) test questions passed.",
    ],
    tech: ["Python", "Vanna 2.0", "FastAPI", "Groq", "SQLite", "Plotly"],
    links: {
      github: "https://github.com/Sathvik2005/AI-powered-Natural-Language-to-SQL-system-using-Vanna-2.0-COGNINEST-AI",
    },
  },
  {
    title: "TwinMind Pro",
    tagline: "Real-time meeting copilot with live transcription and contextual suggestions.",
    description: [
      "Meetings move fast and key questions and insights are missed live.",
      "Whisper Large V3 transcription plus Llama 3.3 70B surfaces three suggestions every ~30s, with chat and JSON export.",
    ],
    tech: ["React", "Node.js", "Express", "Groq", "Whisper", "Tailwind"],
    links: {
      github: "https://github.com/Sathvik2005/AI-powered-meeting-assistant-with-live-suggestions-and-chat-interface-Twinmind",
    },
  },
  {
    title: "Answer IQ",
    tagline: "RAG search assistant delivering faster, more accurate knowledge answers.",
    description: [
      "Keyword search missed context in long, unstructured documents.",
      "Built RAG retrieval with grounded generation for precise answers.",
    ],
    tech: ["Python", "RAG", "FAISS", "ChromaDB", "TinyLlama"],
    links: {
      github: "https://github.com/Sathvik2005/Knowledge-base-Search-engine-unthinkable-",
    },
  },
  {
    title: "InsightRecruiter",
    tagline: "AI hiring pipeline ranking resumes faster with better candidate matching.",
    description: [
      "Manual screening was slow and inconsistent for large resume pools.",
      "Automated ranking cut shortlist time by 60% across 200+ resumes.",
    ],
    tech: ["FastAPI", "Streamlit", "Python", "NLP", "Embeddings"],
    links: {
      github: "https://github.com/Sathvik2005/Ai-resume-screening-system-using-python-and-streamlit-aicte-",
    },
  },
  {
    title: "ABSA Intelligence",
    tagline: "Aspect sentiment engine extracting detailed product feedback for better decisions.",
    description: [
      "Generic sentiment missed feature-level opinions in customer reviews.",
      "Fine-tuned DeBERTa model enabled real-time aspect-level insight extraction.",
    ],
    tech: ["Python", "DeBERTa-v3", "Transformers", "PyTorch", "HF Spaces"],
    links: {
      github: "https://github.com/Sathvik2005/Product-recommendation-system-using-ABSA-",
    },
  },
  {
    title: "Autonomous Taxi Agent",
    tagline: "RL taxi agent improving navigation accuracy and drop-off reliability.",
    description: [
      "Rule-based navigation failed in dynamic route and reward states.",
      "Trained DQN, PPO, SARSA agents; reduced failed drop-offs by 35%.",
    ],
    tech: ["Python", "RL", "DQN", "PPO", "SARSA"],
    links: {},
  },
  {
    title: "Heart Disease Prediction",
    tagline: "Clinical risk model enabling earlier, more accurate heart disease detection.",
    description: [
      "Noisy clinical records reduced reliability in early disease detection.",
      "Engineered features boosted accuracy to 90% on 1,000+ records.",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "ML"],
    links: {
      github: "https://github.com/Sathvik2005/Heart_disease_classification",
    },
  },
  {
    title: "AQI Forecasting",
    tagline: "Air quality forecasting dashboard enabling earlier environmental monitoring decisions.",
    description: [
      "Teams lacked forward visibility into upcoming AQI shifts.",
      "Forecasting model reached 85% accuracy using three years of data.",
    ],
    tech: ["Python", "Streamlit", "Regression", "Time Series", "Pandas"],
    links: {
      github: "https://github.com/Sathvik2005/Air-Quality-Index-Prediction-aicte-",
    },
  },
  {
    title: "Thyroid Classifier",
    tagline: "Diagnostic model improving thyroid prediction precision on clinical datasets.",
    description: [
      "Clinical classification accuracy was weak across baseline models.",
      "Tuned XGBoost pipeline delivered 92% accuracy on 3,500+ records.",
    ],
    tech: ["Python", "XGBoost", "SVM", "Pandas", "scikit-learn"],
    links: {
      github: "https://github.com/Sathvik2005/Thyroid-Classification",
    },
  },
];

export type TimelineEntry = { title: string; org: string; period: string; detail: string };

export const timeline: TimelineEntry[] = [
  {
    title: "SDE Intern",
    org: "Logikality, Bengaluru",
    period: "May 2026 - Present",
    detail:
      "Turn Logikintake and Title Intelligence business rules into testable scenarios; build Playwright page objects and end-to-end specs; prepare operator dataset packets; document reproducible classification and stacking defects; contribute to QA strategy, PRD clarifications, and CTO demo scenarios.",
  },
  {
    title: "B.Tech, Computer Science (AI & ML)",
    org: "VIT-AP University",
    period: "2022 - 2026",
    detail: "Final-year student, CGPA 8.45/10, focused on AI product engineering.",
  },
  {
    title: "Intermediate",
    org: "Sri Chaitanya Junior College",
    period: "2020 - 2022",
    detail: "Completed intermediate education with 90.7% overall score.",
  },
  {
    title: "ML Club Member",
    org: "VIT-AP University",
    period: "2023 - 2024",
    detail: "Led AI workshops and supported peer learning sessions.",
  },
];

export const certifications: { title: string; href?: string }[] = [
  { title: "Oracle Cloud Infrastructure 2025 - Generative AI Certified Professional" },
  { title: "Complete A.I. & Machine Learning, Data Science Bootcamp - Udemy (Nov 2025, 44 hrs)", href: "/certificates/udemy-ai-ml-data-science-bootcamp.pdf" },
  { title: "AI Coder: Complete Claude Code & Coding Agents Course - Udemy (Jun 2026, 16.5 hrs)", href: "/certificates/udemy-claude-code-coding-agents.pdf" },
];

export const achievements = [
  "Built deployable AI systems across NLP, text-to-SQL, real-time copilots, healthcare, RL, and forecasting.",
  "Delivered measurable gains in accuracy, reliability, and workflow speed.",
  "Presented projects with clear business value and technical depth.",
];

export const currentFocus =
  "AI-native product engineering: LLM workflows, multi-agent tooling, and end-to-end test automation.";

export const aboutIntro = {
  title: "AI systems that ship, scale, and get used.",
  body: "Final-year AI and ML student focused on deployable products. I turn models into clean, useful tools for real workflows. Work includes RAG, text-to-SQL, live meeting copilots, hiring AI, healthcare ML, RL, and forecasting.",
};
