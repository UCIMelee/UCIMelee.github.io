from flask import Flask, render_template


app = Flask(__name__, static_folder='static')
app.secret_key = "iliketurtles"



@app.route('/')
def mainMenu():
	return "Welcome to hell!"

if __name__ == '__main__':
	app.run()
