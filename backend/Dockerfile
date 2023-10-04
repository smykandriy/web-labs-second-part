FROM python:3.11

COPY ./server /opt/server
COPY manage.py /opt/
COPY requirements.txt /opt/

WORKDIR /opt/

RUN pip install -r requirements.txt

CMD python manage.py migrate && python manage.py runserver 0.0.0.0:8000