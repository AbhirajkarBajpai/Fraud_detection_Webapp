# Fraud_detection_Webapp
Developed a comprehensive Fraud Detection Web App to identify and flag potentially fraudulent transactions in a financial system. The primary goal of the project is to enhance the security of financial transactions by detecting potential fraud Using Machine Learning.

# Bank Financial Transaction Fraud Investigation using Deep Learning

## Description
This project entails the development of a web application aimed at detecting fraudulent activities within bank transactions. The primary objective is to establish a comprehensive system capable of identifying and reporting financial transaction fraud, enabling preventive measures to be taken. Financial fraud often goes unnoticed until it's too late to rectify, and this application serves to address that issue. It was initially created for the RPH Hackathon, with the goal of providing banks with an end-to-end solution for detecting fraud.

## Source of Data
The project utilizes a virtual bank server constructed using training data sourced from Kaggle. This simulated banking environment ensures that the developed model reflects real-life scenarios accurately. Various machine learning models were evaluated to ascertain their effectiveness in detecting fraudulent transactions. Data preprocessing steps were meticulously carried out to handle redundant or missing data, ensuring the robustness of the machine learning model.

## Features
The following key features were extracted from the cleaned data:
1. Transaction ID
2. Amount Transferred
3. Initial balance of sender
4. Initial balance of receiver
5. Location of sender
6. Location of receiver
7. Type of transaction

To facilitate machine learning model training, transaction type features and classes like "is_fraud" or "is_flagged_fraud" were hot encoded as 0 and 1, respectively.

## Machine Learning Algorithms
Several machine learning algorithms were employed to classify transactions as either fraudulent or legitimate, including:
- Logistic Regression
- K Nearest Neighbors
- Support Vector Machine
- Random Forest
- XGBoost
- LightGBM

These algorithms were evaluated based on their performance in accurately detecting fraudulent transactions.


