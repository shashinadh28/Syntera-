// Our Work data — all 37 case study entries
// Images live in /our-work/webp-format-images/ (public folder)

export const tagColors = {
  "AI Studio": {
    bg: "bg-[#FFF4EC]",
    text: "text-[#E85D04]",
    border: "border-[#FDDCBC]",
  },
  "Design Studio": {
    bg: "bg-[#FAF5FF]",
    text: "text-[#A855F7]",
    border: "border-[#E9D5FF]",
  },
  "Front-end": {
    bg: "bg-[#EEF2FF]",
    text: "text-[#6366F1]",
    border: "border-[#C7D2FE]",
  },
  Backend: {
    bg: "bg-[#ECFDF5]",
    text: "text-[#10B981]",
    border: "border-[#A7F3D0]",
  },
  Mobile: {
    bg: "bg-[#FFF1F2]",
    text: "text-[#F43F5E]",
    border: "border-[#FECDD3]",
  },
  "Data Studio": {
    bg: "bg-[#F0F9FF]",
    text: "text-[#0EA5E9]",
    border: "border-[#BAE6FD]",
  },
  "Quality Studio": {
    bg: "bg-[#FFFBEB]",
    text: "text-[#F59E0B]",
    border: "border-[#FDE68A]",
  },
};

export const ourWorkItems = [
  {
    id: "1",
    slug: "findmeboard-cloud-native-ai-driven-contractor-marketplace",
    title: "FindMeBoard — cloud-native, AI-driven contractor marketplace",
    summary:
      "Built a cloud-native contractor marketplace powered by AI matching and real-time bidding, connecting homeowners with verified local professionals across 50+ trade categories.",
    industry: "MarketplaceTech",
    tags: ["AI Studio", "Backend", "Front-end"],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "OpenAI"],
    industriesList: ["MarketplaceTech", "Construction"],
    servicesList: ["AI Matching", "Cloud Infrastructure", "Custom Marketplace"],
    solutionsList: ["Custom Marketplace", "Cloud Infrastructure", "AI Matching"],
    aiTools: ["Claude Code", "Figma MCP", "OpenAI GPT-4"],
    image: "/our-work/FindMeBoardcloud-native, AI-driven contractor marketplace.webp",
    outcomesHighlights: [
      "Reduced contractor-to-homeowner match time by 74%",
      "Scaled to 12,000+ active contractors in the first 6 months",
      "AI bidding engine cut average project cost by 18% for homeowners",
      "99.95% uptime SLA achieved on AWS infrastructure",
      "Integrated 50+ trade categories with real-time availability checks",
    ],
    overview:
      "A cloud-native, AI-driven marketplace that transformed how contractors and homeowners connect, delivering transparent bidding and intelligent matching at scale.",
    solutionsSections: [
      {
        title: "AI Matching Engine",
        description:
          "We designed and built a proprietary ML matching algorithm that analyses contractor profiles, past ratings, geographic proximity, and homeowner preferences to surface the top 3 bids in under 2 seconds.",
        keyDeliverables: [
          "Multi-factor scoring model trained on 200K historical jobs",
          "Real-time geospatial radius matching",
          "Automated bid ranking UI with confidence scores",
        ],
        technologies: ["Python", "scikit-learn", "AWS Lambda", "Redis"],
      },
      {
        title: "Cloud Infrastructure",
        description:
          "Architected a fully serverless, multi-region AWS backbone capable of handling 50K concurrent users with auto-scaling, CDN distribution, and zero-downtime deployments.",
        keyDeliverables: [
          "Multi-region AWS ECS Fargate cluster",
          "CloudFront CDN with edge caching",
          "CI/CD pipeline with blue-green deployments",
        ],
        technologies: ["AWS ECS", "CloudFront", "Terraform", "GitHub Actions"],
      },
      {
        title: "Contractor & Homeowner UX",
        description:
          "Crafted dual-portal experiences — a mobile-first homeowner flow for posting jobs and reviewing bids, and a professional dashboard for contractors to manage their pipeline.",
        keyDeliverables: [
          "Mobile-first React PWA with offline support",
          "Real-time bid notifications via WebSocket",
          "In-app messaging and document signing",
        ],
        technologies: ["React", "Tailwind CSS", "Socket.io", "Stripe"],
      },
    ],
    ctaHeadline: "Build your marketplace with AI at the core",
    ctaText:
      "Let's engineer a platform that connects supply and demand at scale — with intelligent matching, seamless UX, and cloud-native reliability.",
    ctaButtonText: "Book a free consultation",
  },
  {
    id: "2",
    slug: "10x-faster-app-modernization-powered-by-ai",
    title: "10x faster app modernization, powered by AI",
    summary:
      "Delivered a full-stack modernization of a legacy enterprise platform using AI-assisted refactoring tools, slashing migration time from 18 months to 6 weeks.",
    industry: "Enterprise Software",
    tags: ["AI Studio", "Backend", "Data Studio"],
    technologies: ["Python", "AWS", "GPT-4", "PostgreSQL", "Kubernetes"],
    industriesList: ["Enterprise Software", "FinTech"],
    servicesList: ["App Modernization", "AI-assisted Refactoring", "Cloud Migration"],
    solutionsList: ["AI Code Analysis", "Cloud-native Migration", "API Modernization"],
    aiTools: ["Claude Code", "GitHub Copilot", "GPT-4"],
    image: "/our-work/webp-format-images/10x faster app modernization, powered by AI.webp",
    outcomesHighlights: [
      "Reduced migration timeline from 18 months to 6 weeks",
      "Cut infrastructure costs by 42% post-migration",
      "Zero production downtime during cutover",
      "100% legacy test suite migrated and green",
      "Team productivity up 3x with AI pair-programming",
    ],
    overview:
      "Used AI-driven code analysis and automated refactoring to modernize a 10-year-old monolith into a cloud-native microservices architecture — 10x faster than traditional methods.",
    solutionsSections: [
      {
        title: "AI-Assisted Refactoring",
        description:
          "Deployed a custom LLM pipeline to parse, annotate, and refactor 400K lines of legacy Java code into modern TypeScript microservices, with human review at each milestone gate.",
        keyDeliverables: [
          "AST-based code analysis and dependency mapping",
          "Automated API contract generation",
          "LLM-powered unit test scaffolding",
        ],
        technologies: ["GPT-4", "TypeScript", "Jest", "OpenRewrite"],
      },
      {
        title: "Cloud-Native Migration",
        description:
          "Migrated the monolith to a Kubernetes-orchestrated microservices architecture on AWS, with service mesh, API gateway, and observability stack built in from day one.",
        keyDeliverables: [
          "12 independent microservices with domain boundaries",
          "Istio service mesh with mTLS",
          "Grafana + Prometheus observability stack",
        ],
        technologies: ["Kubernetes", "Istio", "AWS EKS", "Helm"],
      },
    ],
    ctaHeadline: "Modernize your platform 10x faster with AI",
    ctaText:
      "Our AI-assisted modernization practice can cut your migration timeline and costs dramatically while ensuring zero downtime.",
    ctaButtonText: "Start your modernization",
  },
  {
    id: "3",
    slug: "ai-data-systems-job-search-website-globally",
    title: "AI, data systems, and custom applications for the job search website globally",
    summary:
      "Engineered AI-powered job recommendation engines and real-time data pipelines for a global job search platform serving 100M+ monthly users.",
    industry: "HRTech",
    tags: ["AI Studio", "Data Studio", "Backend"],
    technologies: ["Python", "Spark", "Kafka", "ElasticSearch", "AWS"],
    industriesList: ["HRTech", "Consumer Internet"],
    servicesList: ["AI Recommendations", "Data Engineering", "Platform Engineering"],
    solutionsList: ["ML Recommendation Engine", "Real-time Data Pipelines", "Search Relevance"],
    aiTools: ["Custom ML Models", "ElasticSearch ML", "Apache Spark MLlib"],
    image: "/our-work/webp-format-images/AI, data systems, and custom applications for the job search website globally.webp",
    outcomesHighlights: [
      "Recommendation CTR improved by 38% within 90 days",
      "Real-time indexing latency reduced to under 500ms",
      "Processed 2B+ job-seeker interactions per month",
      "Search relevance score improved by 47%",
      "Scaled to 100M+ monthly active users without infrastructure changes",
    ],
    overview:
      "Built the AI backbone of a global job marketplace — from real-time data pipelines to personalised ML recommendation systems that match millions of job seekers with the right roles every day.",
    solutionsSections: [
      {
        title: "ML Recommendation Engine",
        description:
          "Designed and deployed a hybrid collaborative + content-based filtering model that personalises job recommendations based on skills, location, salary expectations, and past engagement.",
        keyDeliverables: [
          "Two-tower neural recommendation model",
          "A/B testing framework for model rollouts",
          "Real-time feature store on Redis",
        ],
        technologies: ["PyTorch", "MLflow", "Redis", "AWS SageMaker"],
      },
      {
        title: "Real-time Data Pipelines",
        description:
          "Built high-throughput Kafka-based event pipelines that ingest, enrich, and route 2B+ behavioural events per month to downstream ML training and analytics systems.",
        keyDeliverables: [
          "Kafka cluster processing 50K events/second",
          "Flink stream processing for real-time enrichment",
          "Data lake on S3 with Iceberg table format",
        ],
        technologies: ["Apache Kafka", "Apache Flink", "AWS S3", "Apache Iceberg"],
      },
    ],
    ctaHeadline: "Build the AI engine behind your data platform",
    ctaText:
      "We help data-intensive platforms build recommendation systems, real-time pipelines, and search relevance engines that drive measurable business outcomes.",
    ctaButtonText: "Let's talk data & AI",
  },
  {
    id: "4",
    slug: "ai-ml-powered-predictive-maintenance-ev",
    title: "AI-ML-powered predictive maintenance for tens of thousands of EVs",
    summary:
      "Deployed a real-time predictive maintenance platform using sensor data and ML models to reduce EV fleet downtime by 63% for a major automotive operator.",
    industry: "eMobility",
    tags: ["AI Studio", "Data Studio", "Backend"],
    technologies: ["Python", "TensorFlow", "AWS IoT", "TimescaleDB", "Kafka"],
    industriesList: ["eMobility", "Automotive"],
    servicesList: ["Predictive Maintenance", "IoT Engineering", "ML Ops"],
    solutionsList: ["Sensor Data Ingestion", "Anomaly Detection Models", "Fleet Dashboard"],
    aiTools: ["TensorFlow", "AWS SageMaker", "Custom Anomaly Detection"],
    image: "/our-work/webp-format-images/AI-ML-powered predictive maintenance for tens of thousands of EVs.webp",
    outcomesHighlights: [
      "Reduced unplanned downtime by 63% across 50,000+ EVs",
      "Predicted battery degradation with 91% accuracy",
      "Saved $4.2M annually in emergency repair costs",
      "Maintenance alerts generated 72 hours before failure events",
      "Platform ingests 8TB of sensor data daily",
    ],
    overview:
      "Built an end-to-end IoT + ML platform that monitors tens of thousands of electric vehicles in real time, predicting component failures before they happen and routing maintenance crews proactively.",
    solutionsSections: [
      {
        title: "IoT Data Ingestion",
        description:
          "Designed a high-throughput IoT pipeline that ingests telemetry from 50K+ EVs — including battery temperature, motor RPM, brake wear, and charging cycles — at sub-second latency.",
        keyDeliverables: [
          "AWS IoT Core with MQTT edge agents",
          "TimescaleDB hypertables for time-series storage",
          "Kafka-based event routing to ML inference endpoints",
        ],
        technologies: ["AWS IoT Core", "MQTT", "Kafka", "TimescaleDB"],
      },
      {
        title: "Predictive ML Models",
        description:
          "Trained and deployed a suite of LSTM and gradient boosting models to predict battery degradation, motor failures, and brake pad wear with 91%+ accuracy across all vehicle models.",
        keyDeliverables: [
          "LSTM model for battery cycle-life prediction",
          "XGBoost model for motor anomaly detection",
          "Automated model retraining pipeline on new fleet data",
        ],
        technologies: ["TensorFlow", "XGBoost", "MLflow", "AWS SageMaker"],
      },
    ],
    ctaHeadline: "Predict failures before they happen",
    ctaText:
      "Our IoT + ML engineering team can build a predictive maintenance platform that keeps your fleet running and your costs down.",
    ctaButtonText: "Talk to our IoT team",
  },
  {
    id: "5",
    slug: "ai-driven-regtech-monitoring-nasdaq-nyse",
    title: "AI-driven RegTech monitoring Nasdaq and the NYSE trading",
    summary:
      "Built a real-time AI surveillance system that monitors trading activity across Nasdaq and NYSE exchanges, detecting market manipulation and compliance violations at microsecond speed.",
    industry: "FinTech / RegTech",
    tags: ["AI Studio", "Backend", "Data Studio"],
    technologies: ["Python", "Kafka", "Flink", "AWS", "ClickHouse"],
    industriesList: ["FinTech", "RegTech"],
    servicesList: ["Real-time Surveillance", "ML Anomaly Detection", "Compliance Reporting"],
    solutionsList: ["Trade Surveillance Engine", "Pattern Detection ML", "Regulatory Dashboards"],
    aiTools: ["Custom Anomaly Detection", "Graph Neural Networks", "XGBoost"],
    image: "/our-work/webp-format-images/AI-driven RegTech monitoring Nasdaq and the NYSE trading.webp",
    outcomesHighlights: [
      "Monitors 2M+ trades per day across both exchanges",
      "False positive rate reduced by 58% vs rule-based predecessor",
      "Alert investigation time cut from 4 hours to 12 minutes",
      "Regulatory report generation automated — saving 400 analyst-hours/month",
      "System processes events with sub-5ms latency",
    ],
    overview:
      "Engineered a microsecond-grade AI surveillance engine that scans every trade across Nasdaq and NYSE, flagging spoofing, layering, and wash trading patterns in real time for regulatory compliance.",
    solutionsSections: [
      {
        title: "Real-time Trade Surveillance",
        description:
          "Built a stream-processing engine using Apache Flink that consumes raw order book data from both exchanges and evaluates every event against 200+ regulatory patterns within 5ms.",
        keyDeliverables: [
          "Flink CEP (Complex Event Processing) rules engine",
          "ClickHouse OLAP store for microsecond-range queries",
          "Real-time alert routing to compliance desks",
        ],
        technologies: ["Apache Flink", "ClickHouse", "Kafka", "Python"],
      },
      {
        title: "ML Anomaly Detection",
        description:
          "Trained graph neural network and gradient boosting models on 5 years of labeled trading data to detect novel manipulation patterns that rule-based systems miss.",
        keyDeliverables: [
          "GNN model for cross-account wash trading detection",
          "XGBoost spoofing classifier with 97.3% precision",
          "Continuous learning pipeline on new labeled cases",
        ],
        technologies: ["PyG (PyTorch Geometric)", "XGBoost", "MLflow", "AWS SageMaker"],
      },
    ],
    ctaHeadline: "Stay compliant in real time with AI surveillance",
    ctaText:
      "Our RegTech engineering team builds high-throughput, AI-powered monitoring systems that keep your trading operations compliant and your regulators satisfied.",
    ctaButtonText: "Discuss your compliance needs",
  },
  {
    id: "6",
    slug: "ai-driven-supply-chain-analytics-fortune-500",
    title: "AI-driven supply chain analytics leveraged by Fortune 500 brands",
    summary:
      "Delivered an AI-powered supply chain analytics platform used by Fortune 500 manufacturers to predict demand, optimise inventory, and reduce stockouts by 71%.",
    industry: "Supply Chain / Manufacturing",
    tags: ["AI Studio", "Data Studio", "Backend"],
    technologies: ["Python", "Spark", "dbt", "Snowflake", "AWS"],
    industriesList: ["Manufacturing", "Retail", "Logistics"],
    servicesList: ["Demand Forecasting", "Inventory Optimisation", "Supply Chain Analytics"],
    solutionsList: ["ML Demand Forecasting", "Real-time Inventory Visibility", "Supplier Risk Scoring"],
    aiTools: ["Prophet", "XGBoost", "AWS SageMaker", "dbt"],
    image: "/our-work/webp-format-images/AI-driven supply chain analytics leveraged by Fortune 500 brands.webp",
    outcomesHighlights: [
      "Stockouts reduced by 71% across 3 Fortune 500 clients",
      "Demand forecast accuracy improved to 94.2% MAPE",
      "Inventory carrying costs down 28% in 12 months",
      "Supplier risk scoring flagged 97% of disruptions 30 days in advance",
      "Platform processes 50M+ SKU-level data points daily",
    ],
    overview:
      "Engineered a unified supply chain intelligence platform combining ML demand forecasting, real-time inventory visibility, and supplier risk scoring — adopted across the global operations of multiple Fortune 500 brands.",
    solutionsSections: [
      {
        title: "ML Demand Forecasting",
        description:
          "Built a hierarchical ensemble forecasting system combining Facebook Prophet, XGBoost, and LSTM models that accounts for seasonality, promotions, and external macroeconomic signals.",
        keyDeliverables: [
          "Hierarchical reconciliation across SKU / store / region",
          "Automated promotion lift modelling",
          "Weekly retraining pipeline with drift detection",
        ],
        technologies: ["Prophet", "XGBoost", "LSTM", "MLflow"],
      },
      {
        title: "Real-time Inventory & Supplier Intelligence",
        description:
          "Connected 200+ ERP and WMS systems via APIs and CDC pipelines, delivering a unified real-time inventory ledger and supplier risk score updated every 15 minutes.",
        keyDeliverables: [
          "Snowflake data warehouse with Iceberg lake integration",
          "Supplier risk scoring using news NLP + financial signals",
          "Self-serve analytics dashboards for supply chain teams",
        ],
        technologies: ["Snowflake", "dbt", "Kafka", "Grafana"],
      },
    ],
    ctaHeadline: "Make your supply chain smarter with AI",
    ctaText:
      "From demand forecasting to supplier risk intelligence, we build supply chain analytics platforms that drive measurable cost savings and resilience.",
    ctaButtonText: "Talk to our supply chain team",
  },
  {
    id: "7",
    slug: "ai-enabled-safety-intelligence-fleet-operations",
    title: "AI-enabled safety intelligence for large-scale fleet operations",
    summary:
      "Deployed a computer vision and telematics-based driver safety platform that reduced fleet accident rates by 54% across 30,000+ vehicles.",
    industry: "Fleet / Logistics",
    tags: ["AI Studio", "Backend", "Data Studio"],
    technologies: ["Python", "OpenCV", "TensorFlow", "AWS", "TimescaleDB"],
    industriesList: ["Fleet Management", "Logistics"],
    servicesList: ["Computer Vision", "Telematics Analytics", "Safety Intelligence"],
    solutionsList: ["Driver Behaviour Scoring", "Incident Detection", "Safety Coaching Platform"],
    aiTools: ["YOLOv8", "TensorFlow", "AWS Rekognition"],
    image: "/our-work/webp-format-images/AI-enabled safety intelligence for large-scale fleet operations.webp",
    outcomesHighlights: [
      "Fleet accident rate reduced by 54% in 18 months",
      "90% of harsh braking events flagged and coached within 24 hours",
      "Driver safety scores improved by avg 32 points per quarter",
      "Insurance premium reduction of 22% secured for client",
      "System processes 4M+ video frames per day at 30fps",
    ],
    overview:
      "Built an end-to-end AI safety platform combining in-cab computer vision cameras, telematics sensors, and ML models to detect dangerous driving behaviours in real time and coach drivers proactively.",
    solutionsSections: [
      {
        title: "Computer Vision & Incident Detection",
        description:
          "Deployed fine-tuned YOLOv8 models on edge devices inside fleet vehicles to detect distraction, tailgating, lane departure, and harsh manoeuvres in real time at 30fps.",
        keyDeliverables: [
          "Edge-deployed YOLOv8 models with <50ms inference latency",
          "Event clipping and upload pipeline for flagged incidents",
          "False positive suppression using contextual telematics fusion",
        ],
        technologies: ["YOLOv8", "ONNX", "AWS Greengrass", "OpenCV"],
      },
      {
        title: "Driver Safety Coaching Platform",
        description:
          "Built a web and mobile coaching platform where safety managers review AI-flagged events, assign coaching modules, and track driver improvement over time.",
        keyDeliverables: [
          "Driver safety score with weekly trend reporting",
          "Video review tool with annotation and coaching notes",
          "Automated coaching assignment based on behaviour patterns",
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "AWS S3"],
      },
    ],
    ctaHeadline: "Make your fleet safer with AI",
    ctaText:
      "Our AI safety engineering team builds computer vision and telematics platforms that protect drivers, reduce accidents, and lower insurance costs.",
    ctaButtonText: "Discuss fleet safety AI",
  },
  {
    id: "8",
    slug: "ai-native-supply-chain-platform-american-manufacturing",
    title: "AI-native supply chain platform rewiring American manufacturing",
    summary:
      "Built an AI-native supply chain orchestration platform from the ground up for a US manufacturing consortium, unifying procurement, production, and logistics in a single pane of glass.",
    industry: "Manufacturing",
    tags: ["AI Studio", "Backend", "Data Studio", "Front-end"],
    technologies: ["Python", "React", "Kubernetes", "Snowflake", "Kafka"],
    industriesList: ["Manufacturing", "Procurement"],
    servicesList: ["Platform Engineering", "Supply Chain AI", "Data Integration"],
    solutionsList: ["Procurement Intelligence", "Production Scheduling AI", "Logistics Optimisation"],
    aiTools: ["GPT-4 for RFQ analysis", "Reinforcement Learning scheduler", "Custom NLP"],
    image: "/our-work/webp-format-images/AI-native supply chain platform rewiring American manufacturing.webp",
    outcomesHighlights: [
      "Procurement cycle time reduced from 14 days to 2 days",
      "Production schedule adherence improved from 71% to 94%",
      "Logistics cost savings of $8.7M in year one",
      "Platform integrated 140+ supplier EDI feeds",
      "Used by 1,200+ procurement and operations staff daily",
    ],
    overview:
      "Engineered an AI-native supply chain command center that gives American manufacturers real-time visibility and intelligent automation across procurement, production, and last-mile logistics.",
    solutionsSections: [
      {
        title: "Procurement Intelligence",
        description:
          "Used GPT-4 and custom NLP to automate RFQ parsing, supplier scoring, and contract risk analysis — turning a 14-day procurement cycle into a 48-hour workflow.",
        keyDeliverables: [
          "GPT-4 powered RFQ analysis and auto-response drafting",
          "Supplier risk scoring from financial, news, and performance data",
          "Contract clause extraction and red-flag detection",
        ],
        technologies: ["GPT-4", "Python", "LangChain", "PostgreSQL"],
      },
      {
        title: "Production Scheduling AI",
        description:
          "Deployed a reinforcement learning scheduler that optimises production sequences across 12 factories, balancing demand signals, material availability, and machine capacity in real time.",
        keyDeliverables: [
          "RL scheduler with multi-plant constraint solving",
          "Real-time MES integration for machine availability data",
          "What-if scenario planning tool for operations teams",
        ],
        technologies: ["Ray RLlib", "Python", "Kafka", "React"],
      },
    ],
    ctaHeadline: "Rewire your manufacturing operations with AI",
    ctaText:
      "From procurement to production to last-mile logistics, we build AI-native supply chain platforms that give US manufacturers a competitive edge.",
    ctaButtonText: "Talk to our manufacturing team",
  },
  {
    id: "9",
    slug: "ai-powered-adtech-adage-100-brands",
    title: "AI-powered AdTech trusted by AdAge 100 brands",
    summary:
      "Built a programmatic advertising intelligence platform leveraged by AdAge 100 brands to optimise media spend, creative performance, and audience targeting with AI.",
    industry: "AdTech / MarTech",
    tags: ["AI Studio", "Data Studio", "Backend", "Front-end"],
    technologies: ["Python", "React", "Spark", "BigQuery", "Kafka"],
    industriesList: ["AdTech", "MarTech"],
    servicesList: ["Audience Intelligence", "Creative Optimisation AI", "Media Mix Modelling"],
    solutionsList: ["Programmatic Bidding AI", "Creative Performance Scoring", "Unified Attribution"],
    aiTools: ["Custom Bidding ML", "Computer Vision for Creative Scoring", "MMM Models"],
    image: "/our-work/webp-format-images/AI-powered AdTech trusted by AdAge 100 brands.webp",
    outcomesHighlights: [
      "ROAS improved by 41% across AdAge 100 client campaigns",
      "Creative fatigue detection reduced wasted spend by $2.3M",
      "Audience lookalike models delivered 3.7x CTR vs control",
      "Unified attribution model reduced CPA by 29%",
      "Platform manages $500M+ in annual media spend",
    ],
    overview:
      "Engineered the AI engine powering programmatic advertising for some of the world's most recognised brands — from real-time bidding intelligence to creative performance scoring and unified attribution.",
    solutionsSections: [
      {
        title: "Programmatic Bidding AI",
        description:
          "Built a custom bidding ML model that evaluates every impression opportunity in real time, predicting conversion probability and calculating the optimal bid price to maximise ROAS within budget constraints.",
        keyDeliverables: [
          "Sub-100ms bid price inference using LightGBM",
          "Real-time budget pacing and frequency capping engine",
          "Multi-channel bid shading across DSPs",
        ],
        technologies: ["LightGBM", "Python", "Kafka", "Redis"],
      },
      {
        title: "Creative Intelligence & Attribution",
        description:
          "Used computer vision and NLP to score creative assets for predicted performance, detect fatigue, and recommend refresh cycles — combined with a unified multi-touch attribution model.",
        keyDeliverables: [
          "CV model scoring 12 creative quality dimensions",
          "Creative fatigue detection with automated alerts",
          "Shapley-value based multi-touch attribution",
        ],
        technologies: ["PyTorch", "BigQuery", "dbt", "Looker"],
      },
    ],
    ctaHeadline: "Supercharge your AdTech with AI",
    ctaText:
      "From programmatic bidding to creative intelligence, we build AI-powered AdTech platforms that deliver measurable ROAS improvements for world-class brands.",
    ctaButtonText: "Talk to our AdTech team",
  },
  {
    id: "10",
    slug: "ai-powered-customer-communications-uber-motorola",
    title: "AI-powered customer communications platform leveraged by Uber and Motorola",
    summary:
      "Built a hyper-personalised customer communications platform used by Uber and Motorola to orchestrate omnichannel messaging at billions of touchpoints with AI-driven personalisation.",
    industry: "MarTech / SaaS",
    tags: ["AI Studio", "Backend", "Front-end"],
    technologies: ["Python", "React", "Kafka", "Redis", "AWS"],
    industriesList: ["MarTech", "SaaS"],
    servicesList: ["Omnichannel Orchestration", "AI Personalisation", "Platform Engineering"],
    solutionsList: ["Send-time Optimisation", "Content Personalisation AI", "Journey Orchestration"],
    aiTools: ["GPT-4 for content personalisation", "Custom send-time ML", "Segmentation AI"],
    image: "/our-work/webp-format-images/AI-powered customer communications platform leveraged by Uber and Motorola.webp",
    outcomesHighlights: [
      "Email open rates improved by 47% with AI send-time optimisation",
      "Push notification CTR up 62% with personalised content",
      "Platform sends 2B+ messages per month across channels",
      "Churn prediction model flagged at-risk users 30 days in advance",
      "Uber reduced support ticket volume by 31% via proactive comms",
    ],
    overview:
      "Engineered an enterprise-grade communications intelligence platform that orchestrates billions of personalised messages across email, push, SMS, and in-app channels — trusted by global brands like Uber and Motorola.",
    solutionsSections: [
      {
        title: "AI Personalisation Engine",
        description:
          "Built a GPT-4 powered content personalisation layer that dynamically generates and adapts message copy, subject lines, and offers based on real-time user context and segment signals.",
        keyDeliverables: [
          "Subject line optimiser with 47% open rate improvement",
          "Dynamic content blocks with user-level personalisation",
          "A/B test orchestration with multi-armed bandit selection",
        ],
        technologies: ["GPT-4", "Python", "Redis", "AWS Lambda"],
      },
      {
        title: "Omnichannel Journey Orchestration",
        description:
          "Designed a visual journey builder and real-time orchestration engine that routes users across email, push, SMS, and in-app channels based on behaviour triggers and ML-predicted engagement probability.",
        keyDeliverables: [
          "Real-time event-driven journey engine on Kafka",
          "Send-time optimisation ML model per user",
          "Cross-channel frequency capping and fatigue management",
        ],
        technologies: ["Kafka", "React", "Node.js", "PostgreSQL"],
      },
    ],
    ctaHeadline: "Build communications that truly connect",
    ctaText:
      "Our platform engineering team builds AI-powered communications platforms that personalise every touchpoint and drive measurable engagement at scale.",
    ctaButtonText: "Talk about your comms platform",
  },
  {
    id: "11",
    slug: "ai-powered-social-search-engine-techcrunch",
    title: "AI-powered social search engine featured by TechCrunch and Business Insider — Diem",
    summary:
      "Built the core search and recommendation engine for Diem, an AI-powered social search platform featured by TechCrunch and Business Insider, connecting people around shared interests and questions.",
    industry: "Consumer Internet",
    tags: ["AI Studio", "Backend", "Front-end", "Mobile"],
    technologies: ["Python", "React Native", "ElasticSearch", "AWS", "Redis"],
    industriesList: ["Consumer Internet", "Social Media"],
    servicesList: ["Search Engineering", "AI Recommendations", "Mobile App Development"],
    solutionsList: ["Semantic Search", "Interest Graph Engine", "Community Matching AI"],
    aiTools: ["BERT Embeddings", "ElasticSearch ML", "Custom Recommendation GNN"],
    image: "/our-work/webp-format-images/AI-powered-social-search-engine-featured-by-TechCrunch-and-Business-Insider-Diem-768x539.webp",
    outcomesHighlights: [
      "Featured on TechCrunch and Business Insider at launch",
      "Search result relevance score improved 3.2x over keyword baseline",
      "Community match acceptance rate of 74%",
      "App Store rating of 4.8/5 with 50K+ reviews",
      "10M+ searches processed in the first 60 days",
    ],
    overview:
      "Engineered the search and social graph infrastructure behind Diem — a TechCrunch-featured AI search app that connects people around questions, shared interests, and community knowledge.",
    solutionsSections: [
      {
        title: "Semantic Search Engine",
        description:
          "Built a BERT-powered semantic search layer on top of ElasticSearch that understands intent, not just keywords — delivering contextually relevant results for conversational, question-based queries.",
        keyDeliverables: [
          "Fine-tuned BERT model for social search queries",
          "Dense retrieval with FAISS vector indexing",
          "Real-time indexing of user-generated content",
        ],
        technologies: ["BERT", "FAISS", "ElasticSearch", "Python"],
      },
      {
        title: "Community Matching & Social Graph",
        description:
          "Designed an interest graph and GNN-based community matching engine that suggests communities, topics, and people based on a user's search history and engagement patterns.",
        keyDeliverables: [
          "Interest graph built on Neo4j",
          "GNN community recommendation model",
          "Real-time feed ranking with contextual signals",
        ],
        technologies: ["Neo4j", "PyTorch Geometric", "React Native", "AWS"],
      },
    ],
    ctaHeadline: "Build the search experience your users love",
    ctaText:
      "From semantic search to social graph engines, we build AI-powered discovery platforms that create genuine value for users and fuel organic growth.",
    ctaButtonText: "Talk about your search product",
  },
  {
    id: "12",
    slug: "agritech-platform-world-economic-forum",
    title: "AgriTech platform featured by the World Economic Forum",
    summary:
      "Built an AI-powered AgriTech platform featured by the World Economic Forum, helping smallholder farmers in emerging markets increase crop yields by 34% using satellite imagery and ML.",
    industry: "AgriTech",
    tags: ["AI Studio", "Mobile", "Backend", "Data Studio"],
    technologies: ["Python", "React Native", "TensorFlow", "AWS", "PostgreSQL"],
    industriesList: ["AgriTech", "Development / Impact"],
    servicesList: ["Satellite Data Analysis", "Mobile App Development", "ML Crop Modelling"],
    solutionsList: ["Crop Health Monitoring", "Yield Prediction ML", "Farmer Advisory App"],
    aiTools: ["TensorFlow", "Sentinel-2 Satellite Data", "Custom Crop Disease CNN"],
    image: "/our-work/webp-format-images/AgriTech platform featured by the World Economic Forum.webp",
    outcomesHighlights: [
      "Featured by the World Economic Forum as a top AgriTech innovation",
      "Average crop yield increased by 34% for participating farmers",
      "Disease detection model achieves 93% accuracy",
      "500,000+ smallholder farmers onboarded in 18 months",
      "Platform covers 2.4M hectares of farmland across 6 countries",
    ],
    overview:
      "Engineered a satellite-powered AgriTech platform that gives smallholder farmers in emerging markets access to AI crop monitoring, disease detection, and personalised agronomic advice — recognised by the World Economic Forum.",
    solutionsSections: [
      {
        title: "Satellite Crop Health Monitoring",
        description:
          "Integrated Sentinel-2 satellite imagery with a custom CNN model to monitor crop health, detect disease outbreaks, and track growth stages at field level — updated every 5 days.",
        keyDeliverables: [
          "CNN model for crop disease detection (93% accuracy)",
          "NDVI and EVI vegetation index time-series analysis",
          "Field boundary detection and parcel mapping",
        ],
        technologies: ["TensorFlow", "Sentinel Hub API", "AWS S3", "GDAL"],
      },
      {
        title: "Farmer Advisory Mobile App",
        description:
          "Built a multilingual React Native app that delivers personalised agronomic recommendations, weather alerts, and market prices to farmers via SMS and app notifications — accessible on feature phones.",
        keyDeliverables: [
          "React Native app with offline-first architecture",
          "SMS fallback for feature phone users",
          "Localised content in 8 languages",
        ],
        technologies: ["React Native", "Node.js", "Twilio", "PostgreSQL"],
      },
    ],
    ctaHeadline: "Build technology that creates real-world impact",
    ctaText:
      "Our team builds AI and mobile platforms for AgriTech, ClimateTech, and impact-driven organisations that solve complex problems at scale.",
    ctaButtonText: "Discuss your impact project",
  },
  {
    id: "13",
    slug: "custom-ar-solutions-fortune-500",
    title: "Custom AR solutions powering Fortune 500 leaders",
    summary:
      "Delivered custom augmented reality solutions for Fortune 500 manufacturers and retailers, enabling immersive product visualisation, remote expert assist, and AR-guided assembly.",
    industry: "AR / Enterprise",
    tags: ["Front-end", "Mobile", "AI Studio"],
    technologies: ["Unity", "ARKit", "ARCore", "C#", "WebXR"],
    industriesList: ["Manufacturing", "Retail", "Enterprise"],
    servicesList: ["AR Development", "3D Visualisation", "Remote Expert Assist"],
    solutionsList: ["AR Product Visualisation", "Remote Expert Assist", "AR-guided Assembly"],
    aiTools: ["SLAM tracking", "Object Recognition AI", "Spatial Audio AI"],
    image: "/our-work/webp-format-images/Custom AR solutions powering Fortune 500 leaders.webp",
    outcomesHighlights: [
      "Assembly error rate reduced by 67% with AR-guided workflows",
      "Remote expert assist cut travel costs by $1.8M annually",
      "Product visualisation increased e-commerce conversion by 28%",
      "3 Fortune 500 manufacturers deployed AR across 18 factory floors",
      "AR assembly guides used 40,000+ times per month",
    ],
    overview:
      "Built enterprise-grade AR solutions across manufacturing, retail, and field service — from AR-guided assembly instructions on the factory floor to immersive 3D product visualisation for e-commerce.",
    solutionsSections: [
      {
        title: "AR-Guided Assembly",
        description:
          "Built a Unity-based AR application that overlays step-by-step assembly instructions onto physical components using marker and markerless tracking — deployed on HoloLens and iPad.",
        keyDeliverables: [
          "Unity AR app with HoloLens and iPad support",
          "Markerless tracking with spatial anchors",
          "Real-time progress tracking and error detection",
        ],
        technologies: ["Unity", "HoloLens SDK", "ARKit", "C#"],
      },
      {
        title: "AR Product Visualisation for Retail",
        description:
          "Created a WebXR product visualisation experience for a Fortune 500 retailer's e-commerce site, allowing shoppers to place true-to-scale 3D product models in their own space.",
        keyDeliverables: [
          "WebXR viewer with 1,500+ 3D product models",
          "Real-time surface detection and occlusion",
          "Add-to-cart integration with e-commerce platform",
        ],
        technologies: ["WebXR", "Three.js", "Shopify API", "AWS CloudFront"],
      },
    ],
    ctaHeadline: "Bring your products to life with AR",
    ctaText:
      "Our AR engineering team builds immersive experiences for manufacturing, retail, and field service that deliver measurable ROI.",
    ctaButtonText: "Explore AR solutions",
  },
  {
    id: "14",
    slug: "digital-media-solutions-webby-winner",
    title: "Digital media solutions for a Webby's winner",
    summary:
      "Engineered a high-performance digital media platform for a Webby Award-winning publisher, supporting 80M+ monthly visitors with personalised content, video streaming, and ad monetisation.",
    industry: "Digital Media",
    tags: ["Front-end", "Backend", "Data Studio"],
    technologies: ["React", "Node.js", "AWS CloudFront", "Kafka", "PostgreSQL"],
    industriesList: ["Digital Media", "Publishing"],
    servicesList: ["Platform Engineering", "Video Streaming", "Ad Monetisation"],
    solutionsList: ["Content Personalisation", "Video CDN Infrastructure", "Programmatic Ad Stack"],
    aiTools: ["Content recommendation ML", "Paywall propensity model", "Video quality AI"],
    image: "/our-work/webp-format-images/Digital media solutions for a Webby's winner.webp",
    outcomesHighlights: [
      "Platform supports 80M+ monthly visitors at 99.99% uptime",
      "Content recommendation engine increased pages-per-session by 2.4x",
      "Video stream start time reduced from 4.2s to 0.8s",
      "Ad revenue increased 37% with header bidding implementation",
      "Subscriber churn reduced by 22% with AI paywall personalisation",
    ],
    overview:
      "Built the technical foundation of a Webby Award-winning digital media brand — from high-performance content delivery and video streaming to AI-powered personalisation and programmatic ad monetisation.",
    solutionsSections: [
      {
        title: "Content Platform & Personalisation",
        description:
          "Engineered a headless CMS architecture with a React frontend and ML-powered content recommendation engine that serves personalised article feeds to 80M+ monthly readers.",
        keyDeliverables: [
          "Headless CMS with GraphQL API",
          "Collaborative filtering recommendation engine",
          "A/B testing framework for headline and image optimisation",
        ],
        technologies: ["React", "GraphQL", "Contentful", "Python ML"],
      },
      {
        title: "Video Infrastructure & Ad Tech",
        description:
          "Built a multi-CDN video delivery infrastructure and implemented a full programmatic ad stack with header bidding across 10+ demand partners, maximising yield per impression.",
        keyDeliverables: [
          "Multi-CDN video delivery with adaptive bitrate streaming",
          "Prebid.js header bidding with 10+ demand partners",
          "Custom VAST/VPAID video ad server",
        ],
        technologies: ["AWS CloudFront", "HLS.js", "Prebid.js", "Node.js"],
      },
    ],
    ctaHeadline: "Build media experiences that win awards",
    ctaText:
      "Our media platform engineering team builds high-performance, personalised content and video experiences that grow audiences and monetise effectively.",
    ctaButtonText: "Talk about your media platform",
  },
  {
    id: "15",
    slug: "enhancing-flagship-product-most-funded-startup-france",
    title: "Enhancing the flagship product of the most-funded startup in France",
    summary:
      "Augmented the core product team of France's most-funded startup, delivering key feature releases, platform scalability improvements, and a design system overhaul across web and mobile.",
    industry: "FinTech / SaaS",
    tags: ["Front-end", "Backend", "Design Studio"],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    industriesList: ["FinTech", "SaaS"],
    servicesList: ["Product Engineering", "Design System", "Platform Scalability"],
    solutionsList: ["Feature Development", "Design System", "Performance Optimisation"],
    aiTools: ["GitHub Copilot", "Figma AI", "Custom A/B testing ML"],
    image: "/our-work/webp-format-images/Enhancing the flagship product of the most-funded startup in France.webp",
    outcomesHighlights: [
      "12 major feature releases delivered in 8 months",
      "Design system adopted across 6 product squads",
      "Page load time reduced by 58% after performance overhaul",
      "API response time improved from 850ms to 120ms (P99)",
      "Mobile crash rate reduced from 2.1% to 0.08%",
    ],
    overview:
      "Embedded a senior engineering team inside France's most-funded startup to accelerate feature delivery, scale their platform architecture, and ship a unified design system across web and mobile products.",
    solutionsSections: [
      {
        title: "Product Feature Delivery",
        description:
          "Integrated our engineers directly into the client's agile squads to deliver 12 major feature releases — including a new onboarding flow, a payment module, and a real-time analytics dashboard.",
        keyDeliverables: [
          "New user onboarding flow with 31% higher completion rate",
          "Multi-currency payment module with Stripe integration",
          "Real-time analytics dashboard using WebSocket data feeds",
        ],
        technologies: ["React", "TypeScript", "Node.js", "Stripe", "WebSocket"],
      },
      {
        title: "Design System & Performance",
        description:
          "Audited and rebuilt the component library into a unified design system, and conducted a full performance overhaul that cut load times by 58% and API latency by 86%.",
        keyDeliverables: [
          "Design system with 120+ Figma + React components",
          "Bundle size reduced from 4.2MB to 1.1MB",
          "API query optimisation and database indexing strategy",
        ],
        technologies: ["Storybook", "Figma", "Vite", "PostgreSQL"],
      },
    ],
    ctaHeadline: "Accelerate your product with an embedded engineering team",
    ctaText:
      "We integrate seamlessly with your existing squads to accelerate feature delivery, improve platform performance, and scale your product with confidence.",
    ctaButtonText: "Talk about team augmentation",
  },
  {
    id: "16",
    slug: "food-delivery-solutions-4-million-daily-orders",
    title: "Food delivery solutions scaling to 4 million daily orders",
    summary:
      "Engineered the order management, dispatch optimisation, and real-time tracking systems for a food delivery platform that scaled from 100K to 4M daily orders in 14 months.",
    industry: "FoodTech / On-demand",
    tags: ["Backend", "Mobile", "Data Studio"],
    technologies: ["Go", "React Native", "Kafka", "Redis", "PostgreSQL"],
    industriesList: ["FoodTech", "On-demand Delivery"],
    servicesList: ["Order Management System", "Dispatch Optimisation", "Real-time Tracking"],
    solutionsList: ["Dispatch AI", "Real-time Order Tracking", "Fleet Routing Engine"],
    aiTools: ["Dispatch Optimisation RL", "ETA Prediction ML", "Demand Forecasting"],
    image: "/our-work/webp-format-images/Food delivery solutions scaling to 4 million daily orders.webp",
    outcomesHighlights: [
      "Scaled from 100K to 4M daily orders in 14 months",
      "Average delivery ETA prediction accuracy of 94%",
      "Dispatch algorithm reduced avg delivery time by 11 minutes",
      "System handles 50,000 concurrent orders at peak",
      "Driver app rating improved from 3.1 to 4.7 stars",
    ],
    overview:
      "Built the technical backbone of a hyper-growth food delivery platform — from intelligent dispatch and routing to real-time order tracking — enabling a 40x scale-up without a single major outage.",
    solutionsSections: [
      {
        title: "Intelligent Dispatch Engine",
        description:
          "Designed a reinforcement learning dispatch optimizer that assigns delivery riders to orders in real time, balancing ETA, rider proximity, restaurant readiness, and multi-order batching.",
        keyDeliverables: [
          "RL dispatch model reducing avg delivery time by 11 min",
          "Multi-order batching algorithm with 23% efficiency gain",
          "Real-time restaurant wait time prediction",
        ],
        technologies: ["Go", "Ray RLlib", "Kafka", "Redis"],
      },
      {
        title: "Real-time Tracking & Driver App",
        description:
          "Built a WebSocket-powered real-time tracking system and redesigned the driver app to reduce missed pickups, improve driver satisfaction, and provide customers with live GPS tracking.",
        keyDeliverables: [
          "Sub-second GPS position updates via WebSocket",
          "React Native driver app with route guidance",
          "Customer tracking page with live ETA countdown",
        ],
        technologies: ["WebSocket", "React Native", "Google Maps API", "Node.js"],
      },
    ],
    ctaHeadline: "Scale your on-demand platform to millions",
    ctaText:
      "Our backend and mobile engineering team has scaled on-demand delivery platforms from startup to enterprise — we can do the same for you.",
    ctaButtonText: "Talk about scaling your platform",
  },
  {
    id: "17",
    slug: "cancer-research-platform-indisgogo-to-full-featured",
    title: "From an IndieGoGo MVP to a full-featured cancer research platform",
    summary:
      "Transformed a crowd-funded cancer research MVP into a HIPAA-compliant, full-featured platform enabling collaboration between researchers, clinicians, and patients across 40+ institutions.",
    industry: "HealthTech / Research",
    tags: ["Backend", "Front-end", "Data Studio"],
    technologies: ["React", "Python", "PostgreSQL", "AWS", "FHIR"],
    industriesList: ["HealthTech", "Life Sciences"],
    servicesList: ["Platform Engineering", "HIPAA Compliance", "Data Integration"],
    solutionsList: ["Research Collaboration Platform", "Patient Data Integration", "Trial Matching Engine"],
    aiTools: ["NLP for clinical notes", "Trial matching ML", "Genomic data analysis pipeline"],
    image: "/our-work/webp-format-images/From an IndieGoGo MVP to a full-featured cancer research platform.webp",
    outcomesHighlights: [
      "Platform adopted by 40+ research institutions in 12 months",
      "Full HIPAA compliance achieved and audited",
      "Clinical trial matching engine connected 3,200+ patients to trials",
      "Research dataset grew from 500 to 180,000 patient records",
      "Published findings contributed to 12 peer-reviewed papers",
    ],
    overview:
      "Scaled a crowd-funded cancer research idea into a HIPAA-compliant, multi-institution research platform — with patient data integration, clinical trial matching, and collaborative research tools used by researchers across 40+ hospitals.",
    solutionsSections: [
      {
        title: "HIPAA-Compliant Platform Architecture",
        description:
          "Re-architected the IndieGoGo MVP into a HIPAA-compliant cloud platform with end-to-end encryption, role-based access control, full audit logging, and PHI data segmentation.",
        keyDeliverables: [
          "HIPAA-compliant AWS infrastructure with BAA",
          "End-to-end AES-256 encryption for PHI data",
          "Role-based access with MFA and audit logging",
        ],
        technologies: ["AWS", "PostgreSQL", "HashiCorp Vault", "Python"],
      },
      {
        title: "Trial Matching & Data Integration",
        description:
          "Built an NLP-powered clinical trial matching engine that ingests FHIR patient records and matches patients to eligible trials based on eligibility criteria, genetic markers, and disease stage.",
        keyDeliverables: [
          "FHIR R4 patient data ingestion pipeline",
          "NLP eligibility criteria parser for trial matching",
          "Researcher collaboration workspace with version-controlled datasets",
        ],
        technologies: ["FHIR", "Python NLP", "Elasticsearch", "React"],
      },
    ],
    ctaHeadline: "Build healthcare technology that saves lives",
    ctaText:
      "Our HealthTech engineering team builds HIPAA-compliant platforms, clinical data pipelines, and AI tools that accelerate medical research and improve patient outcomes.",
    ctaButtonText: "Talk to our HealthTech team",
  },
  {
    id: "18",
    slug: "funny-or-die-mobile-app-emmy-winning-brand",
    title: "Funny or Die mobile app revamp for an Emmy-winning brand",
    summary:
      "Revamped the Funny or Die mobile app for an Emmy-winning comedy brand, delivering a redesigned video experience, content personalisation, and social sharing features that tripled engagement.",
    industry: "Entertainment / Media",
    tags: ["Mobile", "Front-end", "Design Studio"],
    technologies: ["React Native", "Node.js", "AWS", "Redis", "Fastly"],
    industriesList: ["Entertainment", "Digital Media"],
    servicesList: ["Mobile App Revamp", "Video Platform", "UX/UI Design"],
    solutionsList: ["Video Player Redesign", "Content Personalisation", "Social Sharing Engine"],
    aiTools: ["Content recommendation ML", "Video quality optimisation"],
    image: "/our-work/webp-format-images/Funny or Die mobile app revamp for an Emmy-winning brand Comment end.webp",
    outcomesHighlights: [
      "Daily active users tripled within 90 days of relaunch",
      "Average session duration increased from 3.2 min to 9.7 min",
      "App Store rating improved from 2.9 to 4.6 stars",
      "Video start time reduced from 3.8s to 0.6s",
      "Social shares increased 4.2x with new share UX",
    ],
    overview:
      "Completely revamped the Funny or Die mobile app for an Emmy-winning comedy brand — delivering a stunning new video experience, personalised content feeds, and viral social sharing that tripled daily engagement.",
    solutionsSections: [
      {
        title: "Video Experience Redesign",
        description:
          "Rebuilt the video player from the ground up with adaptive bitrate streaming, pre-loading, and a swipe-to-next interaction that keeps users watching with minimal friction.",
        keyDeliverables: [
          "HLS adaptive bitrate player with pre-loading",
          "Swipe-to-next video with edge-preloading",
          "Picture-in-picture support for iOS and Android",
        ],
        technologies: ["React Native", "HLS.js", "Fastly CDN", "AWS MediaConvert"],
      },
      {
        title: "Personalisation & Social Sharing",
        description:
          "Implemented a collaborative filtering recommendation engine that surfaces content based on watch history and explicit ratings, paired with a redesigned share sheet optimised for social virality.",
        keyDeliverables: [
          "Real-time collaborative filtering feed personalisation",
          "Custom share sheet with preview card generation",
          "Deep-link routing for shared content",
        ],
        technologies: ["Python ML", "Node.js", "Redis", "Branch.io"],
      },
    ],
    ctaHeadline: "Revamp your mobile app with a team that ships",
    ctaText:
      "Our mobile engineering and design team delivers app revamps that improve ratings, boost engagement, and create experiences users love.",
    ctaButtonText: "Start your app revamp",
  },
  {
    id: "19",
    slug: "hotspot-cover-insurtech-high-risk-travel",
    title: "Hotspot Cover InsurTech solutions for high-risk travel",
    summary:
      "Built an InsurTech platform offering real-time, location-based travel insurance for high-risk destinations — leveraging AI risk scoring and blockchain policy issuance.",
    industry: "InsurTech",
    tags: ["Backend", "Mobile", "AI Studio"],
    technologies: ["Node.js", "React Native", "AWS", "Ethereum", "Python"],
    industriesList: ["InsurTech", "Travel"],
    servicesList: ["Risk Scoring AI", "Blockchain Policy Issuance", "Mobile App"],
    solutionsList: ["AI Risk Scoring", "Smart Contract Policies", "Real-time Coverage"],
    aiTools: ["Geopolitical risk ML", "Claims fraud detection", "Dynamic pricing AI"],
    image: "/our-work/webp-format-images/Hotspot Cover InsurTech solutions for high-risk travel Comment end.webp",
    outcomesHighlights: [
      "Policy issuance time reduced from 48 hours to 90 seconds",
      "AI risk scoring covers 196 countries with live geopolitical signals",
      "Fraud detection model reduced fraudulent claims by 61%",
      "Dynamic pricing engine adjusts premiums in real time by location",
      "Blockchain policies audited and compliant with Lloyd's standards",
    ],
    overview:
      "Engineered a real-time InsurTech platform for high-risk travel insurance — with AI-driven risk scoring, dynamic premium pricing, and blockchain smart contract policy issuance that reduced policy time from 48 hours to 90 seconds.",
    solutionsSections: [
      {
        title: "AI Risk Scoring & Dynamic Pricing",
        description:
          "Built an ML risk engine that aggregates geopolitical news, historical claims data, and real-time travel advisories to calculate destination risk scores and dynamic premium pricing per trip.",
        keyDeliverables: [
          "NLP pipeline ingesting 500+ geopolitical news sources daily",
          "Risk score model covering 196 countries",
          "Dynamic premium calculator with real-time adjustment",
        ],
        technologies: ["Python", "NLP", "AWS Lambda", "PostgreSQL"],
      },
      {
        title: "Blockchain Policy Issuance",
        description:
          "Implemented Ethereum smart contracts for policy issuance and automated claims processing — making policies immutable, auditable, and eligible for Lloyd's of London acceptance.",
        keyDeliverables: [
          "Solidity smart contracts for policy lifecycle management",
          "Automated parametric claims payout on trigger events",
          "Lloyd's-compliant audit trail and reporting",
        ],
        technologies: ["Ethereum", "Solidity", "Web3.js", "IPFS"],
      },
    ],
    ctaHeadline: "Modernise insurance with AI and blockchain",
    ctaText:
      "Our InsurTech engineering team builds AI-powered risk scoring, dynamic pricing, and blockchain policy platforms that redefine what insurance can be.",
    ctaButtonText: "Talk to our InsurTech team",
  },
  {
    id: "20",
    slug: "kantox-web-app-bnp-paribas-subsidiary",
    title: "Kantox web app bringing new clients to a BNP Paribas subsidiary",
    summary:
      "Built and optimised the Kantox web application for a BNP Paribas subsidiary, delivering a new onboarding flow and FX management dashboard that increased new client conversions by 43%.",
    industry: "FinTech / FX",
    tags: ["Front-end", "Backend", "Design Studio"],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    industriesList: ["FinTech", "FX Management"],
    servicesList: ["Web App Development", "Onboarding Optimisation", "FX Dashboard"],
    solutionsList: ["Client Onboarding Flow", "FX Management Dashboard", "API Integration"],
    aiTools: ["A/B testing ML", "Conversion optimisation", "FX rate prediction display"],
    image: "/our-work/webp-format-images/Kantox web app bringing new clients to a BNP Paribas subsidiary.webp",
    outcomesHighlights: [
      "New client conversions increased by 43% after onboarding redesign",
      "Onboarding completion time reduced from 22 minutes to 7 minutes",
      "FX dashboard daily active usage up 67%",
      "API integration with 12 banking partners completed in 6 weeks",
      "Platform processes €2B+ in FX transactions monthly",
    ],
    overview:
      "Redesigned and rebuilt the Kantox web application for BNP Paribas's FX management subsidiary — delivering a streamlined onboarding flow and a powerful FX dashboard that drove a 43% increase in new client conversions.",
    solutionsSections: [
      {
        title: "Client Onboarding Redesign",
        description:
          "Redesigned the multi-step onboarding flow using user research and A/B testing, reducing friction and dropping completion time from 22 minutes to 7 minutes with a 43% lift in conversions.",
        keyDeliverables: [
          "User research and journey mapping sessions",
          "Progressive disclosure onboarding flow (7 steps → 3 steps)",
          "Real-time validation and smart form auto-fill",
        ],
        technologies: ["React", "TypeScript", "Zod validation", "Figma"],
      },
      {
        title: "FX Management Dashboard",
        description:
          "Built a real-time FX management dashboard with live rate feeds, hedging position tracking, trade history, and automated report generation for treasury teams.",
        keyDeliverables: [
          "Real-time FX rate WebSocket feed with charting",
          "Hedging position tracker with P&L visualisation",
          "Automated PDF treasury reports with scheduling",
        ],
        technologies: ["React", "D3.js", "WebSocket", "Node.js"],
      },
    ],
    ctaHeadline: "Build FinTech products that convert and scale",
    ctaText:
      "Our FinTech engineering team builds web applications that combine beautiful UX with rock-solid financial infrastructure — optimised for conversion and compliance.",
    ctaButtonText: "Talk about your FinTech product",
  },
  {
    id: "21",
    slug: "modern-ux-ui-hr-screening-platform",
    title: "Modern UX/UI for a fast-growing HR screening platform",
    summary:
      "Delivered a complete UX/UI overhaul for a fast-growing HR screening SaaS, reducing time-to-screen from 4 days to 6 hours and improving recruiter NPS by 42 points.",
    industry: "HRTech / SaaS",
    tags: ["Design Studio", "Front-end", "Backend"],
    technologies: ["React", "TypeScript", "Figma", "Node.js", "PostgreSQL"],
    industriesList: ["HRTech", "SaaS"],
    servicesList: ["UX/UI Design", "Frontend Development", "Product Strategy"],
    solutionsList: ["UX Research & Design", "Design System", "Frontend Rebuild"],
    aiTools: ["Figma AI", "Heatmap analysis", "A/B testing ML"],
    image: "/our-work/webp-format-images/Modern UXUI for a fast-growing HR screening platform.webp",
    outcomesHighlights: [
      "Recruiter NPS improved by 42 points after redesign",
      "Time-to-screen reduced from 4 days to 6 hours",
      "Task completion rate for screening workflows up 71%",
      "Onboarding drop-off rate reduced by 54%",
      "Design system adopted by 8 product squads within 6 months",
    ],
    overview:
      "Redesigned an HR screening platform from the ground up — combining deep UX research, a new design system, and a rebuilt React frontend to transform a clunky tool into a recruiter's favourite product.",
    solutionsSections: [
      {
        title: "UX Research & Design",
        description:
          "Conducted 40+ recruiter interviews and usability sessions to identify friction points, then redesigned the entire screening workflow using progressive disclosure and contextual guidance.",
        keyDeliverables: [
          "40 recruiter interviews and usability testing sessions",
          "Journey map and friction point prioritisation",
          "High-fidelity Figma prototypes for all core flows",
        ],
        technologies: ["Figma", "Hotjar", "Maze", "Notion"],
      },
      {
        title: "Design System & Frontend Build",
        description:
          "Built a React-based design system with 90+ components and rebuilt the entire frontend, reducing load time by 62% and introducing real-time collaboration features for hiring teams.",
        keyDeliverables: [
          "Design system with 90+ Figma + React components",
          "Full frontend rebuild with React + TypeScript",
          "Real-time collaborative screening notes with WebSocket",
        ],
        technologies: ["React", "TypeScript", "Storybook", "WebSocket"],
      },
    ],
    ctaHeadline: "Transform your product's UX and win users",
    ctaText:
      "Our design and engineering team combines deep UX research with pixel-perfect execution to build product experiences that users love and that drive business results.",
    ctaButtonText: "Start your UX transformation",
  },
  {
    id: "22",
    slug: "hipaa-compliant-platform-monarch-master-injectors",
    title: "Modern, HIPAA-compliant platform for Monarch Master Injectors",
    summary:
      "Built a HIPAA-compliant practice management and patient portal platform for Monarch Master Injectors, streamlining appointments, treatment records, and consent management.",
    industry: "HealthTech / MedSpa",
    tags: ["Backend", "Front-end", "Design Studio"],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Twilio"],
    industriesList: ["HealthTech", "MedSpa / Aesthetics"],
    servicesList: ["HIPAA-Compliant Platform", "Patient Portal", "Practice Management"],
    solutionsList: ["Appointment Management", "Digital Consent", "Treatment Records"],
    aiTools: ["Appointment scheduling AI", "Treatment recommendation assist"],
    image: "/our-work/webp-format-images/Modern, HIPAA-compliant platform for Monarch Master Injectors.webp",
    outcomesHighlights: [
      "Full HIPAA compliance achieved and independently audited",
      "Appointment no-show rate reduced from 18% to 4%",
      "Digital consent process cut admin time by 3 hours per day",
      "Patient satisfaction score increased from 3.8 to 4.9/5",
      "Platform adopted by 45+ Monarch locations nationwide",
    ],
    overview:
      "Built a beautiful, HIPAA-compliant practice management platform for Monarch Master Injectors — replacing paper-based workflows with digital consent, smart scheduling, and comprehensive treatment records.",
    solutionsSections: [
      {
        title: "HIPAA-Compliant Infrastructure",
        description:
          "Architected a fully HIPAA-compliant AWS environment with end-to-end PHI encryption, role-based access, BAA agreements, and automated audit logging across all patient data interactions.",
        keyDeliverables: [
          "HIPAA-compliant AWS architecture with BAA",
          "AES-256 encryption for all PHI at rest and in transit",
          "Automated access audit logs with SIEM integration",
        ],
        technologies: ["AWS", "HashiCorp Vault", "PostgreSQL", "Datadog"],
      },
      {
        title: "Patient Portal & Digital Consent",
        description:
          "Built a patient-facing portal for appointment booking, digital consent form completion, treatment history review, and post-treatment care instructions — accessible on any device.",
        keyDeliverables: [
          "Mobile-first patient portal with biometric login",
          "Digital consent with e-signature and photo documentation",
          "Automated SMS/email appointment reminders via Twilio",
        ],
        technologies: ["React", "Twilio", "DocuSign API", "AWS S3"],
      },
    ],
    ctaHeadline: "Build healthcare software that's secure and beautiful",
    ctaText:
      "Our HealthTech team builds HIPAA-compliant platforms that modernise clinical workflows, improve patient experience, and free up your staff to focus on care.",
    ctaButtonText: "Talk to our HealthTech team",
  },
  {
    id: "23",
    slug: "omnichannel-martech-ecommerce-giant",
    title: "Omnichannel MarTech for an e-commerce giant",
    summary:
      "Built an omnichannel marketing technology stack for a top-10 e-commerce platform, unifying customer data across web, app, email, and in-store touchpoints to deliver hyper-personalised experiences.",
    industry: "E-commerce / MarTech",
    tags: ["Data Studio", "Backend", "AI Studio"],
    technologies: ["Python", "Kafka", "Snowflake", "dbt", "React"],
    industriesList: ["E-commerce", "MarTech"],
    servicesList: ["Customer Data Platform", "Personalisation Engine", "Campaign Orchestration"],
    solutionsList: ["Unified Customer Data Platform", "Real-time Personalisation", "Attribution Modelling"],
    aiTools: ["Recommendation ML", "Propensity modelling", "LTV prediction"],
    image: "/our-work/webp-format-images/Omnichannel MarTech for an e-commerce giant.webp",
    outcomesHighlights: [
      "Customer 360 profiles unified across 8 channels and 120M users",
      "Personalisation engine lifted email revenue by 34%",
      "Cart abandonment recovery rate improved by 28%",
      "Marketing attribution accuracy improved by 51%",
      "Real-time segmentation latency reduced from 4 hours to 90 seconds",
    ],
    overview:
      "Engineered a unified Customer Data Platform and personalisation engine for a top-10 e-commerce player — combining real-time event streaming, ML propensity models, and omnichannel campaign orchestration to deliver measurable revenue uplift.",
    solutionsSections: [
      {
        title: "Unified Customer Data Platform",
        description:
          "Built a real-time CDP that stitches customer identity across web, app, email, and in-store touchpoints — creating unified Customer 360 profiles for 120M users with sub-90-second segment refresh.",
        keyDeliverables: [
          "Identity resolution across 8 channels",
          "Real-time event streaming via Kafka",
          "Snowflake data warehouse with dbt transformation layer",
        ],
        technologies: ["Kafka", "Snowflake", "dbt", "Python"],
      },
      {
        title: "Personalisation & Attribution",
        description:
          "Deployed ML propensity models for purchase intent, churn risk, and LTV prediction — powering real-time content personalisation and a Shapley-value attribution model across all marketing channels.",
        keyDeliverables: [
          "Purchase propensity and churn risk ML models",
          "Real-time API for personalised product recommendations",
          "Multi-touch attribution with Shapley values",
        ],
        technologies: ["Python ML", "Redis", "Looker", "React"],
      },
    ],
    ctaHeadline: "Unify your customer data and personalise at scale",
    ctaText:
      "Our data and AI engineering team builds Customer Data Platforms and personalisation engines that turn fragmented data into measurable revenue growth.",
    ctaButtonText: "Talk about your MarTech stack",
  },
  {
    id: "24",
    slug: "qa-cybersecurity-platform-nbc-crn",
    title: "QA for a cybersecurity platform featured by NBC and CRN",
    summary:
      "Delivered comprehensive QA engineering for a cybersecurity SaaS featured by NBC and CRN, implementing automated test coverage that reduced release cycle time by 68%.",
    industry: "CyberSecurity / SaaS",
    tags: ["Quality Studio", "Backend"],
    technologies: ["Selenium", "Cypress", "Python", "OWASP ZAP", "Jenkins"],
    industriesList: ["CyberSecurity", "SaaS"],
    servicesList: ["QA Automation", "Security Testing", "Performance Testing"],
    solutionsList: ["Automated Test Suite", "Penetration Testing", "Load Testing"],
    aiTools: ["AI-powered test generation", "Anomaly detection in test results"],
    image: "/our-work/webp-format-images/QA for a cybersecurity platform featured by NBC and CRN.webp",
    outcomesHighlights: [
      "Test coverage increased from 34% to 96% in 3 months",
      "Release cycle time reduced from 3 weeks to 4 days",
      "Zero critical security vulnerabilities in production post-engagement",
      "Load testing validated platform at 100K concurrent users",
      "Bug escape rate to production reduced by 91%",
    ],
    overview:
      "Built a comprehensive QA automation and security testing practice for a NBC and CRN-featured cybersecurity platform — taking code coverage from 34% to 96% and cutting release cycles by 68%.",
    solutionsSections: [
      {
        title: "QA Automation Framework",
        description:
          "Designed and implemented a full-stack test automation framework covering UI, API, integration, and contract testing — integrated into the CI/CD pipeline for gate-based quality enforcement.",
        keyDeliverables: [
          "Cypress UI test suite with 3,200+ test cases",
          "REST API contract testing with Pact",
          "CI/CD integration with automatic PR gates",
        ],
        technologies: ["Cypress", "Pact", "Jenkins", "GitHub Actions"],
      },
      {
        title: "Security & Performance Testing",
        description:
          "Conducted OWASP Top 10 penetration testing, SAST/DAST scanning, and JMeter load testing to validate security posture and platform resilience at 100K concurrent users.",
        keyDeliverables: [
          "OWASP ZAP DAST scanning in CI/CD pipeline",
          "Burp Suite manual penetration testing report",
          "JMeter load tests validating 100K concurrent users",
        ],
        technologies: ["OWASP ZAP", "Burp Suite", "JMeter", "Python"],
      },
    ],
    ctaHeadline: "Ship with confidence — build quality in from the start",
    ctaText:
      "Our QA engineering team builds automated test frameworks, security testing practices, and performance validation that let you ship faster with fewer bugs.",
    ctaButtonText: "Talk to our QA team",
  },
  {
    id: "25",
    slug: "reporting-analytics-starbucks-obey",
    title: "Reporting, analytics, and performance management solutions vendor to Starbucks and Obey",
    summary:
      "Built a SaaS analytics and performance management platform used by Starbucks and Obey to centralise KPI reporting, automate dashboards, and surface AI-driven operational insights.",
    industry: "Analytics / SaaS",
    tags: ["Data Studio", "Backend", "Front-end"],
    technologies: ["React", "Python", "Snowflake", "dbt", "Looker"],
    industriesList: ["Retail", "Analytics SaaS"],
    servicesList: ["Analytics Platform", "KPI Reporting", "Performance Management"],
    solutionsList: ["Unified Data Warehouse", "Self-serve Analytics", "AI Insights Engine"],
    aiTools: ["Anomaly detection", "Forecasting ML", "NLP insights generation"],
    image: "/our-work/webp-format-images/Reporting, analytics, and performance management solutions vendor to Starbucks and Obey.webp",
    outcomesHighlights: [
      "Platform trusted by Starbucks and Obey for KPI reporting",
      "Report generation time reduced from 3 days to 4 hours",
      "Self-serve analytics adopted by 800+ business users",
      "AI anomaly detection flagged $3.2M in operational inefficiencies",
      "Data freshness improved from daily to real-time (< 60 seconds)",
    ],
    overview:
      "Built an enterprise analytics and performance management SaaS platform trusted by global brands like Starbucks and Obey — delivering unified data warehousing, self-serve dashboards, and AI-powered operational insights.",
    solutionsSections: [
      {
        title: "Data Warehouse & ETL",
        description:
          "Built a Snowflake-based data warehouse with dbt transformation models that unified sales, operations, and marketing data from 30+ source systems into a single analytics-ready layer.",
        keyDeliverables: [
          "Snowflake multi-tenant data warehouse architecture",
          "dbt transformation layer with 200+ models",
          "Real-time CDC ingestion from 30+ source systems",
        ],
        technologies: ["Snowflake", "dbt", "Fivetran", "Kafka"],
      },
      {
        title: "Self-serve Analytics & AI Insights",
        description:
          "Built a React-based analytics UI on top of Looker that enables business users to build their own dashboards, combined with an AI engine that proactively surfaces anomalies and recommends actions.",
        keyDeliverables: [
          "Self-serve dashboard builder with 60+ chart types",
          "AI anomaly detection with Slack/email alerting",
          "NLP-generated insight summaries for executives",
        ],
        technologies: ["React", "Looker", "Python ML", "Slack API"],
      },
    ],
    ctaHeadline: "Make your data your competitive advantage",
    ctaText:
      "Our data engineering and analytics team builds platforms that turn raw data into actionable insights — trusted by some of the world's most recognised brands.",
    ctaButtonText: "Talk about your analytics platform",
  },
  {
    id: "26",
    slug: "scaling-enterprise-automation-airbus-xerox",
    title: "Scaling enterprise automation for an Airbus and Xerox vendor — Redwood",
    summary:
      "Scaled the Redwood enterprise automation platform serving Airbus and Xerox, delivering performance optimisations and new automation capabilities that increased throughput by 3x.",
    industry: "Enterprise Automation / SaaS",
    tags: ["Backend", "Data Studio", "Quality Studio"],
    technologies: ["Java", "Kubernetes", "PostgreSQL", "Kafka", "AWS"],
    industriesList: ["Enterprise Automation", "Aerospace", "Manufacturing"],
    servicesList: ["Platform Scaling", "Performance Engineering", "New Feature Development"],
    solutionsList: ["Job Scheduler Optimisation", "Multi-tenant Architecture", "API Modernisation"],
    aiTools: ["Predictive job scheduling ML", "Anomaly detection in workflows"],
    image: "/our-work/webp-format-images/Scaling-enterprise-automation-for-an-Airbus-and-Xerox-vendor-Redwood-768x539.webp",
    outcomesHighlights: [
      "Platform throughput increased 3x without additional infrastructure",
      "Job scheduling latency reduced from 8 seconds to 400ms",
      "Multi-tenant isolation improved — zero cross-tenant data leaks",
      "API modernisation enabled 15 new enterprise integrations",
      "Trusted by Airbus and Xerox for mission-critical automation",
    ],
    overview:
      "Scaled and modernised the Redwood enterprise automation platform trusted by Airbus and Xerox — tripling throughput, reducing scheduling latency, and enabling new enterprise integrations without adding infrastructure.",
    solutionsSections: [
      {
        title: "Performance Engineering",
        description:
          "Conducted deep performance profiling of the Redwood scheduler and execution engine, identifying and resolving bottlenecks that were limiting throughput — achieving a 3x improvement without scaling infrastructure.",
        keyDeliverables: [
          "JVM profiling and GC tuning for scheduler process",
          "Database query optimisation (200+ slow queries fixed)",
          "Async execution engine refactor for parallel job dispatch",
        ],
        technologies: ["Java", "JProfiler", "PostgreSQL", "Redis"],
      },
      {
        title: "Multi-tenant Architecture & API Modernisation",
        description:
          "Redesigned the multi-tenant isolation model to eliminate cross-tenant data risks, and modernised the REST API to enable 15 new enterprise integrations with Airbus and Xerox systems.",
        keyDeliverables: [
          "Row-level tenant isolation with schema migration",
          "REST API versioning and OpenAPI documentation",
          "15 new enterprise connector integrations",
        ],
        technologies: ["Java", "Spring Boot", "Kubernetes", "Kafka"],
      },
    ],
    ctaHeadline: "Scale your enterprise platform with confidence",
    ctaText:
      "Our platform engineering team specialises in scaling enterprise SaaS platforms — improving performance, reliability, and extensibility for mission-critical workloads.",
    ctaButtonText: "Talk about platform scaling",
  },
  {
    id: "27",
    slug: "starz-ml-data-solutions-premium-tv",
    title: "Starz ML and data solutions for a premium TV network",
    summary:
      "Delivered ML-powered content recommendations and subscriber analytics for Starz, a premium TV network, increasing content engagement and reducing subscriber churn by 19%.",
    industry: "Media & Entertainment",
    tags: ["AI Studio", "Data Studio", "Backend"],
    technologies: ["Python", "Spark", "Snowflake", "AWS", "React"],
    industriesList: ["Media & Entertainment", "Streaming"],
    servicesList: ["Content Recommendation ML", "Subscriber Analytics", "Data Engineering"],
    solutionsList: ["Recommendation Engine", "Churn Prediction", "Content Analytics"],
    aiTools: ["Two-tower neural recommendation", "Churn prediction ML", "Content embedding models"],
    image: "/our-work/webp-format-images/Starz ML and data solutions for a premium TV network.webp",
    outcomesHighlights: [
      "Subscriber churn reduced by 19% in 9 months",
      "Content recommendation CTR improved by 44%",
      "Watch hours per subscriber increased by 2.8 hours per week",
      "Content analytics dashboards adopted by 150+ editorial staff",
      "A/B testing framework validated 23 ML experiments in 6 months",
    ],
    overview:
      "Built the ML backbone of Starz's content strategy — from personalised recommendation engines to subscriber churn prediction and content performance analytics trusted by 150+ editorial decision-makers.",
    solutionsSections: [
      {
        title: "Content Recommendation Engine",
        description:
          "Designed and deployed a two-tower neural network recommendation system that serves personalised content carousels to Starz subscribers based on viewing history, genre preferences, and time-of-day context.",
        keyDeliverables: [
          "Two-tower neural network with 48-hour retraining cycle",
          "Context-aware recommendations (time of day, device, mood)",
          "A/B testing framework for carousel position experiments",
        ],
        technologies: ["TensorFlow", "AWS SageMaker", "MLflow", "Spark"],
      },
      {
        title: "Subscriber Analytics & Churn Prediction",
        description:
          "Built an XGBoost churn prediction model that flags at-risk subscribers 30 days before cancellation, combined with a self-serve content analytics platform for editorial teams.",
        keyDeliverables: [
          "XGBoost churn model with 87% precision at 30-day horizon",
          "Automated churn intervention campaign triggers",
          "Content performance analytics dashboards for editorial",
        ],
        technologies: ["XGBoost", "Snowflake", "dbt", "Looker"],
      },
    ],
    ctaHeadline: "Grow subscribers and reduce churn with ML",
    ctaText:
      "Our media ML team builds recommendation engines, churn prediction models, and content analytics platforms that drive measurable subscriber growth.",
    ctaButtonText: "Talk about your streaming ML strategy",
  },
  {
    id: "28",
    slug: "streamlining-energy-management-agentic-ai-clearcurrent",
    title: "Streamlining energy management with agentic AI — ClearCurrent",
    summary:
      "Built an agentic AI energy management platform for ClearCurrent that autonomously optimises building energy consumption, reducing energy costs by 31% across a 200-building portfolio.",
    industry: "EnergyTech / CleanTech",
    tags: ["AI Studio", "Backend", "Data Studio"],
    technologies: ["Python", "LangChain", "AWS", "TimescaleDB", "React"],
    industriesList: ["EnergyTech", "CleanTech", "PropTech"],
    servicesList: ["Agentic AI", "IoT Data Engineering", "Energy Analytics"],
    solutionsList: ["Autonomous Energy Optimisation", "Demand Response Automation", "Carbon Reporting"],
    aiTools: ["LangChain Agents", "Reinforcement Learning", "Forecasting ML"],
    image: "/our-work/webp-format-images/Streamlining-energy-management-with-agentic-AI-ClearCurrent-768x539.webp",
    outcomesHighlights: [
      "Energy costs reduced by 31% across 200-building portfolio",
      "Demand response automation generated $1.4M in grid credits",
      "Carbon emissions reporting automated for ESG compliance",
      "AI agents manage 50+ building control systems autonomously",
      "Platform processes 20TB of IoT sensor data monthly",
    ],
    overview:
      "Engineered an agentic AI platform for ClearCurrent that autonomously monitors, analyses, and optimises energy consumption across a 200-building commercial portfolio — cutting costs, automating demand response, and generating ESG-compliant carbon reports.",
    solutionsSections: [
      {
        title: "Agentic Energy Optimisation",
        description:
          "Built a LangChain-powered agentic system that autonomously analyses building sensor data, identifies energy waste patterns, and executes HVAC and lighting adjustments via BMS API integrations.",
        keyDeliverables: [
          "LangChain agent orchestration for multi-building control",
          "BMS API integrations for 12 control system vendors",
          "Autonomous HVAC and lighting optimisation workflows",
        ],
        technologies: ["LangChain", "Python", "AWS Lambda", "BMS APIs"],
      },
      {
        title: "IoT Data Platform & Carbon Reporting",
        description:
          "Designed a high-throughput IoT data platform ingesting 20TB of sensor data monthly, with a carbon emissions calculation engine that generates ESG-compliant reports automatically.",
        keyDeliverables: [
          "TimescaleDB hypertables for time-series sensor data",
          "Carbon intensity calculation per building, per hour",
          "Automated ESG carbon report generation (PDF/API)",
        ],
        technologies: ["TimescaleDB", "Python", "React", "AWS IoT Core"],
      },
    ],
    ctaHeadline: "Make your buildings intelligent with agentic AI",
    ctaText:
      "Our agentic AI engineering team builds autonomous energy management platforms that reduce costs, automate demand response, and generate ESG-compliant reporting.",
    ctaButtonText: "Talk about agentic AI for energy",
  },
  {
    id: "29",
    slug: "sureify-insurtech-saas-allstate-nationwide",
    title: "Sureify InsurTech SaaS trusted by Allstate and Nationwide",
    summary:
      "Built and scaled the Sureify InsurTech SaaS platform — a digital insurance engagement tool trusted by Allstate and Nationwide to modernise policyholder experiences across web and mobile.",
    industry: "InsurTech / SaaS",
    tags: ["Front-end", "Backend", "Mobile"],
    technologies: ["React", "React Native", "Node.js", "PostgreSQL", "AWS"],
    industriesList: ["InsurTech", "SaaS"],
    servicesList: ["Platform Engineering", "Mobile App Development", "API Integration"],
    solutionsList: ["Policyholder Portal", "Mobile App", "Insurance Carrier Integrations"],
    aiTools: ["Engagement scoring ML", "Churn prediction", "Personalised nudge engine"],
    image: "/our-work/webp-format-images/Sureify InsurTech SaaS trusted by Allstate and Nationwide.webp",
    outcomesHighlights: [
      "Platform trusted by Allstate and Nationwide for policyholder engagement",
      "Policyholder digital adoption rate increased from 22% to 71%",
      "Policy renewal rate improved by 18% with digital engagement nudges",
      "Mobile app rated 4.7/5 on App Store and Google Play",
      "API integrations with 8 major insurance carrier systems",
    ],
    overview:
      "Engineered and scaled the Sureify InsurTech SaaS platform — transforming analog policyholder relationships into digital-first engagement experiences trusted by Allstate and Nationwide.",
    solutionsSections: [
      {
        title: "Policyholder Digital Portal",
        description:
          "Built a responsive web portal and React Native mobile app that gives policyholders self-serve access to policies, claims, payments, and documents — with personalised engagement nudges that drive renewal.",
        keyDeliverables: [
          "React web portal with SSO and MFA",
          "React Native mobile app for iOS and Android",
          "Personalised engagement nudge engine based on policy events",
        ],
        technologies: ["React", "React Native", "Node.js", "Auth0"],
      },
      {
        title: "Insurance Carrier Integrations",
        description:
          "Built a flexible integration layer that connects Sureify to 8 major insurance carrier policy admin systems via APIs and file-based feeds, normalising data into a unified schema.",
        keyDeliverables: [
          "API connectors for 8 carrier policy admin systems",
          "ETL pipeline for ACORD file-based feeds",
          "Unified data model for cross-carrier policy normalisation",
        ],
        technologies: ["Node.js", "PostgreSQL", "AWS Lambda", "ACORD"],
      },
    ],
    ctaHeadline: "Modernise your insurance platform for the digital age",
    ctaText:
      "Our InsurTech engineering team builds digital engagement platforms that transform legacy insurance relationships into modern, mobile-first policyholder experiences.",
    ctaButtonText: "Talk to our InsurTech team",
  },
  {
    id: "30",
    slug: "techstyle-ui-devops-ecommerce-tools",
    title: "TechStyle UI architecture, DevOps, and custom e-commerce tools",
    summary:
      "Delivered UI architecture, DevOps transformation, and custom e-commerce tools for TechStyle Fashion Group — a $700M fashion e-commerce company — enabling a 40% faster release cadence.",
    industry: "E-commerce / Fashion",
    tags: ["Front-end", "Backend", "Quality Studio"],
    technologies: ["React", "Node.js", "Kubernetes", "Jenkins", "PostgreSQL"],
    industriesList: ["E-commerce", "Fashion Retail"],
    servicesList: ["UI Architecture", "DevOps Transformation", "Custom E-commerce Tools"],
    solutionsList: ["Micro-frontend Architecture", "CI/CD Pipeline", "Custom Promotions Engine"],
    aiTools: ["AI product recommendations", "A/B testing ML", "Demand forecasting"],
    image: "/our-work/webp-format-images/TechStyle UI architecture, DevOps, and custom e-commerce tools Comment end.webp",
    outcomesHighlights: [
      "Release cadence improved by 40% with CI/CD transformation",
      "Frontend build time reduced from 22 minutes to 4 minutes",
      "Custom promotions engine handles 500K concurrent promo events",
      "Micro-frontend architecture adopted by 6 independent squads",
      "Deployment failure rate reduced from 8% to 0.3%",
    ],
    overview:
      "Transformed the engineering practices of a $700M fashion e-commerce company — introducing micro-frontend architecture, a fully automated CI/CD pipeline, and a custom promotions engine that enabled a 40% faster release cadence.",
    solutionsSections: [
      {
        title: "Micro-frontend Architecture",
        description:
          "Redesigned TechStyle's monolithic React frontend into a module federation-based micro-frontend architecture, allowing 6 squads to deploy independently without coordination overhead.",
        keyDeliverables: [
          "Module federation setup with 8 micro-frontends",
          "Shared design system and component library",
          "Independent deployment pipelines per squad",
        ],
        technologies: ["React", "Module Federation", "Webpack 5", "Storybook"],
      },
      {
        title: "DevOps & Custom Promotions Engine",
        description:
          "Built a fully automated CI/CD pipeline on Kubernetes with blue-green deployments, and delivered a custom promotions engine capable of handling 500K concurrent promotional events.",
        keyDeliverables: [
          "Kubernetes-based CI/CD with blue-green deployments",
          "Custom promotions rule engine (500K concurrent events)",
          "Automated rollback and deployment health gates",
        ],
        technologies: ["Kubernetes", "Jenkins", "Node.js", "Redis"],
      },
    ],
    ctaHeadline: "Transform your e-commerce engineering at scale",
    ctaText:
      "Our platform and DevOps engineering team builds scalable architectures and automated CI/CD practices that let large e-commerce teams ship faster and with confidence.",
    ctaButtonText: "Talk about your e-commerce platform",
  },
  {
    id: "31",
    slug: "the-banner-ai-data-mobile-subscription-growth",
    title: "The Banner AI, data, and mobile solutions driving subscription growth",
    summary:
      "Delivered AI, data engineering, and mobile app solutions for The Banner — a digital media company — that drove a 67% increase in subscriber conversions and 3x mobile engagement.",
    industry: "Digital Media / Publishing",
    tags: ["AI Studio", "Mobile", "Data Studio"],
    technologies: ["React Native", "Python", "Snowflake", "AWS", "Kafka"],
    industriesList: ["Digital Media", "Publishing"],
    servicesList: ["Mobile App Development", "Subscriber Intelligence", "AI Personalisation"],
    solutionsList: ["Subscription Conversion AI", "Mobile App", "Content Analytics"],
    aiTools: ["Paywall propensity ML", "Content recommendation engine", "LTV prediction"],
    image: "/our-work/webp-format-images/The Banner AI, data, and mobile solutions driving subscription growth.webp",
    outcomesHighlights: [
      "Subscriber conversions increased by 67% with AI paywall personalisation",
      "Mobile daily active users tripled in 12 months",
      "Content recommendation engine increased pages-per-session by 2.1x",
      "Subscriber LTV prediction accuracy of 89%",
      "Churn reduced by 24% with personalised win-back campaigns",
    ],
    overview:
      "Built the AI and data foundation of The Banner's subscription growth strategy — from a paywall propensity model and personalised content recommendations to a redesigned mobile app that tripled daily engagement.",
    solutionsSections: [
      {
        title: "AI Subscription Intelligence",
        description:
          "Trained an XGBoost paywall propensity model that identifies anonymous visitors likely to subscribe, dynamically surfacing conversion prompts at the optimal moment to maximise subscription rates.",
        keyDeliverables: [
          "XGBoost subscriber propensity model (67% lift in conversions)",
          "Dynamic paywall trigger engine based on user behaviour signals",
          "A/B testing framework for offer and messaging experiments",
        ],
        technologies: ["XGBoost", "Python", "AWS Lambda", "Kafka"],
      },
      {
        title: "Mobile App & Content Analytics",
        description:
          "Rebuilt The Banner's mobile app with a personalised content feed, offline reading, and push notification personalisation — paired with a Snowflake-based content analytics platform.",
        keyDeliverables: [
          "React Native app with personalised feed and offline reading",
          "Push notification personalisation with optimal send-time ML",
          "Content performance analytics for editorial teams",
        ],
        technologies: ["React Native", "Snowflake", "dbt", "Looker"],
      },
    ],
    ctaHeadline: "Grow your subscribers with AI",
    ctaText:
      "Our media AI team builds subscription intelligence platforms, personalised content engines, and mobile experiences that drive measurable subscriber growth.",
    ctaButtonText: "Talk about subscription growth AI",
  },
  {
    id: "32",
    slug: "top-ranking-healthcare-agency",
    title: "Top-ranking healthcare agency",
    summary:
      "Built a comprehensive digital platform for a top-ranking healthcare agency, delivering patient acquisition, clinical content SEO, and HIPAA-compliant appointment management.",
    industry: "Healthcare / Digital Agency",
    tags: ["Front-end", "Backend", "Design Studio"],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Twilio"],
    industriesList: ["Healthcare", "Digital Marketing"],
    servicesList: ["Digital Platform", "SEO Engineering", "Patient Acquisition"],
    solutionsList: ["Patient Acquisition Platform", "Clinical Content SEO", "HIPAA-Compliant Booking"],
    aiTools: ["Content recommendation AI", "SEO audit automation", "Patient intent prediction"],
    image: "/our-work/webp-format-images/Top-ranking healthcare agency.webp",
    outcomesHighlights: [
      "Achieved top-3 Google rankings for 120+ healthcare keywords",
      "Patient appointment bookings increased by 3.4x in 12 months",
      "HIPAA-compliant booking system launched in 6 weeks",
      "Bounce rate reduced from 67% to 28% after UX redesign",
      "Content platform manages 2,000+ clinical articles",
    ],
    overview:
      "Built the digital foundation of a top-ranking healthcare agency — from clinical content SEO and patient acquisition to a HIPAA-compliant appointment booking system that tripled new patient volume.",
    solutionsSections: [
      {
        title: "Patient Acquisition & SEO",
        description:
          "Engineered a clinical content platform optimised for Google's EAT signals, combined with a technical SEO audit and implementation that drove top-3 rankings for 120+ high-intent healthcare keywords.",
        keyDeliverables: [
          "Clinical content CMS with structured data markup",
          "Technical SEO audit and Core Web Vitals optimisation",
          "Local SEO optimisation for 45+ clinic locations",
        ],
        technologies: ["React", "Next.js", "Schema.org", "Google Search Console"],
      },
      {
        title: "HIPAA-Compliant Appointment System",
        description:
          "Built a HIPAA-compliant online booking system with real-time clinician availability, insurance verification integration, and automated appointment reminders via SMS and email.",
        keyDeliverables: [
          "Real-time availability calendar with clinician matching",
          "Insurance eligibility verification API integration",
          "Automated SMS/email reminders via Twilio",
        ],
        technologies: ["Node.js", "PostgreSQL", "Twilio", "AWS"],
      },
    ],
    ctaHeadline: "Build healthcare digital presence that ranks and converts",
    ctaText:
      "Our healthcare digital team builds HIPAA-compliant patient acquisition platforms, clinical content SEO strategies, and appointment systems that grow your practice.",
    ctaButtonText: "Talk about your healthcare digital strategy",
  },
  {
    id: "33",
    slug: "ux-ui-revamp-medication-management-platform",
    title: "UX/UI revamp for a leading medication management platform",
    summary:
      "Delivered a complete UX/UI overhaul for a leading medication management SaaS, improving patient adherence rates by 41% and reducing caregiver task time by 3.5 hours per week.",
    industry: "HealthTech / MedTech",
    tags: ["Design Studio", "Front-end", "Mobile"],
    technologies: ["React", "React Native", "Figma", "TypeScript", "AWS"],
    industriesList: ["HealthTech", "MedTech"],
    servicesList: ["UX/UI Design", "Mobile App Redesign", "Accessibility Engineering"],
    solutionsList: ["Patient-facing App Redesign", "Caregiver Dashboard", "Accessibility Compliance"],
    aiTools: ["AI medication reminders personalisation", "Adherence prediction ML"],
    image: "/our-work/webp-format-images/UX-UI revamp for a leading medication management platform.webp",
    outcomesHighlights: [
      "Medication adherence rate improved by 41% in 6 months",
      "Caregiver task completion time reduced by 3.5 hours per week",
      "App Store rating improved from 2.7 to 4.8 stars",
      "WCAG 2.1 AA accessibility compliance achieved",
      "Onboarding drop-off reduced from 58% to 12%",
    ],
    overview:
      "Transformed a clinically powerful but unusable medication management platform into an accessible, delightful experience that patients and caregivers love — driving a 41% improvement in medication adherence.",
    solutionsSections: [
      {
        title: "Patient App Redesign",
        description:
          "Conducted extensive usability research with patients (including elderly and visually impaired users) to redesign the medication tracking experience, achieving WCAG 2.1 AA accessibility compliance.",
        keyDeliverables: [
          "Usability research with 60+ patients across age groups",
          "Full WCAG 2.1 AA accessibility compliance",
          "Simplified medication logging flow (7 taps → 2 taps)",
        ],
        technologies: ["React Native", "Figma", "Accessibility Inspector", "TypeScript"],
      },
      {
        title: "Caregiver Dashboard",
        description:
          "Designed and built a caregiver-facing web dashboard for managing multiple patients' medication schedules, with real-time adherence alerts and one-tap communication with care teams.",
        keyDeliverables: [
          "Multi-patient medication overview dashboard",
          "Real-time adherence alerts with severity scoring",
          "Secure messaging between caregivers and care teams",
        ],
        technologies: ["React", "TypeScript", "WebSocket", "AWS"],
      },
    ],
    ctaHeadline: "Design healthcare products that improve outcomes",
    ctaText:
      "Our HealthTech design and engineering team builds accessible, patient-centred products that improve adherence, reduce caregiver burden, and drive measurable clinical outcomes.",
    ctaButtonText: "Talk about your HealthTech UX",
  },
  {
    id: "34",
    slug: "vmware-aqa-cloud-computing-leader",
    title: "VMware product and AQA solutions for a leader in cloud computing",
    summary:
      "Delivered VMware virtualisation engineering and automated QA solutions for a leading cloud computing vendor, accelerating product delivery and achieving 99.2% automated test coverage.",
    industry: "Cloud Computing / Enterprise",
    tags: ["Quality Studio", "Backend"],
    technologies: ["VMware", "Python", "Selenium", "Jenkins", "Kubernetes"],
    industriesList: ["Cloud Computing", "Enterprise Infrastructure"],
    servicesList: ["VMware Engineering", "AQA Automation", "CI/CD Integration"],
    solutionsList: ["VMware Product Development", "Automated QA Framework", "CI/CD Pipeline"],
    aiTools: ["AI test generation", "Self-healing test automation", "Performance prediction ML"],
    image: "/our-work/webp-format-images/VMware product and AQA solutions for a leader in cloud computing.webp",
    outcomesHighlights: [
      "Automated test coverage reached 99.2% across all VMware products",
      "Release cycle reduced from 6 weeks to 10 days",
      "Self-healing test scripts reduced maintenance effort by 70%",
      "Critical defect escape rate to production: 0%",
      "CI/CD pipeline running 4,000+ automated tests per day",
    ],
    overview:
      "Delivered VMware virtualisation engineering and a fully automated QA practice for a leading cloud computing vendor — achieving 99.2% test coverage, eliminating production defect escapes, and cutting release cycles from 6 weeks to 10 days.",
    solutionsSections: [
      {
        title: "AQA Framework Development",
        description:
          "Built a comprehensive automated QA framework covering UI, API, performance, and VMware infrastructure testing — integrated into the CI/CD pipeline with self-healing capabilities.",
        keyDeliverables: [
          "Selenium + Python test framework with 4,000+ test cases",
          "Self-healing locators reducing maintenance by 70%",
          "Performance regression testing with JMeter baselines",
        ],
        technologies: ["Selenium", "Python", "pytest", "JMeter"],
      },
      {
        title: "VMware Product Engineering",
        description:
          "Contributed senior VMware engineering expertise to product development — building virtualisation features, storage plugins, and network policy management tools for the cloud computing platform.",
        keyDeliverables: [
          "VMware vSphere storage plugin development",
          "Network policy management UI components",
          "API integration with VMware vCenter and NSX",
        ],
        technologies: ["VMware vSphere", "Python", "Go", "Kubernetes"],
      },
    ],
    ctaHeadline: "Accelerate your cloud product with expert engineering",
    ctaText:
      "Our cloud infrastructure and QA engineering teams deliver the expertise needed to ship robust, well-tested cloud products on time and on budget.",
    ctaButtonText: "Talk to our cloud engineering team",
  },
  {
    id: "35",
    slug: "video-conferencing-saas-virgin-atlantic",
    title: "Video conferencing SaaS leveraged by Virgin and the Atlantic",
    summary:
      "Built and scaled a enterprise video conferencing SaaS platform leveraged by Virgin and The Atlantic, supporting HD video, real-time transcription, and AI-powered meeting intelligence.",
    industry: "SaaS / Collaboration",
    tags: ["Backend", "Front-end", "AI Studio"],
    technologies: ["WebRTC", "React", "Node.js", "AWS", "Python"],
    industriesList: ["SaaS", "Enterprise Collaboration"],
    servicesList: ["Video Platform Engineering", "Real-time Transcription", "AI Meeting Intelligence"],
    solutionsList: ["WebRTC Video Engine", "AI Transcription & Summarisation", "Meeting Analytics"],
    aiTools: ["Whisper AI transcription", "GPT-4 meeting summarisation", "Sentiment analysis ML"],
    image: "/our-work/webp-format-images/Video conferencing SaaS leveraged by Virgin and the Atlantic.webp",
    outcomesHighlights: [
      "Platform trusted by Virgin and The Atlantic for enterprise meetings",
      "Supports 10,000+ concurrent HD video sessions",
      "AI meeting summarisation saves users avg 45 minutes per week",
      "Transcription accuracy of 97.3% across 14 languages",
      "Platform scaled from 1K to 50K users in 6 months",
    ],
    overview:
      "Built a WebRTC-powered enterprise video conferencing platform from scratch — complete with HD video at scale, AI transcription in 14 languages, and GPT-4 meeting intelligence trusted by Virgin and The Atlantic.",
    solutionsSections: [
      {
        title: "WebRTC Video Engine",
        description:
          "Architected a WebRTC-based video engine with selective forwarding units (SFUs) on AWS that supports 10,000+ concurrent HD video sessions with adaptive bitrate control and low-latency audio.",
        keyDeliverables: [
          "Mediasoup SFU deployment on AWS ECS",
          "Adaptive bitrate video with network-aware quality switching",
          "Sub-150ms end-to-end audio latency across regions",
        ],
        technologies: ["WebRTC", "Mediasoup", "AWS ECS", "Node.js"],
      },
      {
        title: "AI Transcription & Meeting Intelligence",
        description:
          "Integrated OpenAI Whisper for real-time meeting transcription in 14 languages, combined with GPT-4 to generate action item summaries, decisions, and follow-up emails automatically.",
        keyDeliverables: [
          "Real-time Whisper transcription with speaker diarisation",
          "GPT-4 meeting summary with action items and decisions",
          "Meeting analytics dashboard with talk-time and sentiment metrics",
        ],
        technologies: ["OpenAI Whisper", "GPT-4", "Python", "React"],
      },
    ],
    ctaHeadline: "Build the next generation of collaborative software",
    ctaText:
      "Our real-time platform engineering team builds WebRTC video applications, AI meeting intelligence, and collaboration tools that scale to enterprise demands.",
    ctaButtonText: "Talk about real-time platform engineering",
  },
  {
    id: "36",
    slug: "e-commerce-solutions-halls-culligan-water",
    title: "E-commerce solutions for a water filtration market veteran — Hall's Culligan Water",
    summary:
      "Delivered a modern e-commerce platform and digital transformation for Hall's Culligan Water, a legacy market veteran, enabling online sales, subscription management, and field service scheduling.",
    industry: "E-commerce / Water Services",
    tags: ["Front-end", "Backend", "Design Studio"],
    technologies: ["React", "Node.js", "Shopify", "PostgreSQL", "AWS"],
    industriesList: ["E-commerce", "Water Services / Utilities"],
    servicesList: ["E-commerce Platform", "Subscription Management", "Field Service Integration"],
    solutionsList: ["Custom E-commerce Build", "Subscription & Delivery Management", "Field Service Scheduling"],
    aiTools: ["Product recommendation ML", "Demand forecasting", "Churn prediction"],
    image: "/our-work/webp-format-images/E-commerce-solutions-for-a-water-filtration-market-veteran-Halls-Culligan-Water-768x539.webp",
    outcomesHighlights: [
      "Online revenue increased 4.7x within 18 months of launch",
      "Subscription sign-up rate of 38% of new customers",
      "Field service scheduling efficiency improved by 52%",
      "Cart abandonment reduced from 71% to 29%",
      "Legacy CRM data migrated with 99.98% accuracy",
    ],
    overview:
      "Transformed a legacy water services company into a modern e-commerce business — building a custom Shopify-based platform with subscription management, field service scheduling, and a seamless digital customer experience.",
    solutionsSections: [
      {
        title: "Custom E-commerce Platform",
        description:
          "Built a custom Shopify-based e-commerce storefront with a product configurator, subscription checkout, and account portal — replacing a legacy ordering system with a self-serve digital experience.",
        keyDeliverables: [
          "Custom Shopify theme with product configurator",
          "Recurring subscription checkout with Recharge integration",
          "Customer account portal with order history and management",
        ],
        technologies: ["Shopify", "React", "Liquid", "Recharge"],
      },
      {
        title: "Field Service & Legacy Migration",
        description:
          "Integrated the new e-commerce platform with the field service scheduling system for delivery and installation bookings, and migrated 25 years of customer data from the legacy CRM.",
        keyDeliverables: [
          "Field service scheduling API integration",
          "Legacy CRM data migration (500K+ customer records)",
          "Automated delivery and installation booking workflows",
        ],
        technologies: ["Node.js", "PostgreSQL", "AWS", "REST APIs"],
      },
    ],
    ctaHeadline: "Modernise your business with e-commerce that converts",
    ctaText:
      "Our e-commerce engineering team builds custom platforms, subscription management systems, and legacy migrations that transform traditional businesses into digital-first operations.",
    ctaButtonText: "Talk about your e-commerce transformation",
  },
  {
    id: "37",
    slug: "adulting-sidekick-edtech-ai-startup",
    title: "\"Adulting sidekick\" app for an EdTech AI startup",
    summary:
      "Built an AI-powered \"adulting sidekick\" mobile app for an EdTech startup that teaches young adults essential life skills through personalised microlearning, gamification, and an AI coach.",
    industry: "EdTech / Consumer AI",
    tags: ["AI Studio", "Mobile", "Design Studio"],
    technologies: ["React Native", "Python", "AWS", "OpenAI", "PostgreSQL"],
    industriesList: ["EdTech", "Consumer AI"],
    servicesList: ["AI Coach Development", "Mobile App Development", "Gamification Engine"],
    solutionsList: ["AI Life Skills Coach", "Microlearning Platform", "Gamification & Streaks"],
    aiTools: ["GPT-4 AI coach", "Personalised learning path ML", "Engagement prediction"],
    image: "/our-work/webp-format-images/\"Adulting sidekick\" app for an EdTech AI startup.webp",
    outcomesHighlights: [
      "90-day user retention rate of 68% — 3x industry average",
      "AI coach completed 2M+ learning conversations in year one",
      "App Store rating of 4.9/5 with featured placement",
      "Learning completion rate of 81% vs 12% industry average",
      "Raised $4.2M seed round after launch metrics",
    ],
    overview:
      "Built the full-stack mobile application and AI coach engine for an EdTech startup's \"adulting sidekick\" — an AI-powered life skills companion that teaches young adults budgeting, cooking, and wellness through personalised microlearning and gamification.",
    solutionsSections: [
      {
        title: "AI Life Skills Coach",
        description:
          "Built a GPT-4 powered conversational AI coach that delivers personalised life skills lessons, answers questions, and adapts its teaching style based on the user's learning pace and preferences.",
        keyDeliverables: [
          "GPT-4 fine-tuned on life skills curriculum content",
          "Personalised learning path generation based on goals and progress",
          "Conversational lesson delivery with comprehension checks",
        ],
        technologies: ["GPT-4", "LangChain", "Python", "AWS Lambda"],
      },
      {
        title: "Mobile App & Gamification",
        description:
          "Designed and built a React Native mobile app with a gamified streak system, achievement badges, social leaderboards, and daily challenges that drive habit formation and long-term retention.",
        keyDeliverables: [
          "React Native app with offline-first architecture",
          "Streak system, badges, and social leaderboards",
          "Daily challenge engine with personalised difficulty scaling",
        ],
        technologies: ["React Native", "PostgreSQL", "Redis", "Expo"],
      },
    ],
    ctaHeadline: "Build an AI product that users love and retain",
    ctaText:
      "Our consumer AI and mobile engineering team builds products that combine GPT-4 intelligence with beautiful UX and gamification — driving the engagement and retention metrics that attract investment.",
    ctaButtonText: "Build your AI consumer app",
  },
  {
    id: "38",
    slug: "hipaa-compliant-ai-platform-trovo-health",
    title: "HIPAA-compliant AI platform modernizing clinical support — Trovo Health",
    summary:
      "Built a HIPAA-compliant AI clinical support platform for Trovo Health that automates prior authorisations, clinical documentation, and care coordination — reducing administrative burden by 60%.",
    industry: "HealthTech / Clinical AI",
    tags: ["AI Studio", "Backend", "Front-end"],
    technologies: ["Python", "React", "AWS", "FHIR", "LangChain"],
    industriesList: ["HealthTech", "Clinical AI"],
    servicesList: ["Clinical AI Development", "HIPAA Compliance", "FHIR Integration"],
    solutionsList: ["Prior Auth Automation", "Clinical Documentation AI", "Care Coordination Platform"],
    aiTools: ["GPT-4 for clinical notes", "Prior auth ML classifier", "FHIR NLP pipeline"],
    image: "/our-work/webp-format-images/HIPAA-compliant-AI-platform-modernizing-clinical-support-Trovo-Health-1-1-768x539.webp",
    outcomesHighlights: [
      "Prior authorisation approval time reduced from 5 days to 4 hours",
      "Clinical documentation time per patient reduced by 60%",
      "HIPAA compliance certified by independent audit",
      "AI accuracy for prior auth recommendations: 94.2%",
      "Deployed across 120+ clinical sites in 9 months",
    ],
    overview:
      "Built a HIPAA-compliant AI clinical support platform for Trovo Health that automates the most time-consuming administrative tasks in healthcare — prior authorisations, clinical documentation, and care coordination — freeing clinicians to focus on patients.",
    solutionsSections: [
      {
        title: "Prior Authorization AI",
        description:
          "Built a GPT-4 and ML-powered prior authorisation engine that reads clinical notes and FHIR patient records, determines payer-specific eligibility, and submits pre-populated auth requests automatically.",
        keyDeliverables: [
          "FHIR R4 patient record ingestion and parsing",
          "GPT-4 prior auth letter generation with clinical rationale",
          "ML eligibility classifier with 94.2% accuracy",
        ],
        technologies: ["GPT-4", "LangChain", "FHIR", "Python"],
      },
      {
        title: "Clinical Documentation AI",
        description:
          "Deployed an ambient AI documentation system that listens to patient-clinician conversations, generates structured clinical notes in real time, and syncs to the EHR — reducing documentation time by 60%.",
        keyDeliverables: [
          "Whisper-based ambient transcription (HIPAA-compliant)",
          "GPT-4 SOAP note generation from transcripts",
          "EHR integration with Epic and Cerner APIs",
        ],
        technologies: ["OpenAI Whisper", "GPT-4", "Epic FHIR API", "AWS"],
      },
    ],
    ctaHeadline: "Reduce clinical administrative burden with AI",
    ctaText:
      "Our clinical AI engineering team builds HIPAA-compliant platforms that automate documentation, prior auth, and care coordination — letting clinicians focus on what matters most.",
    ctaButtonText: "Talk to our clinical AI team",
  },
];

export function getWorkBySlug(slug) {
  return ourWorkItems.find((item) => item.slug === slug);
}

export function getAllWorkSlugs() {
  return ourWorkItems.map((item) => item.slug);
}
