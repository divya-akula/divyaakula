---
layout: post
title:  "Decoding Azure AI Foundry: A Guide to Naming & Structure"
byline: "Confusion to clarity"
date:   2025-02-05 08:00:00
author: Divya Akula
categories: OpenAI
tags:
  - Azure
  - Azure AI Foundry
  - Foundry
  - OpenAI
  - GenAI
  - LLMs
cover:  "/assets/posts/2025-02-05-decoding-azure-ai-foundry-naming-structure/HeaderConfusedFoundrryNames.jpeg"
thumbnail: "/assets/images/thumbnails/HeaderConfusedFoundrryNames.jpeg"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---

# Introduction

AI (Artificial Intelligence) has indeed evolved to be one of the critical components of business today, and Azure AI Foundry is one of those powerful platforms which helps ease the complexity related to AI-powered model creation, orchestration as well as monitoring. However, I personally encountered porting issues with nomenclature found in Azure OpenAI services to the Foundry model. This blog is primarily aimed at people in my situation and while this post isn’t comprehensive, I look forward to expanding the scope of this post as I learn more.

## Comprehensive Nomenclature for Azure AI Foundry  

Azure AI Foundry is a powerful platform designed to streamline the development, deployment, and management of AI applications. Here are some key components to understand

### 1. Projects  

Containers for organizing and managing AI development work.  

- **Collaboration**: Promote working together by granting access to shared assets, as well as version control options.
- **Data Management**: Enables safe and secure data set storage and management. 
- **Model Deployment**: Deploy models into production environments without any challenges.
- **Testing**: Model performance and accuracy evaluation tools. 

### 2. Hubs  

Top-level resources that manage multiple projects.  

- **Security Configurations**: Networks and access control policies that are managed.  
- **Compute Resources**: Provisioning regarding development, fine tuning and deployment.
- **Service Connections**: Integrations with other Azure services like **Azure OpenAI** and **Azure AI Services**  

### 3. Management Center  

Governance and management of resources.  

- **Resource Management**: Oversee hubs, projects, and connected resources  
- **Deployment Management**: Monitor and manage model deployments  

### 4. SDK (Software Development Kit)  

A set of tools and libraries for developing AI applications.  

- **Model Access**: Utilize pre-built and custom models  
- **Data Integration**: Connect to various data sources  
- **Service Management**: Manage AI services programmatically  

### 5. Model Catalog  

A repository of pre-built and customizable AI models.  

### 6. Model Training

The process of developing an AI model using data and machine learning techniques. Am not sure if its applicable in this scenario.

### 7.Model Deployment

 The process of making the trained model available for real-world use.

- **Foundation Models**: General-purpose models for various tasks  
- **Task-Specific Models**: Models tailored for specific applications  
- **Industry Models**: Specialized models for different industries  

### 8. Agents

In Azure AI Foundry, agents act like intelligent assistants, each with a specific job to keep AI-powered operations running smoothly. They help automate tasks, manage AI models, and ensure everything works efficiently—almost like a well-organized team where each member plays a crucial role.

**What Do Agents Do?**

- Automate Repetitive Work – Agents handle routine AI tasks like cleaning data, running models, and generating reports so teams can focus on more strategic work.
Keep AI Models Running – They make sure AI models are trained, deployed, and monitored, so businesses can rely on accurate and timely insights.
- Make Smart Decisions – Some agents analyze data in real time and make AI-driven recommendations, improving efficiency and decision-making.
- Ensure Smooth Operations – By managing workflows and scaling AI processes, agents help businesses get the most out of their AI investments.

### 9. Assistant

In Azure AI Foundry, an Assistant is an advanced AI-powered entity designed to interact, assist, and automate tasks for users within the Foundry environment. It acts as an intelligent guide that helps users navigate AI workflows, manage resources, and streamline operations by providing insights, recommendations, and automation capabilities.

### 10. Memory  

Storing and retrieving information from past interactions.This plays vital role while dealing with interactions and costs , so this acts as a key element in planning.

- **Contextual Understanding**: Enhance the contextual awareness of AI agents  

### 11. Responsible AI  

Ensuring AI is developed and used ethically.  I have many sessions explaining this, links below

- **Bias Detection**: Identify and mitigate biases in AI models  
- **Fairness**: Ensure equitable outcomes  
- **Transparency**: Provide clear explanations of AI decisions  
- **Accountability**: Maintain accountability for AI actions  

### 12. Metrics  

The dashboard that contains the details of models and its beautiful and very handy in comparison
![Metrics]({{'/assets/posts/2025-02-05-decoding-azure-ai-foundry-naming-structure/Metrics.png' |prepend: site.baseurl}})

### 13. Security and Compliance  

Ensuring data privacy and regulatory compliance.  

- **Data Encryption**: Protect data at rest and in transit  
- **Access Controls**: Manage user permissions and access  
- **Compliance Certifications**: Adhere to industry standards and regulations  

### 14. Fine Tuning  

Fine-tuning in Azure AI Foundry is like customizing a pre-trained AI model to fit your specific needs. Instead of building an AI from scratch, you take an existing model and teach it with your own data, making it more relevant and accurate for your use case.

### 15. Stored Completions

Stored completions in Azure AI Foundry are saved AI-generated responses that can be reused instead of recalculating the same output. This helps speed up responses, reduce processing time, and keep answers consistent. Imagine asking an AI to summarize clinical trials—if someone else asks later, the AI simply retrieves the stored summary instead of reanalyzing everything.

## Real-World Scenario: Why PharmaCo Uses Multiple Hubs and Projects

To ensure ease of understanding, let’s take the example of a global pharmaceutical giant, PharmaCo, which leverages AI for drug discovery, clinical trials, and patient care. With such a complex and high-stakes operation, organizing its Azure AI Foundry resources effectively isn’t just a best practice—it’s essential. To maintain efficiency, ensure compliance, and scale seamlessly, PharmaCo structures its AI environment into multiple hubs and projects, creating a well-orchestrated system that supports innovation while keeping everything in check.

---

### **📌 PharmaCo’s Azure AI Foundry Structure**  

PharmaCo’s **Azure AI Foundry environment** is divided into **three major hubs**, each catering to a specific function:

#### **🔹 Hub 1: Drug Discovery**  

📌 **Objective:** Use AI to accelerate the identification of new drug candidates.  
📌 **Region:** Located in the **US** to comply with local pharmaceutical regulations.  
📌 **Security:** Strict **access controls** to protect proprietary research data.  
📌 **Resources:** High-performance computing clusters for **AI simulations**.  

#### **📍 Projects within Drug Discovery Hub:**  

- ✅ **Project A – Compound Screening:** AI models analyze **chemical compounds** to identify potential drug candidates.  
- ✅ **Project B – Protein Folding:** AI predicts **protein structures** and their interactions for drug targeting.  
- ✅ **Project C – Toxicity Prediction:** AI estimates **potential toxicity** of new drug compounds based on historical data.  

### **Why Multiple Projects?**  

- 🔹 **Specialization** – Each project focuses on a **distinct stage of drug discovery**.  
- 🔹 **Efficiency** – AI teams can work on **different drug categories in parallel**.  
- 🔹 **Resource Allocation** – AI compute power is distributed based on **project complexity**.  

---

#### **🔹 Hub 2: Clinical Trials**  

📌 **Objective:** Optimize **clinical trial processes and patient recruitment**.  
📌 **Region:** Located in the **EU** to comply with **GDPR and EMA (European Medicines Agency) regulations**.  
📌 **Security:** **Strict patient data privacy policies** to protect medical records.  
📌 **Resources:** AI-driven hospital databases, electronic health records (EHR), and trial monitoring tools.  

#### **📍 Projects within Clinical Trials Hub:**  

- ✅ **Project D – Patient Recruitment:** AI identifies **suitable patients** for clinical trials based on genetic markers and medical history.  
- ✅ **Project E – Trial Monitoring:** AI tracks **real-time patient data**, ensuring trials remain compliant and efficient.  
- ✅ **Project F – Outcome Prediction:** AI predicts **clinical trial results** based on real-world patient data and prior research.  

---

#### **🔹 Hub 3: Patient Care**  

📌 **Objective:** Develop **AI-driven solutions** for **personalized patient care and treatment optimization**.  
📌 **Region:** Located in **APAC** to cater to **regional healthcare providers and regulatory bodies**.  
📌 **Security:** Ensuring **HIPAA and ISO 27001 compliance** for **patient data privacy**.  
📌 **Resources:** AI models integrated with **wearable health devices, hospital systems, and telemedicine platforms**.  

#### **📍 Projects within Patient Care Hub:**  

- ✅ **Project G – Personalized Treatment Plans:** AI tailors **medication and therapy plans** for patients based on their **genetic profiles and lifestyle**.  
- ✅ **Project H – Remote Monitoring:** AI-enabled **wearable devices** track patient vitals and detect early warning signs of health issues.  
- ✅ **Project I – Predictive Analytics:** AI anticipates **potential health risks** by analyzing patient history and real-time vitals.  

### **📌 How Multiple Hubs and Projects helped in this usecase**  

1️⃣ *Operational Efficiency* – *Hubs* help PharmaCo *group related projects*, avoiding fragmentation.  
2️⃣ *Security & Compliance* – Patient and research data is handled *securely* across different *regions* based on local laws.  
3️⃣ *Scalability* – Different hubs allow teams to *scale AI research and clinical applications independently*.  
4️⃣ *Collaboration & Innovation* – AI projects across *different hubs* share insights, *enhancing drug discovery and patient care outcomes*.  

By structuring Azure AI Foundry with multiple hubs and specialized projects, PharmaCo ensures efficiency, compliance, and scalability, ultimately advancing AI-driven healthcare solutions globally.

I will cover more details taking this as primary example for  all the other chapters 🚀  
