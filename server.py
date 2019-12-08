from flask import Flask, render_template
import requests

app = Flask(__name__)


@app.route('/')
def home():
    response = requests.get('https://swapi.co/api/planets/').json()
    # print(response['results'])
    return render_template('index.html', data=response)


if __name__ == '__main__':
    app.run(debug=True)