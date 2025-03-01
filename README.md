# News Bias Analyzer

An AI-powered web application that classifies news articles based on **political bias (Left, Neutral, Right)** and **authenticity (Fake vs. Real News)** using **machine learning and OpenAI's embedding API**. Access demo [here](https://capstone-frontend-1-calculator5329-ethans-projects-becdb732.vercel.app/).

---

## Features
- Classifies articles as **Fake News vs. Real News** and determines **political bias**.
- Utilizes **Deep Neural Networks** for high-accuracy predictions.
- Leverages **OpenAI's embedding API** to process article text.
- Provides a **user-friendly web interface** using **FastAPI (backend) and Next.js (frontend)**.

---

## Prequisites 
 - Windows 10/11
 - Python 3.11.7

---

## 🛠️ How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/news-bias-analyzer.git
cd news-bias-analyzer
```

### 2️⃣ Setup the Backend
```bash
cd backend
python -m venv venv --prompt "news-bias-env"
venv\Scripts\activate
```

### 3️⃣ Install Dependencies
Once the virtual environment is activated, install all dependencies:
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### 4️⃣ Run the Backend
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
You will be prompted to enter an OpenAI API Key. This key is required to process news articles using embeddings.
If you don't have an API key, create one at [OpenAI Platform](https://platform.openai.com/).

### 5️⃣ Setup and Run the Frontend
```bash
cd frontend
npm install
npm run dev
```
Then open http://localhost:3000 in your browser.


Datasets sourced from: [Fake News Detection Dataset from Kaggle](https://www.kaggle.com/datasets/vishakhdapat/fake-news-detection?select=fake_and_real_news.csv) and [Article Bias Prediction Dataset from GitHub](https://github.com/ramybaly/Article-Bias-Prediction)
