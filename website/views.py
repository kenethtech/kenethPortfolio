from flask import Blueprint, render_template, send_file

views = Blueprint('views', __name__,template_folder="templates",static_folder="static")

@views.route('/')
def home():
    return render_template('index.html')

@views.route('/about')
def about_me():
    return render_template('about.html')

@views.route('/contact')
def contact_me():
    return render_template('contact.html')

@views.route('/projects')
def my_projects():
    return render_template('projects.html')

@views.route('/resume')
def resume():
    return send_file("static/assets/Keneth_njoroge_resume.pdf", as_attachment=True)
