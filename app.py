from flask import Flask
from flask import request,redirect,url_for,render_template
import pickle
app=Flask(__name__,template_folder='templates')
import pandas as pd


filename='pickle/file.pkl'
with open(filename,'rb') as file:
    model=pickle.load(file)
        
@app.route('/',methods=['POST','GET'])

def index():
    if request.method == 'GET':
        hii=f"Hello Every One"
        return render_template('index.html',hi=hii)
        
    else:
        Height=int(request.form.get('Height'))
        Weight=int(request.form.get('Weight'))
        Age=int(request.form.get('Age'))
        PhysicalActivityLevel=int(request.form.get('PhysicalActivityLevel'))
        Gender=request.form.get("Gender")
        BMI=round(Weight/((Height/100)**2),6)
        user_df = pd.DataFrame(
                                [[Age, Gender, Height, Weight, BMI, PhysicalActivityLevel]],
                                columns=['Age', 'Gender', 'Height', 'Weight', 'BMI', 'PhysicalActivityLevel']
                                        )
        
        predict=model.predict(user_df)
        predi=['Normal weight', 'Obese', 'Overweight', 'Underweight']
        prdicted=predi[predict[0]]
        return render_template('index.html',prdicted=prdicted)

if __name__=='__main__':
    app.run(host="0.0.0.0")