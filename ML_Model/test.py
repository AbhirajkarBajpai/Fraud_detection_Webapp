import requests

# URL for the predict endpoint
url = "http://127.0.0.1:8000/predict"

# Sample data for testing
data = {
    "AmountTransferred":	291.7795198008414,
    "AverageAmounts": 		145.8897599004207,
    "FinalBalanceReceiver":	2256,
    "Distance": 10560.73,
 
     "FinalBalanceSender": 2548,
        "InitialBalanceReceiver": 2548,
}


# Send a POST request to the API
response = requests.post(url, json=data)


# Print the response
print("Response Code:", response.status_code)
print("Response JSON:", response.json())
