from wtforms.fields import (StringField, PasswordField, SubmitField)
from wtforms.fields.html5 import (EmailField)
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired


class LoginForm(FlaskForm):
    username = StringField("username", validators=[DataRequired()])
    password = PasswordField("password", validators=[DataRequired()])
    submit = SubmitField("Login")


class SignUpForm(FlaskForm):
    username = StringField("username", validators=[DataRequired()])
    firstName = StringField("username", validators=[DataRequired()])
    lastName = StringField("username", validators=[DataRequired()])
    email = EmailField("email", validators=[DataRequired()])
    password = PasswordField("password", validators=[DataRequired()])
    confirm_password = PasswordField(
        "confirm password", validators=[DataRequired()])
    submit = SubmitField("sign up")
