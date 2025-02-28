import numpy as np
import tensorflow as tf
load_model = tf.keras.models.load_model
import openai
import os
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

# Set OpenAI API key
# Note to WGU Evaluators: I have included my API key for ease of testing. It should be good for about 5,000 requests. Please do not use it for any other purposes.
openai.api_key = input("Enter openai API key: ")

# Load models
bias_model = load_model(os.path.join(os.getcwd(), "models", "final_model.keras"))
fnrn_model = load_model(os.path.join(os.getcwd(), "models", "final_model_fnrn.keras"))

# Define FastAPI Router
router = APIRouter()

class ArticleRequest(BaseModel):
    text: str

def get_embedding(text):
    """Get embedding for a single text using OpenAI API"""
    try:
        response = openai.Embedding.create(
            model="text-embedding-3-small",
            input=[text]
        )
        return response.data[0].embedding
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error getting embedding: {e}")

def predict_bias(embedding):
    """Predict political bias from embedding"""
    embedding = np.array(embedding).reshape(1, -1)
    predictions = bias_model.predict(embedding)
    predicted_class = np.argmax(predictions, axis=1)[0]
    class_labels = {0: "Left-Wing", 1: "Neutral", 2: "Right-Wing"}
    return {"bias": class_labels[predicted_class], "confidence": float(predictions[0][predicted_class])}

def predict_fake_news(embedding):
    """Predict fake vs real news from embedding"""
    embedding = np.array(embedding).reshape(1, -1)
    predictions = fnrn_model.predict(embedding)
    return {
        "fake_news_confidence": float(predictions[0][0]) if float(predictions[0][0]) > float(predictions[0][1]) else float(predictions[0][1]),
        "classification": "Fake News" if predictions[0][0] > predictions[0][1] else "Real News"
    }

@router.post("/analyze")
async def analyze_article(article: ArticleRequest):
    embedding = get_embedding(article.text)
    bias_result = predict_bias(embedding)
    fake_news_result = predict_fake_news(embedding)
    return {**bias_result, **fake_news_result}
