from app.models import User
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(username='DemoUser', firstName='demo',
                lastName='user', email='demo@aa.io', password='password')
    ian = User(username='Ian', firstName='demo', lastName='user',
               email='ian@aa.io', password='password')
    javier = User(username='Javier', firstName='demo',
                  lastName='user',  email='javier@aa.io', password='password')
    dean = User(username='Dean', firstName='demo',
                lastName='user', email='dean@aa.io', password='password')
    angela = User(username='Angela', firstName='demo',
                  lastName='user', email='angela@aa.io', password='password')
    soonmi = User(username='Soon-Mi', firstName='demo',
                  lastName='user', email='soonmi@aa.io',
                  password='password')
    alissa = User(username='Alissa', firstName='demo',
                  lastName='user', email='alissa@aa.io', password='password')

    db.session.add(demo)
    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)

    db.session.commit()
