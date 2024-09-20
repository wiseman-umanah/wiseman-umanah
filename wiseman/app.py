from flask import Flask, render_template, send_file, send_from_directory
from os import getenv
from dotenv import load_dotenv


load_dotenv()

app = Flask(__name__)
app.config["SECRET_KEY"] = getenv("SECRET_KEY")


@app.route("/")
@app.route("/home", strict_slashes=False)
@app.route("/index", strict_slashes=False)
def index():
	return render_template("index.html"), 200


@app.route("/about", strict_slashes=False)
def about():
	return render_template("about.html"), 200


@app.route("/contact", strict_slashes=False)
def contact():
	return render_template("contact.html"), 200


@app.route("/services", strict_slashes=False)
def services():
	return render_template("services.html"), 200


@app.route("/cv_download", strict_slashes=False)
def cv():
	return render_template("index.html"), 200


@app.errorhandler(404)
def fourOfour():
	return render_template("index.html"), 200


if __name__ == "__main__":
	app.run()
