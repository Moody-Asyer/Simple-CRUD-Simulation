from flask import Flask, request, render_template, redirect
from db import Database

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def main():
    db = Database()
    items = db.show_db()
    return render_template('index.html', items=items)

@app.route('/cari', methods=['POST'])
def cari():
    db = Database()
    items = db.cari(request.form['keyword'])
    return render_template('cari.html', items=items)

@app.route('/new', methods=['POST'])
def add():
    return render_template('new.html')

@app.route('/update', methods=['POST'])
def apply():
    db = Database()
    code = request.form['code']
    name = request.form['name']
    active = request.form['active']
    db.new(code, name, active)
    return redirect('/')

app.run(debug=True)