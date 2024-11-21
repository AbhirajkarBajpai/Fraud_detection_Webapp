# main.py

from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
import pickle
import pandas as pd
from sklearn.preprocessing import StandardScaler
from fastapi.middleware.cors import CORSMiddleware

# Load the trained Random Forest model
with open('random_forest_model.pkl', 'rb') as file:
    loaded_model = pickle.load(file)

# Load the scaler used during training


# Create a FastAPI app
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to the specific origin(s) of your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define input schema using Pydantic
class TransactionInput(BaseModel):
    AmountTransferred: float
    AverageAmounts: float
    FinalBalanceReceiver: float
    Distance: float
    FinalBalanceSender: float
    InitialBalanceReceiver: float


# Endpoint to make predictions
@app.post("/predict")
async def predict(transaction_input: TransactionInput):
    # Prepare input data
    input_data = pd.DataFrame({
        'AmountTransferred': [transaction_input.AmountTransferred],
        'AverageAmounts': [transaction_input.AverageAmounts],
        'FinalBalanceReceiver': [transaction_input.FinalBalanceReceiver],
        'Distance': [transaction_input.Distance],
        'FinalBalanceSender': [transaction_input.FinalBalanceSender],
        'InitialBalanceReceiver': [transaction_input.InitialBalanceReceiver],
    })

    # Standardize the input data using the scaler
    

    # Make predictions
    prediction = loaded_model.predict(input_data)[0]

    # Return the prediction
    return {"predictions": prediction.tolist()}

# Run the app with uvicorn
# Install uvicorn using: pip install uvicorn
# Run the app using: uvicorn main:app --reload
