FROM python:3.7.7-buster

ADD requirements.txt /app/requirements.txt

RUN apt-get update
RUN apt-get install -y gdal-bin libgdal-dev python-gdal build-essential
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r /app/requirements.txt

WORKDIR /app

ENV VIRTUAL_ENV /env
ENV PATH /env/bin:$PATH

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
