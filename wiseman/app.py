from flask import Flask, render_template, send_file, abort, send_from_directory
from os import getenv, path
from dotenv import load_dotenv


load_dotenv()

app = Flask(__name__)
app.config["SECRET_KEY"] = getenv("SECRET_KEY")
app.config["UPLOAD_FOLDER"] = "utils"


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
	return send_from_directory(app.config['UPLOAD_FOLDER'], 'Wiseman.pdf')


@app.route("/services/<build>", strict_slashes=False)
def website(build):
	try:
		return render_template(f'{build}.html'), 200
	except Exception:
		abort(404)


@app.errorhandler(404)
def fourOfour(error):
	report = "THIS PAGE IS NOT FOUND OR UNDER-DEVELOPMENT"
	return render_template("error.html", error="404", report=report), 200


@app.errorhandler(500)
def fiveOO(error):
	report = "OUR SYSTEM COULDN'T PROCESS YOUR REQUEST, TRY SOMETHING ELSE"
	return render_template("error.html", error="404", report=report), 200


if __name__ == "__main__":
	app.run(debug=True)
