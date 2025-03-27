# News Bias Analyzer

An AI-powered web application that classifies news articles based on **political bias (Left, Neutral, Right)** and **authenticity (Fake vs. Real News)** using **machine learning and OpenAI's embedding API**. 

🔗 **Live Site**: [capstone-frontend-1-calculator5329-ethans-projects-becdb732.vercel.app](https://capstone-frontend-1-calculator5329-ethans-projects-becdb732.vercel.app/)

---

## ⚙️ Features

- **Fake vs. Real News Detection**  
  Classifies articles based on authenticity.

- **Political Bias Classification**  
  Detects ideological slant: **Left**, **Neutral**, or **Right**.

- **Embedding-Based NLP**  
  Uses **OpenAI's embedding API** to vectorize article content.

- **Deep Neural Network Model**  
  Backend employs **DNNs** for high-accuracy classification.

- **Interactive Web App**  
  Built with **FastAPI (backend)** and **Next.js (frontend)** for fast, responsive UI.

---

## 🛠 Tech Stack

| Layer        | Tech Stack                         |
|--------------|------------------------------------|
| Frontend     | Next.js, React                     |
| Backend      | FastAPI (Python)                   |
| ML/NLP       | OpenAI Embeddings, DNN (Tensorflow)|
| Hosting      | Vercel, Railway                    |

---

## How to Run Locally

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
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### 4️⃣ Run the Backend
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
Enter your OpenAI API key when prompted. You can get one from [OpenAI Platform](https://platform.openai.com/).

### 5️⃣ Setup and Run the Frontend
```bash
cd frontend
npm install
npm run dev
```
Then open `http://localhost:3000` in your browser.

---

## Acknowledgements

- [Fake News Detection Dataset (Kaggle)](https://www.kaggle.com/datasets/vishakhdapat/fake-news-detection?select=fake_and_real_news.csv)  
- [Article Bias Prediction Dataset (GitHub)](https://github.com/ramybaly/Article-Bias-Prediction)
