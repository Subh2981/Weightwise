# base image 
FROM python:3.14.2

# workdir
WORKDIR /app
#copy
COPY . /app
#port
RUN pip install -r requirements.txt
#command

EXPOSE 5000

CMD ["python","app.py"]