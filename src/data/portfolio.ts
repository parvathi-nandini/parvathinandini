export const personalInfo = {
  name: "Parvathi Nandini Rajanala",
  title: "Senior AI Engineer",
  tagline: "Building production-grade intelligent systems at enterprise scale",
  bio: "7+ years designing and shipping production-grade AI systems, generative AI platforms, and cloud-native backends across GCP, Azure, and AWS. Expert in agentic AI architecture, multi-agent orchestration, NL-to-SQL reasoning, and tool-using LLMs that translate complex business requirements into explainable, actionable outcomes.",
  location: "Dallas, TX",
  email: "parvathinandinirajanala@gmail.com",
  phone: "+1 (702) 934-0406",
  linkedin: "https://www.linkedin.com/in/parvathi-nandini-rajanala-6837b01a8/",
  github: "https://github.com/parvathi-nandini",
  photo: "/image.png",
};

export const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "5+", label: "Enterprise Clients" },
  { value: "40%+", label: "Cost Reduction" },
  { value: "5TB+", label: "Data / Day" },
];

export const experiences = [
  {
    company: "Miracle Software Systems",
    role: "Senior AI Engineer",
    period: "Feb 2026 – Present",
    location: "Remote",
    logo: "M",
    color: "#14b8a6",
    project: "MProcureAI — Enterprise AI Procurement Platform | Azure + GCP",
    highlights: [
      "Engineered a 5-agent multi-agent AI system (AgentOrchestrator + RFQ, Market Research, Negotiation, Evaluation, Contract agents) powered by Azure OpenAI GPT-4o via LiteLLM across 6 providers",
      "Built autonomous multi-round negotiation engine with BATNA analysis and psychological pricing — achieving 12–15% average cost savings per procurement cycle",
      "Developed 35+ RESTful and SSE streaming API endpoints in Python/FastAPI with JWT auth, rate limiting, and Azure Key Vault secret management; deployed on Azure Container Apps",
      "Integrated Google Gemini 2.0 Flash as a conversational procurement assistant using function-calling with deterministic fallback for offline resilience",
      "Built ML-powered supplier risk intelligence module with 12+ risk factors, composite 0–100 scoring, and what-if simulation surfaced through radar charts",
      "Provisioned full Azure infrastructure via Terraform IaC; built AKS Kubernetes manifests with HPA and real-time SSE streaming for live AI negotiation visibility",
    ],
  },
  {
    company: "Ford Motors",
    role: "AI Engineer / Backend Engineer",
    period: "Sep 2025 – Feb 2026",
    location: "Remote · via Miracle Software Systems",
    logo: "F",
    color: "#3b82f6",
    project: "GenAI Ontology Manager — Multi-Agent AI Platform | GCP",
    highlights: [
      "Designed and deployed a production multi-agent AI platform on GCP using Google ADK and Gemini LLMs enabling quality engineers to perform natural-language root cause analysis against enterprise knowledge graphs",
      "Built 4 specialized AI agents with 34+ tool-use functions covering NL-to-SPARQL translation, autonomous BigQuery SQL generation, and investigation memory models persisting reasoning context across sessions",
      "Engineered 14+ FastAPI endpoints with Pydantic type-safe models, Jinja2-powered dynamic prompt templating, and exponential backoff for resilient LLM API interactions",
      "Containerized 6+ Python microservices with Docker deployed to Cloud Run; provisioned Secret Manager, IAP, and Load Balancer via Terraform IaC across CI/Preprod/Prod environments",
      "Established CI/CD governance via Cloud Build integrating Ruff linting, Pytest TDD, and multi-environment Terraform deployments with automated rollback",
    ],
  },
  {
    company: "AAA – The Auto Club Group",
    role: "GCP Data Engineer",
    period: "Mar 2025 – Sep 2025",
    location: "Remote · via Miracle Software Systems",
    logo: "A",
    color: "#f59e0b",
    project: "GCP Data Platform & ML Modernization",
    highlights: [
      "Built BigQuery ML models in Python for customer segmentation and demand forecasting, integrated with Vertex AI for automated retraining and deployment",
      "Developed Python ETL pipelines using Dataflow and Apache Beam processing 5+ TB daily with sub-minute latency; orchestrated 100+ workflows in Cloud Composer",
      "Engineered BigQuery data warehouse with partitioning, clustering, and materialized views — reducing query costs 40% and improving performance 3x",
      "Migrated 50+ legacy ETL jobs to GCP containerized environments using Docker, reducing processing time 60% and saving $200K annually",
    ],
  },
  {
    company: "American Tire Distributors",
    role: "GCP Data Engineer",
    period: "Aug 2021 – Mar 2025",
    location: "Remote · via Miracle Software Systems",
    logo: "AT",
    color: "#10b981",
    project: "Event-Driven Data Platform | GCP + Snowflake",
    highlights: [
      "Architected event-driven data ingestion using Cloud Functions to automate processing from 500+ supplier locations with self-healing reconciliation pipelines",
      "Authored 100+ dbt models with incremental materializations, automated testing, and documentation generating demand forecasting intelligence from 1+ TB daily tire transaction data",
      "Built hybrid BigQuery + Snowflake data warehouse; Snowflake Streams CDC and partitioning reduced query costs 45%; built Grafana dashboards with Slack-integrated alerting",
      "Built real-time Pub/Sub streaming pipelines processing tire sales transactions with sub-minute latency into BigQuery and Snowflake across 500+ locations",
    ],
  },
  {
    company: "Accenture",
    role: "Senior Data Scientist",
    period: "Sep 2018 – Dec 2019",
    location: "India",
    logo: "Ac",
    color: "#a855f7",
    project: "Enterprise ML & Fraud Detection | Azure + AWS",
    highlights: [
      "Developed enterprise Python ML models using scikit-learn for credit risk scoring and churn prediction achieving 85% accuracy — deployed in banking production systems serving millions of customers",
      "Built real-time fraud detection pipeline using Azure Databricks, Event Hub, and Spark Streaming for financial transaction scoring; Azure Data Factory ETL workflows reduced operational costs 40%",
      "Developed Python RESTful APIs exposing model predictions to downstream banking platforms; automated Jenkins CI/CD with regression testing and rollback",
    ],
  },
  {
    company: "Eficiens System",
    role: "Data Science Intern — ML Engineering",
    period: "Jan 2021 – May 2021",
    location: "India",
    logo: "E",
    color: "#0ea5e9",
    project: "Customer Churn Prediction | AWS SageMaker",
    highlights: [
      "Deployed Python ML models on AWS SageMaker for customer churn prediction with real-time inference endpoints, improving retention effectiveness 15%",
      "Built ETL workflows using AWS Glue and Lambda reducing data preparation time 60%",
      "Containerized Python model serving applications with Docker for reproducible deployments; implemented CloudWatch monitoring for prediction drift, latency, and error rates in production endpoints",
    ],
  },
  {
    company: "Cognizant",
    role: "Data Scientist Intern — Automotive Analytics",
    period: "Aug 2017 – Sep 2018",
    location: "India",
    logo: "C",
    color: "#f97316",
    project: "Predictive Maintenance | AWS SageMaker",
    highlights: [
      "Built Python predictive maintenance models on AWS SageMaker for automotive manufacturing — improving failure prediction accuracy 25% and reducing unplanned downtime through sensor data intelligence",
      "Automated data workflows using AWS S3, Lambda, and Glue for streaming and batch processing of vehicle telemetry data",
      "Packaged ML models as Docker containers for reproducible SageMaker deployments across environments",
    ],
  },
];

export const projects = [
  {
    title: "MProcureAI — Enterprise AI Procurement Platform",
    description:
      "Full-stack enterprise AI procurement platform automating end-to-end procurement lifecycle from conversational RFQ creation through multi-supplier negotiation to contract generation.",
    tags: ["Azure OpenAI", "LiteLLM", "FastAPI", "Python", "Terraform", "AKS", "Docker"],
    metrics: ["5 AI Agents", "12–15% Cost Savings", "35+ API Endpoints"],
    github: "#",
    featured: true,
    icon: "cpu",
  },
  {
    title: "GenAI Ontology Manager (Ford Motors)",
    description:
      "Production multi-agent AI platform on GCP enabling quality engineers to perform natural-language root cause analysis against enterprise knowledge graphs with traceable, citation-backed insights.",
    tags: ["Google ADK", "Gemini LLM", "BigQuery", "NL-to-SPARQL", "FastAPI", "Cloud Run"],
    metrics: ["4 AI Agents", "34+ Tool Functions", "NL-to-SQL"],
    github: "#",
    featured: true,
    icon: "brain",
  },
  {
    title: "GCP Data Modernization (AAA Auto Club)",
    description:
      "End-to-end GCP data platform with BigQuery ML for customer segmentation and demand forecasting, processing 5+ TB daily with sub-minute latency across 100+ orchestrated workflows.",
    tags: ["BigQuery ML", "Dataflow", "Apache Beam", "Cloud Composer", "Vertex AI", "Docker"],
    metrics: ["5+ TB / day", "40% Cost Reduction", "100+ Workflows"],
    github: "#",
    featured: true,
    icon: "cloud",
  },
  {
    title: "Real-Time Tire Distribution Pipeline",
    description:
      "Event-driven data ingestion platform with 100+ dbt models, Pub/Sub streaming, and hybrid BigQuery + Snowflake warehouse processing 1+ TB daily from 500+ supplier locations.",
    tags: ["dbt", "Pub/Sub", "BigQuery", "Snowflake", "Cloud Functions", "Grafana"],
    metrics: ["500+ Locations", "1+ TB / day", "45% Query Cost Cut"],
    github: "#",
    featured: false,
    icon: "stream",
  },
  {
    title: "Credit Risk Scoring & Fraud Detection",
    description:
      "Enterprise ML models for credit risk scoring (85% accuracy) and real-time fraud detection pipeline using Azure Databricks and Spark Streaming for financial transaction scoring.",
    tags: ["Azure Databricks", "scikit-learn", "Spark Streaming", "Azure Data Factory", "Python"],
    metrics: ["85% Accuracy", "Real-time Scoring", "40% Cost Reduction"],
    github: "#",
    featured: false,
    icon: "shield",
  },
  {
    title: "Autonomous Multi-Round Negotiation Engine",
    description:
      "AI negotiation engine supporting parallel supplier negotiations with 3 buyer strategies, BATNA analysis, concession tracking, and psychological pricing achieving measurable cost savings.",
    tags: ["Azure OpenAI GPT-4o", "Python", "FastAPI", "SSE Streaming", "Redis"],
    metrics: ["3 Buyer Strategies", "12–15% Avg Savings", "Real-time SSE"],
    github: "#",
    featured: false,
    icon: "zap",
  },
];

export const skillCategories = [
  {
    category: "AI / GenAI",
    skills: ["Google ADK", "Gemini LLM", "Azure OpenAI", "Vertex AI", "LangChain", "RAG", "Prompt Engineering", "BigQuery ML"],
  },
  {
    category: "Agentic Systems",
    skills: ["Multi-Agent Orchestration", "NL-to-SQL", "Tool Use / Function Calling", "Investigation Memory", "Multi-Step Reasoning", "Explainability"],
  },
  {
    category: "GCP",
    skills: ["BigQuery", "Cloud Run", "Dataflow", "Vertex AI", "Cloud Functions", "Pub/Sub", "Cloud Composer", "Cloud Build"],
  },
  {
    category: "Backend / APIs",
    skills: ["Python", "FastAPI", "Flask", "RESTful APIs", "SSE Streaming", "Docker", "Kubernetes", "Pydantic"],
  },
  {
    category: "Data Engineering",
    skills: ["Apache Spark", "dbt", "Kafka", "Airflow", "Snowflake", "BigQuery", "Azure Synapse", "Databricks"],
  },
  {
    category: "DevOps / IaC",
    skills: ["Terraform", "Jenkins", "Cloud Build", "GitLab CI/CD", "GitHub Actions", "TDD / Test-First", "Agile"],
  },
];

export const education = [
  {
    degree: "M.S. Data Science",
    school: "University of North Texas",
    period: "",
    focus: "Machine Learning & Data Systems",
  },
  {
    degree: "B.Tech Computer Science & Engineering",
    school: "NRI Institute of Technology",
    period: "",
    focus: "Computer Science & Engineering",
  },
];

export const certifications = [
  "Google Cloud Professional Data Engineer",
  "Google Machine Learning Engineer",
  "Deep Learning Specialization — Coursera / DeepLearning.AI",
];
