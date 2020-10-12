from flask_login import LoginManager, current_user, login_user, logout_user, login_required  # noqa
from flask import (Blueprint, jsonify, url_for, request, redirect, render_template)  # noqa
from app.models import (db, User, MotherBoard, Case, CPU, HardDrive,
                        PowerSupply, GPU, RAM, NetworkCard, Cooler)
from sqlalchemy import or_

parts = Blueprint('parts', __name__)


@parts.route("/mobos", methods=["POST"])
def create_mobo():
    data = request.json
    new_mobo = MotherBoard(
        name=data['name'],
        manufacturer=data['manufacturer'],
        pictureUrl=data['pictureUrl'],
        size=data['size'],
        price=data['price']
    )
    db.session.add(new_mobo)
    db.session.commit()
    format_mobo = new_mobo.to_dict()
    return {"mobo": format_mobo}


@parts.route("/cases", methods=["POST"])
def create_case():
    data = request.json
    new_case = Case(
        name=data['name'],
        manufacturer=data['manufacturer'],
        pictureUrl=data['pictureUrl'],
        size=data['size'],
        price=data['price']
    )
    db.session.add(new_case)
    db.session.commit()
    format_case = new_case.to_dict()
    return {"case": format_case}


@parts.route("/ram", methods=["POST"])
def create_ram():
    data = request.json
    new_ram = RAM(
        name=data['name'],
        manufacturer=data['manufacturer'],
        pictureUrl=data['pictureUrl'],
        gbSize=data['gbSize'],
        price=data['price']
    )
    db.session.add(new_ram)
    db.session.commit()
    format_ram = new_ram.to_dict()
    return {"ram": format_ram}


@parts.route("/gpus", methods=["POST"])
def create_gpu():
    data = request.json
    new_gpu = GPU(
        name=data['name'],
        manufacturer=data['manufacturer'],
        pictureUrl=data['pictureUrl'],
        VRAM=data['VRAM'],
        price=data['price']
    )
    db.session.add(new_gpu)
    db.session.commit()
    format_gpu = new_gpu.to_dict()
    return {"gpu": format_gpu}


@parts.route("/cpus", methods=["POST"])
def create_cpu():
    data = request.json
    new_cpu = CPU(
        name=data['name'],
        manufacturer=data['manufacturer'],
        pictureUrl=data['pictureUrl'],
        clockSpeed=data['clockSpeed'],
        price=data['price']
    )
    db.session.add(new_cpu)
    db.session.commit()
    format_cpu = new_cpu.to_dict()
    return {"cpu": format_cpu}


@parts.route("/coolers", methods=["POST"])
def create_cooler():
    data = request.json
    new_cooler = Cooler(
        name=data['name'],
        manufacturer=data['manufacturer'],
        pictureUrl=data['pictureUrl'],
        liquid=data['liquid'],
        price=data['price']
    )
    db.session.add(new_cooler)
    db.session.commit()
    format_cooler = new_cooler.to_dict()
    return {"cooler": format_cooler}


@parts.route("/networkCards", methods=["POST"])
def create_networkCard():
    data = request.json
    new_networkCard = NetworkCard(
        name=data['name'],
        manufacturer=data['manufacturer'],
        pictureUrl=data['pictureUrl'],
        price=data['price']
    )
    db.session.add(new_networkCard)
    db.session.commit()
    format_networkCard = new_networkCard.to_dict()
    return {"networkCard": format_networkCard}


@parts.route("/powerSupplies", methods=["POST"])
def create_powerSupply():
    data = request.json
    new_powerSupply = PowerSupply(
        name=data['name'],
        manufacturer=data['manufacturer'],
        pictureUrl=data['pictureUrl'],
        watts=data['watts'],
        price=data['price']
    )
    db.session.add(new_powerSupply)
    db.session.commit()
    format_powerSupply = new_powerSupply.to_dict()
    return {"powerSupply": format_powerSupply}


@parts.route("/hardDrives", methods=["POST"])
def create_hardDrive():
    data = request.json
    new_hardDrive = HardDrive(
        name=data['name'],
        manufacturer=data['manufacturer'],
        pictureUrl=data['pictureUrl'],
        SSD=data['SSD'],
        gbSize=data["gbSize"],
        price=data['price']
    )
    db.session.add(new_hardDrive)
    db.session.commit()
    format_hardDrive = new_hardDrive.to_dict()
    return {"hardDrive": format_hardDrive}


@parts.route("/delete/mobos/<partId>", methods=["DELETE"])
def delete_mobo(partId):
    part = db.session.query(MotherBoard).filter(
        MotherBoard.id == partId).first()
    db.session.delete(part)
    db.session.commit()


@parts.route("/delete/cases/<partId>", methods=["DELETE"])
def delete_case():
    part = db.session.query(Case).filter(
        Case.id == partId).first()
    db.session.delete(part)
    db.session.commit()


@parts.route("/delete/ram/<partId>", methods=["DELETE"])
def delete_ram():
    part = db.session.query(RAM).filter(
        RAM.id == partId).first()
    db.session.delete(part)
    db.session.commit()


@parts.route("/delete/gpus/<partId>", methods=["DELETE"])
def delete_gpu():
    part = db.session.query(GPU).filter(
        GPU.id == partId).first()
    db.session.delete(part)
    db.session.commit()


@parts.route("/delete/cpus/<partId>", methods=["DELETE"])
def delete_cpu():
    part = db.session.query(CPU).filter(
        CPU.id == partId).first()
    db.session.delete(part)
    db.session.commit()


@parts.route("/delete/coolers/<partId>", methods=["DELETE"])
def delete_cooler():
    part = db.session.query(Cooler).filter(
        Cooler.id == partId).first()
    db.session.delete(part)
    db.session.commit()


@parts.route("/delete/networkCards/<partId>", methods=["DELETE"])
def delete_networkCard():
    part = db.session.query(NetworkCard).filter(
        NetworkCard.id == partId).first()
    db.session.delete(part)
    db.session.commit()


@parts.route("/delete/powerSupplies/<partId>", methods=["DELETE"])
def delete_powerSupply():
    part = db.session.query(PowerSupply).filter(
        PowerSupply.id == partId).first()
    db.session.delete(part)
    db.session.commit()


@parts.route("/delete/hardDrives/<partId>", methods=["DELETE"])
def delete_hardDrive():
    part = db.session.query(HardDrive).filter(
        HardDrive.id == partId).first()
    db.session.delete(part)
    db.session.commit()


@parts.route("/")
def get_parts():
    mobos = db.session.query(MotherBoard)
    cases = db.session.query(Case)
    cpus = db.session.query(CPU)
    hardDrives = db.session.query(HardDrive)
    powerSupplies = db.session.query(PowerSupply)
    gpus = db.session.query(GPU)
    rams = db.session.query(RAM)
    networkCards = db.session.query(NetworkCard)
    coolers = db.session.query(Cooler)
    format_parts = {"mobos": {},
                    "cpus": {},
                    "cases": {},
                    "rams": {},
                    "networkCards": {},
                    "powerSupplies": {},
                    "hardDrives": {},
                    "gpus": {},
                    "coolers": {}}
    for mobo in mobos:
        format_parts["mobos"][mobo.id] = mobo.to_dict()
    for case in cases:
        format_parts["cases"][case.id] = case.to_dict()
    for cpu in cpus:
        format_parts["cpus"][cpu.id] = cpu.to_dict()
    for cooler in coolers:
        format_parts["coolers"][cooler.id] = cooler.to_dict()
    for hardDrive in hardDrives:
        format_parts["hardDrives"][hardDrive.id] = hardDrive.to_dict()
    for powerSupply in powerSupplies:
        format_parts["powerSupplies"][powerSupply.id] = powerSupply.to_dict()
    for gpu in gpus:
        format_parts["gpus"][gpu.id] = gpu.to_dict()
    for ram in rams:
        format_parts["rams"][ram.id] = ram.to_dict()
    for networkCard in networkCards:
        format_parts["networkCards"][networkCard.id] = networkCard.to_dict()
    return format_parts
