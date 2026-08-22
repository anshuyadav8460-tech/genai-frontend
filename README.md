# 🤖 AI-Powered Interview Preparation & Evaluation Platform

An AI-powered platform that helps candidates prepare for job interviews based on their resume, target job description, and self-description.

The platform uses Generative AI to analyze candidate profiles and job requirements and generate personalized interview preparation and evaluation insights.

---

## 🌐 Live Demo

- **Frontend:** [Live Application](https://genai-frontend-d1j4.onrender.com)
- **Backend:** [Backend API](https://genai-backend-poyi.onrender.com)

---

## 🔗 Project Repositories

| Repository | Link |
|---|---|
| Frontend | [genai-frontend](https://github.com/anshuyadav8460-tech/genai-frontend) |
| Backend | [genai-backend](https://github.com/anshuyadav8460-tech/genai-backend) |

---

## 🎯 Problem Statement

Traditional interview preparation is often generic and does not consider the specific requirements of a candidate's target job.

Candidates often prepare from common interview questions without knowing:

- Which skills are most important for the target role
- Which areas of their resume may be questioned
- Which job requirements they should prioritize
- Where their profile may have skill gaps
- How to prepare efficiently for a specific position

This makes interview preparation time-consuming and less effective.

---

## 💡 Our Solution

Our platform combines:

**Resume + Job Description + Self-Description**

and uses Generative AI to analyze the candidate's profile against the target role.

The system generates personalized interview preparation and evaluation insights so candidates can focus on the skills, topics, and areas that matter most for their target position.

---

## 🚀 Project Objectives

The main objective of this project is to build an AI-powered platform that provides personalized interview preparation instead of generic interview guidance.

The platform aims to:

- Analyze candidate resumes
- Understand job requirements
- Analyze candidate self-description
- Identify relevant skills and requirements
- Generate personalized interview preparation
- Provide structured AI-generated evaluation insights
- Help candidates focus their preparation on role-specific requirements

---

## ✨ Key Features

- 📄 Resume upload and analysis
- 💼 Job Description analysis
- 👤 Candidate self-description
- 🤖 Generative AI-powered analysis
- 🎯 Personalized interview preparation
- 📊 Structured interview evaluation report
- 🔍 Role-specific skill and requirement analysis
- 🔐 JWT-based authentication
- 🗄️ MongoDB Atlas integration
- 📱 Responsive user interface
- 🌐 Deployed frontend and backend

---

## 🧠 How It Works

```text
                    ┌──────────────────┐
                    │     Candidate    │
                    └────────┬─────────┘
                             │
                 ┌───────────┼───────────┐
                 │           │           │
                 ▼           ▼           ▼
              Resume    Job Description  Self-Description
                 │           │           │
                 └───────────┼───────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   Backend API   │
                    │ Node + Express  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  Google Gemini  │
                    │   Generative AI │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ AI Analysis &   │
                    │ Interview Report│
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Personalized    │
                    │ Interview Prep  │
                    └─────────────────┘
