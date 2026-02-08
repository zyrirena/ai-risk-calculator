# AI Development & Design Risk Calculator

A professional, web-based tool designed to assess and document risks associated with Generative AI systems. This tool utilizes a **Likelihood x Impact** framework aligned with the **NIST AI Risk Management Framework (RMF)** and **ISO 42001** standards.

## 🚀 Live Demo
You can access the live tool here: `https://github.com/zyrirena/ai-risk-calculator.git`

## 🛠 Features
- **Dynamic Risk Scoring:** Calculates risk based on a 1-5 scale across three core pillars: Bias & Fairness, Security & Privacy, and Transparency.
- **Automated Mitigation:** Provides specific governance strategies based on the highest identified risk area.
- **Professional PDF Export:** Generates a clean, timestamped report including a scoring reference table for audits.
- **Responsive UI:** Dark-mode dashboard optimized for both desktop and mobile browsers.

## 📊 Scoring Methodology
This application uses a qualitative 5-point scale:
- **Risk Score = (Likelihood × Impact)**
- **Thresholds:**
  - **0 - 7.9:** Low Risk (Acceptable)
  - **8 - 15.9:** Moderate Risk (Requires Guardrails)
  - **16 - 25:** Critical Risk (Halt Deployment)



[Image of a risk assessment matrix showing likelihood vs impact]


## 📂 Project Structure
- `index.html` - The application structure and UI.
- `style.css` - Custom styles and dashboard theme.
- `script.js` - Logic for risk calculation and PDF generation.

## 📥 Installation & Local Testing
1. Clone the repository:
   ```bash
   git clone [https://github.com/zyrirena/ai-risk-calculator.git](https://github.com/zyrirena/ai-risk-calculator.git)
