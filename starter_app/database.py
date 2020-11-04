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
                  pictureUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThPF-wfQUdBWOLMfCMoADiYk1Hce1DnuXGkwrjqc3vp-CxPcfOnx3UdkTgjLSAT0RBolzjQwE6&usqp=CAc",
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
        name='Container for the ages',
        manufacturer='Cooler Master',
        size=1,
        price=100)
    case2 = Case(
        name='Container for the Mages',
        manufacturer='Cold',
        size=2,
        price=300)
    case3 = Case(
        name='Cone of Cold',
        manufacturer='Cold',
        size=3,
        price=200)
    case4 = Case(
        name='Its really cold',
        manufacturer='Cold',
        size=2,
        price=200)
    case5 = Case(
        name='Chilly AF',
        manufacturer='Cold',
        size=3,
        price=300)
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
        size=2,
        price=160)
    motherBoard4 = MotherBoard(
        name='MSI B450 TOMAHAWK MAX',
        manufacturer='MSI',
        size=3,
        price=158)
    motherBoard5 = MotherBoard(
        name='ASUS PRIME TRX40-PRO',
        manufacturer='ASUS',
        size=2,
        price=410)
    motherBoard6 = MotherBoard(
        name='ASRock TRX40 TAICHI',
        manufacturer='ASRock',
        size=3,
        price=500)
    cpu1 = CPU(
        name='Intel i7',
        manufacturer='Intel',
        clockSpeed=4,
        price=200)
    cpu2 = CPU(
        name='Intel Core i5-9600K Coffee Lake',
        manufacturer='Intel',
        clockSpeed=3.7,
        price=200)
    cpu3 = CPU(
        name='Intel Core i9-9900K Coffee Lake',
        manufacturer='Intel',
        clockSpeed=3.6,
        price=400)
    cpu4 = CPU(
        name='AMD RYZEN 5 3600 6-Core',
        manufacturer='AMD',
        clockSpeed=3.6,
        price=200)
    cooler1 = Cooler(
        name='Super liquid cooler 9000',
        manufacturer='MSI',
        liquid=True,
        price=1000)
    cooler2 = Cooler(
        name='CORSAIR Hydro Series H100i RGB Plat',
        manufacturer='CORSAIR',
        liquid=True,
        price=100)
    cooler3 = Cooler(
        name='Thermaltake TH240 ARGB',
        manufacturer='Thermaltake',
        liquid=True,
        price=100)
    cooler4 = Cooler(
        name='ASUS ROG Strix LC 240 RGB White Edition',
        manufacturer='Asus',
        liquid=True,
        price=189)
    hardDrive1 = HardDrive(
        name='Samsung 1TB NVMe',
        manufacturer='Samsung',
        SSD=True,
        gbSize=1000,
        price=250)
    hardDrive2 = HardDrive(
        name='Seagate BarraCuda ST2000DM008',
        manufacturer='Seagate',
        SSD=False,
        gbSize=2000,
        price=55)
    hardDrive3 = HardDrive(
        name='Intel 660p Series M.2 2280',
        manufacturer='Intel',
        SSD=True,
        gbSize=2000,
        price=225)
    hardDrive4 = HardDrive(
        name='XPG SPECTRIX RGB Gaming',
        manufacturer='XPG',
        SSD=True,
        gbSize=4000,
        price=700)
    ram1 = RAM(
        name='Corsair Pods',
        manufacturer='Corsair',
        gbSize=4,
        price=50)
    ram2 = RAM(
        name='CORSAIR Vengeance LPX ',
        manufacturer='Corsair',
        gbSize=8,
        price=70)
    ram3 = RAM(
        name='XPG SPECTRIX D60G RGB Desktop Memory',
        manufacturer='XPG',
        gbSize=16,
        price=150)
    ram4 = RAM(
        name='G.SKILL Ripjaws V Series',
        manufacturer='G.SKILL',
        gbSize=8,
        price=62)
    gpu1 = GPU(
        name='EVGA GeForce RTX 3090',
        manufacturer='EVGA',
        VRAM=24,
        price=1800)
    gpu2 = GPU(
        name='GIGABYTE GeForce RTX 2060',
        manufacturer='GIGABYTE',
        VRAM=6,
        price=340)
    gpu3 = GPU(
        name='MSI Radeon RX 5600 XT DirectX',
        manufacturer='MSI',
        VRAM=6,
        price=280)
    gpu4 = GPU(
        name='GIGABYTE Radeon RX 5700 XT',
        manufacturer='GIGABYTE',
        VRAM=8,
        price=420)
    gpu5 = GPU(
        name='EVGA GeForce RTX 3080',
        manufacturer='EVGA',
        VRAM=10,
        price=810)
    powerSupply1 = PowerSupply(
        name='Its a boy',
        manufacturer='Corsair',
        watts=850,
        price=180)
    powerSupply2 = PowerSupply(
        name='EVGA SuperNOVA 650 G3',
        manufacturer='EVGA',
        watts=650,
        price=120)
    powerSupply3 = PowerSupply(
        name='Thermaltake Smart BM2',
        manufacturer='Thermaltake',
        watts=550,
        price=80)
    networkCard1 = NetworkCard(
        name='EDUP WiFi 6 Card AX',
        manufacturer='NURBENN',
        price=30)
    networkCard2 = NetworkCard(
        name='Intel EXPI9301CTBLK',
        manufacturer='Intel',
        price=30)
    networkCard3 = NetworkCard(
        name='Rosewill RC-411v3',
        manufacturer='Rosewill',
        price=16)

    db.session.add(demo)
    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)
    db.session.add(case1)
    db.session.add(case2)
    db.session.add(case3)
    db.session.add(case4)
    db.session.add(case5)
    db.session.add(motherBoard1)
    db.session.add(motherBoard2)
    db.session.add(motherBoard3)
    db.session.add(motherBoard4)
    db.session.add(motherBoard5)
    db.session.add(motherBoard6)
    db.session.add(cpu1)
    db.session.add(cpu2)
    db.session.add(cpu3)
    db.session.add(cpu4)
    db.session.add(cooler1)
    db.session.add(cooler2)
    db.session.add(cooler3)
    db.session.add(cooler4)
    db.session.add(hardDrive1)
    db.session.add(hardDrive2)
    db.session.add(hardDrive3)
    db.session.add(hardDrive4)
    db.session.add(ram1)
    db.session.add(ram2)
    db.session.add(ram3)
    db.session.add(ram4)
    db.session.add(gpu1)
    db.session.add(gpu2)
    db.session.add(gpu3)
    db.session.add(gpu4)
    db.session.add(gpu5)
    db.session.add(powerSupply1)
    db.session.add(powerSupply2)
    db.session.add(powerSupply3)
    db.session.add(networkCard1)
    db.session.add(networkCard2)
    db.session.add(networkCard3)
    db.session.add(test1)

    db.session.commit()
