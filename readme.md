# 🏃‍♂️ WeightWise - Health Prediction Web Application

A modern, AI-powered web application that predicts weight categories (Normal, Underweight, Overweight, Obese) based on user health metrics using machine learning.

![WeightWise Banner](https://img.shields.io/badge/Flask-2.0+-green) ![Python](https://img.shields.io/badge/Python-3.7+-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

## 📋 Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Model Information](#model-information)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 🎨 **Modern UI/UX**: Beautiful gradient design with smooth animations
- 🤖 **ML-Powered Predictions**: Uses trained machine learning model for accurate predictions
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Real-time Validation**: Client-side form validation for better user experience
- 🎯 **Personalized Results**: Color-coded results with health recommendations
- 🔄 **Dynamic Interactions**: Smooth animations and transitions
- 💡 **User-Friendly**: Intuitive interface with helpful icons and clear instructions

## 🎥 Demo

### Input Form
Users can enter their:
- Height (cm)
- Weight (kg)
- Age (years)
- Physical Activity Level (1-4)
- Gender (Male/Female)

### Prediction Results
The app provides:
- Weight category prediction
- Personalized health recommendations
- Color-coded visual feedback
- Option to try again with new data

## 🚀 Installation

### Prerequisites
- Python 3.7 or higher
- pip (Python package manager)

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weightwise.git
   cd weightwise
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate

   # macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Prepare your ML model**
   - Place your trained model file (`file.pkl`) in the `pickle/` directory
   - Ensure the model accepts the following features in order:
     - Age, Gender, Height, Weight, BMI, PhysicalActivityLevel

5. **Run the application**
   ```bash
   python app.py
   ```

6. **Access the app**
   - Open your browser and navigate to: `http://127.0.0.1:5000/`

## 📖 Usage

1. **Enter Your Information**
   - Fill in all required fields (Height, Weight, Age, Activity Level, Gender)
   - All fields are validated for proper ranges

2. **Get Your Prediction**
   - Click the "Predict My Health Status" button
   - View your personalized result with health recommendations

3. **Try Again**
   - Click the "Try Again" button to reset the form
   - Enter new data for another prediction

## 📁 Project Structure

```
weightwise/
│
├── app.py                      # Flask application (main file)
├── requirements.txt            # Python dependencies
├── README.md                   # Project documentation
│
├── pickle/
│   └── file.pkl               # Trained ML model
│
├── templates/
│   └── index.html             # HTML template
│
└── static/
    ├── style.css              # Stylesheet
    └── script.js              # JavaScript functionality
```

## 🛠️ Technologies Used

### Backend
- **Flask** - Python web framework
- **Pandas** - Data manipulation and analysis
- **Pickle** - Model serialization
- **Scikit-learn** - Machine learning (for model training)

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with modern features
  - Gradients
  - Animations
  - Flexbox & Grid
- **JavaScript** - Interactivity
  - DOM manipulation
  - Form validation
  - Smooth animations

### Design
- **Responsive Design** - Mobile-first approach
- **Modern UI** - Gradient backgrounds, smooth transitions
- **Accessibility** - Semantic HTML, proper labels

## 🤖 Model Information

### Input Features
The model expects the following features:
1. **Age** (years)
2. **Gender** (Male/Female)
3. **Height** (cm)
4. **Weight** (kg)
5. **BMI** (calculated automatically)
6. **PhysicalActivityLevel** (1-4 scale)

### Output Categories
- **Normal weight** ✅
- **Underweight** ⚠️
- **Overweight** ⚠️
- **Obese** 🚨

### Model Training (Example)
```python
# Example training code (not included in this repo)
from sklearn.ensemble import RandomForestClassifier
# ... training code ...
import pickle

# Save model
with open('pickle/file.pkl', 'wb') as f:
    pickle.dump(model, f)
```

## 📸 Screenshots

### Main Form
![Main Form](screenshots/form.png)
*Clean, intuitive form with validation*

### Normal Weight Result
![Normal Result](screenshots/result-normal.png)
*Positive feedback with green gradient*

### Overweight Result
![Overweight Result](screenshots/result-overweight.png)
*Warning with orange gradient and recommendations*

## 🔧 Configuration

### Customizing the Application

**Change Port Number**
```python
# In app.py
if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Change port here
```

**Update Model Path**
```python
# In app.py
filename = 'pickle/your_model.pkl'  # Update path
```

**Modify Prediction Categories**
```python
# In app.py, update the predi list
predi = ['Normal weight', 'Obese', 'Overweight', 'Underweight']
```

## 🐛 Troubleshooting

### Common Issues

**Issue: Module not found**
```bash
# Solution: Install requirements
pip install -r requirements.txt
```

**Issue: Model file not found**
```bash
# Solution: Ensure file.pkl exists in pickle/ directory
# Check the path in app.py
```

**Issue: Port already in use**
```bash
# Solution: Change port in app.py or kill the process
# Windows: netstat -ano | findstr :5000
# Linux/Mac: lsof -i :5000
```

## 📦 Dependencies

Create a `requirements.txt` file with:
```
Flask==2.3.0
pandas==2.0.0
scikit-learn==1.2.2
```

Install with:
```bash
pip install -r requirements.txt
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@Subh2981](https://github.com/Subh2981)
- Email: devilsubham142@gmail.com


⚠️ **Disclaimer**: This is a prediction tool and should not replace professional medical advice. Always consult with healthcare professionals for medical decisions.

Made with ❤️ using Flask and Machine Learning