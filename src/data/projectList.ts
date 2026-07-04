export const webProjects = [
    {
        name: `MediLab`,
        image: `/assets/medilab.png`,
        features: [
            "Complete end to end healthcare management",
            "Email reminders for appointments",
            "Account recovery with email based OTP",
            "AI disease detection",
            "Medical report analysis",
            "Doctor appointment booking",
        ],
        tech: `ReactJs, TailwindCSS, NodeJs, ExpressJs, MongoDb, Gemini API, BullMQ, Redis, Node Cron, Arcjet, Zustand, Docker`,
        github: `https://github.com/isudiptodas/MediLab-Healthcare_Management_Platform`,
        live: ``,
        deployed: false
    },
    {
        name: `learnfinity`,
        image: `/assets/learnfinity.png`,
        features: [
            "Free tech resources (roadmaps, videos, docs)",
            "Real time collaborative code editor",
            "Web IDE and development playground",
            "AI studio and document studio",
            "DSA visualizer",
            "Discussion community",
            "Notes manager",
            "Dedicated news section"
        ],
        tech: `ReactJs, TailwindCSS, NodeJs, ExpressJs, MongoDb, Socket.io, Gemini API`,
        github: `https://github.com/isudiptodas/LEARNFINITY-Smart_Learning_Platform`,
        live: `https://learnfinity-1.onrender.com/`,
        deployed: true
    },
    {
        name: `downtown.io`,
        image: `/assets/downtown.png`,
        features: [
            "AI trip planner",
            "Location detection and events suggestions",
            "Category wise service availability",
            "Upcoming events"
        ],
        tech: `ReactJs, TailwindCSS, NodeJs, ExpressJs, Gemini API`,
        github: `https://github.com/isudiptodas/DOWNTOWN-Location_Based_Services`,
        live: `https://downtown-io-its3.onrender.com`,
        deployed: true
    },
    {
        name: `companion AI`,
        image: `/assets/companion-ai.png`,
        features: [
            "Open communication with AI voice agents",
            "Mood upliftment with human like conversation"
        ],
        tech: `NextJs, TailwindCSS, Vapi SDK, Gemini API`,
        github: `https://github.com/isudiptodas/COMPANION-AI-Mood_Upliftment`,
        live: `https://companion-ai-gray.vercel.app/`,
        deployed: true
    },
    {
        name: `evaluate AI`,
        image: `/assets/evaluate-ai.png`,
        features: [
            "Mock interview with AI voice agents",
            "Automatic feedback generation",
            "Schedule interview session for future",
            "View past interviews and feedbacks"
        ],
        tech: `NextJs, TailwindCSS, Vapi SDK, Gemini API`,
        github: `https://github.com/isudiptodas/EVALUATE-AI-Mock_Interview`,
        live: `https://evaluate-ai-5peo.vercel.app/`,
        deployed: true
    },
    {
        name: `aurora AI`,
        image: `/assets/aurora-ai.jpg`,
        features: [
            "RAG chatbot for pdf, web url and youtube",
            "Ask queries for external data with accurate context"
        ],
        tech: `NextJs, TailwindCSS, Cohere Embedding Model, Datastax vector Db, MongoDb, Langchain, Gemini API`,
        github: `https://github.com/isudiptodas/AURORA-AI-Rag_Chatbot`,
        live: ``,
        deployed: false
    },
    {
        name: `shield`,
        image: `/assets/shield.png`,
        features: [
            "256 bit encrypted password manager",
            "Account recovery with two step verification",
            "Store usernames, passwords, links securely",
            "Generate random passwords based on parameters"
        ],
        tech: `ReactJs, TailwindCSS, NodeJs, ExpressJs, MongoDb, CryptoJs`,
        github: `https://github.com/isudiptodas/SHIELD-Password_Manager`,
        live: `https://shield-1-w26n.onrender.com/`,
        deployed: true
    },
    {
        name: `technotracer`,
        image: `/assets/technotracer.jpg`,
        features: [
            "Campus items lost and recovery platform",
            "Role based access control",
            "College verification with valid documentation",
            "User verification and account recovery"
        ],
        tech: `ReactJs, TailwindCSS, SpringBoot, MySQL, Gemini API, MySQL, Vapi SDK`,
        github: `https://github.com/isudiptodas/TECHNOTRACER-Campus_Item_Recovery`,
        live: ``,
        deployed: false
    },
    {
        name: `ripple AI`,
        image: `/assets/ripple-ai.png`,
        features: [
            "Anonymous AI chatbot + real time internet data",
            "Online file sharing with 24 hour validity",
            "Dedicated news section",
            "Real time image generation with aspect ratio selection",
            "4 text encryption styles with password protection"
        ],
        tech: `NextJs, TailwindCSS, Gemini API, Supabase, Google Search API, Node Cron`,
        github: `https://github.com/isudiptodas/Ripple-AI-Smart_Search_Explorer`,
        live: `https://ripple-ai-six.vercel.app/`,
        deployed: true
    },
    {
        name: `pixel labs`,
        image: `/assets/pixel-labs.png`,
        features: [
            "Open source react based component UI library",
            "UI element list with wide variety",
            "No heavy dependency or CLI installation needed",
            "Select, copy code & paste in your codebase",
        ],
        tech: `NextJs, TailwindCSS, Framer Motion`,
        github: `https://github.com/isudiptodas/Pixel-Labs-Component_UI_Library`,
        live: `https://pixel-labs-azure.vercel.app/`,
        deployed: true
    },
    {
        name: `OS theme portfolio`,
        image: `/assets/os-theme.jpg`,
        features: [
            "Windows 11 and MacOS inspired theme",
            "Windows and Mac micro interactions",
            "Windows file manager with exact replica of details",
            "MacOS terminal based AI for user queries",
        ],
        tech: `NextJs, TailwindCSS, Gemini API`,
        github: `https://github.com/isudiptodas/OS_Theme_Portfolio`,
        live: `https://os-theme.vercel.app/`,
        deployed: true
    },
]

export const devOpsProjects = [
    {
        id: 1,
        name: `Cloud Native DevOps Architecture`,
        techStack: `MERN, Docker, Jenkins CI/CD, AWS EKS, Prometheus, Grafana`,
        flow: [
            'User pushes code on a specific folder',
            'Automated jenkins ci/cd triggers',
            'Jenkins performs operations (clone, test, image build, security scan, deploy on docker hub, image update on AWS EKS deployment)',
            'Prometheus & Grafana tracks and displays cluster performance'
        ],
        githubLink: `https://github.com/isudiptodas/Cloud-Native-DevOps-Architecture`
    },
    {
        id: 2,
        name: `Task Management Microservice`,
        techStack: `MERN, Docker, Redis, BullMQ, AWS EKS, NGINX Ingress`,
        flow: [
            'Decoupled services (authentication, password recovery, notification, tasks)',
            'Cross service api calling between services',
            'Ingress controller for path based routing to services'
        ],
        githubLink: `https://github.com/isudiptodas/TaskCal-NodeJS_Microservice`
    },
    {
        id: 3,
        name: `GitOps Architecture with ArgoCD`,
        techStack: `MERN, Docker, AWS EKS, Github Actions, ArgoCD`,
        flow: [
            'Implemented git as the source of truth',
            'Added github actions for CI/CD that includes test, build, deploy on registry, update manifest',
            'Pull based mechanism with ArgoCD for cluster state sync',
        ],
        githubLink: `https://github.com/isudiptodas/FormBuilder-ArgoCD_GitOps`
    },
    {
        id: 4,
        name: `Blue-Green deployment with Argo rollouts & Cloudwatch`,
        techStack: `Docker, AWS EKS, Github Actions, ArgoCD, Cloudwatch, NGINX Ingress`,
        flow: [
            'Active service for real time traffic routing and preview service for new version rollouts',
            'Cloudwatch metrics monitoring before promoting new rollouts',
            'CPU & health checks before routing traffic to new version',
            'Old version backup upto 1 hour with last 3 revision history',
        ],
        githubLink: `https://github.com/isudiptodas/Blue-Green-Deployment-Argo-Rollout`
    },
    {
        id: 5,
        name: `End-to-end video transcoding pipeline`,
        techStack: `Docker, ECR, ECS, S3, SQS, FFmpeg`,
        flow: [
            'S3 event notification on input bucket upload',
            'SQS polling for available event messages,
            'Raw video downloads on running container',
            'FFmpeg transcoding into multiple resolutions',
            'All transcoded videos gets uploaded in S3 output bucket',
            'SQS event related to that video gets deleted afterwards'
        ],
        githubLink: `https://github.com/isudiptodas/AWS-Video-Transcoding-Pipeline`
    }
    
]




