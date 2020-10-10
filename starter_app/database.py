from app.models import (User, Build, Case, Cooler, MotherBoard, CPU,
                        HardDrive, GPU, RAM, PowerSupply, NetworkCard)
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
    test1 = Build(title="Test Build",
                  description="My first build",
                  user_id=1,
                  caseId=1,
                  motherBoardId=1,
                  cpuId=1,
                  coolerId=1,
                  hardDriveId=1,
                  ramId=1,
                  gpuId=1,
                  powerSupplyId=1,
                  networkCardId=1)
    case1 = Case(
        name='Intel i7',
        manufacturer='Intel',
        size=1,
        price=100)
    motherBoard1 = MotherBoard(
        name='Sabertooth Z77',
        manufacturer='MSI',
        size=1,
        price=200)
    motherBoard2 = MotherBoard(
        name='MSI B450 GAMING PLUS MAX',
        manufacturer='MSI',
        size=1,
        price=109)
    motherBoard3 = MotherBoard(
        name='MSI B450 GAMING PRO CARBON MAX',
        manufacturer='MSI',
        size=1,
        price=160)
    motherBoard4 = MotherBoard(
        name='MSI B450 TOMAHAWK MAX',
        manufacturer='MSI',
        size=1,
        price=158)
    motherBoard5 = MotherBoard(
        name='ASUS PRIME TRX40-PRO',
        manufacturer='ASUS',
        size=1,
        price=410)
    motherBoard6 = MotherBoard(
        name='ASRock TRX40 TAICHI',
        manufacturer='ASRock',
        size=1,
        price=500)
    cpu1 = CPU(
        name='Intel i7',
        manufacturer='Intel',
        clockSpeed=4,
        price=200)
    cooler1 = Cooler(
        name='Super liquid cooler 9000',
        manufacturer='MSI',
        liquid=True,
        price=1000)
    hardDrive1 = HardDrive(
        name='Samsung 1TB NVMe',
        manufacturer='Samsung',
        SSD=True,
        gbSize=1000,
        price=250)
    ram1 = RAM(
        name='Corsair Pods',
        manufacturer='Corsair',
        gbSize=4,
        price=50)
    gpu1 = GPU(
        name='NVIDIA 3090 GTX',
        manufacturer='NVIDIA',
        VRAM=4,
        price=2000)
    powerSupply1 = PowerSupply(
        name='Its a boy',
        manufacturer='Corsair',
        watts=850,
        price=180)
    networkCard1 = NetworkCard(
        name='wireless thingy',
        manufacturer='Samsung',
        price=1)

    db.session.add(demo)
    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)
    db.session.add(case1)
    db.session.add(motherBoard1)
    db.session.add(motherBoard2)
    db.session.add(motherBoard3)
    db.session.add(motherBoard4)
    db.session.add(motherBoard5)
    db.session.add(motherBoard6)
    db.session.add(cpu1)
    db.session.add(cooler1)
    db.session.add(hardDrive1)
    db.session.add(ram1)
    db.session.add(gpu1)
    db.session.add(powerSupply1)
    db.session.add(networkCard1)
    db.session.add(test1)

    db.session.commit()
