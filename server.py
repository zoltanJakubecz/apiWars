from flask import Flask, render_template, request
import requests

app = Flask(__name__)


@app.route('/', methods=['POST', 'GET'])
def home():
    response = requests.get('https://swapi.co/api/planets/').json()
    if request.method == 'POST':
        response = requests.get(request.form['next']).json()
    for item in response['results']:
        if item['population'].isdigit():
            for char in range(len(item['population'][:])-3,0,-3):
                item['population'] = item['population'][0:char] + ',' + item['population'][char:len(item['population'])]
        if item['surface_water'].isdigit():
            item['surface_water'] += '%'
        item['residents_len'] = len(item['residents'])
    return render_template('index.html', data=response['results'], next=response['next'], previous=response['previous'])


if __name__ == '__main__':
    app.run(debug=True)