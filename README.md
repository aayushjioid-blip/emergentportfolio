# Aayush Rajput - Product Manager Portfolio

A modern, professional portfolio website showcasing 5+ years of product management experience across enterprise clients in BFSI, Life Sciences, E-commerce, and Infrastructure domains.

🔗 **Live Site**: [https://prodmanrajput.com](https://prodmanrajput.com)

## 🎯 About

This portfolio highlights my expertise as a Product Manager & Product Owner with a specialization in AI-augmented workflows. Built with React and modern web technologies, it showcases:

- **4 Major Enterprise Projects**: Mastercard, Abbott Nutrition, Network Rail, US Bank
- **AI/Gen AI Expertise**: Custom AI agents, prompt engineering, 40% productivity improvements
- **Certifications**: SAFe 6.0 POPM, Generative AI Mastermind, Business Analysis, Claude Code
- **95% Sprint Completion Rate** across all projects

## 🚀 Features

- **Modern Design**: Clean, professional SaaS-inspired aesthetic with Poppins typography
- **Responsive**: Fully responsive design optimized for all devices
- **Interactive**: Smooth scroll navigation, expandable project cards, hover animations
- **Performance**: Optimized loading with modern React practices
- **SEO Ready**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **React** 19.0.0
- **Tailwind CSS** 3.4.17
- **Shadcn UI Components**
- **Lucide React Icons**
- **React Router DOM**

### Backend
- **FastAPI** (Python)
- **MongoDB** with Motor (async driver)
- **CORS enabled** for API access

### Deployment
- **Frontend**: Port 3000
- **Backend**: Port 8001
- **Supervisor** for process management

## 📂 Project Structure

```
/app
├── frontend/
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── ui/           # Shadcn UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Timeline.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── mock.js           # Portfolio data
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   └── package.json
├── backend/
│   ├── server.py             # FastAPI application
│   └── requirements.txt
└── README.md
```

## 🎨 Design Features

- **Typography**: Poppins (headings) + Inter (body) for modern, professional look
- **Color Scheme**: 
  - Professional navy and slate grays
  - Electric blue accents
  - Colorful gradient cards (blue, purple, emerald, amber)
- **Animations**: Smooth fade-in, hover-lift effects, scroll-triggered animations
- **Layout**: Clean sections with generous whitespace

## 📊 Portfolio Highlights

### Experience
- **Current**: Product Owner at Cognizant Technology Solutions (Aug 2023 - Present)
- **Previous**: Business Analyst at TCS (Jul 2019 - Aug 2021)

### Key Achievements
- 95%+ sprint goal completion rate
- 30% reduction in requirement-related defects
- 40% reduction in documentation effort through AI integration
- 10K+ users onboarded within 6 months (Abbott project)

### Certifications & Training
- SAFe 6.0 POPM (2024)
- Generative AI Mastermind - Outskill (2024)
- Business Analysis: Functional and NFR (2025)
- Claude Code Beginner Crash Course (2026)
- AI Training: Gen AI Tools, Custom AI Agents, AI Automations, 50+ AI Tools

## 🔧 Local Development

### Prerequisites
- Node.js 16+ and Yarn
- Python 3.8+
- MongoDB

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/aayushjioid-blip/emergentportfolio.git
cd emergentportfolio
```

2. **Install frontend dependencies**
```bash
cd frontend
yarn install
```

3. **Install backend dependencies**
```bash
cd ../backend
pip install -r requirements.txt
```

4. **Set up environment variables**

Create `.env` files:

**frontend/.env**:
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

**backend/.env**:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
```

5. **Run the application**

Start backend:
```bash
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

Start frontend:
```bash
cd frontend
yarn start
```

Visit `http://localhost:3000`

## 📝 Customization

### Update Portfolio Data

Edit `/frontend/src/mock.js` to update:
- Personal information
- Projects and case studies
- Skills and expertise
- Timeline events
- Certifications

### Modify Design

- **Colors**: Update Tailwind config in `tailwind.config.js`
- **Fonts**: Change imports in `index.css`
- **Components**: Edit individual component files in `src/components/`

## 🌐 Deployment

The portfolio is deployed on Emergent platform:
- **Production**: https://prodmanrajput.com
- **Preview**: https://pm-at-scale.preview.emergentagent.com

## 📧 Contact

**Aayush Rajput**
- Email: aayushhrajput@gmail.com
- LinkedIn: [linkedin.com/in/aayushhrajput](https://linkedin.com/in/aayushhrajput)
- Phone: +91-7000393919
- Location: Pune, India

## 📄 License

This project is personal portfolio website. Feel free to use it as inspiration for your own portfolio!

---

**Built with ❤️ using React, Tailwind CSS, and AI-augmented development workflows**
