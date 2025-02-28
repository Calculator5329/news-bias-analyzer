from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import run_model

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(run_model.router)

@app.get("/")
def read_root():
    return {"message": "FastAPI backend is running!"}
