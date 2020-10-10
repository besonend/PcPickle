from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    firstName = db.Column(db.String(40), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(150), nullable=False)

    build = db.relationship("Build", back_populates="user")

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "firstName": self.firstName,
            "lastName": self.lastName,
        }

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)


class Build(db.Model):
    __tablename__ = 'builds'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(2000))
    caseId = db.Column(db.Integer, db.ForeignKey("cases.id"))
    motherBoardId = db.Column(db.Integer, db.ForeignKey("motherBoards.id"))  # noqa
    cpuId = db.Column(db.Integer, db.ForeignKey("cpus.id"))
    coolerId = db.Column(db.Integer, db.ForeignKey("coolers.id"))  # noqa
    hardDriveId = db.Column(db.Integer, db.ForeignKey("hardDrives.id"))  # noqa
    ramId = db.Column(db.Integer, db.ForeignKey("ram.id"))
    gpuId = db.Column(db.Integer, db.ForeignKey("gpus.id"))
    powerSupplyId = db.Column(db.Integer, db.ForeignKey("powerSupplies.id"))  # noqa
    networkCardId = db.Column(db.Integer, db.ForeignKey("networkCards.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    user = db.relationship("User", back_populates="build")
    case = db.relationship("Case", back_populates="build")
    motherBoard = db.relationship("MotherBoard", back_populates="build")
    cpu = db.relationship("CPU", back_populates="build")
    cooler = db.relationship("Cooler", back_populates="build")
    hardDrive = db.relationship("HardDrive", back_populates="build")
    ram = db.relationship("RAM", back_populates="build")
    gpu = db.relationship("GPU", back_populates="build")
    powerSupply = db.relationship("PowerSupply", back_populates="build")
    networkCard = db.relationship("NetworkCard", back_populates="build")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "user_id": self.user_id,
            "caseId": self.caseId,
            "motherBoardId": self.motherBoardId,
            "cpuId": self.cpuId,
            "coolerId": self.coolerId,
            "hardDriveId": self.hardDriveId,
            "ramId": self.ramId,
            "gpuId": self.gpuId,
            "powerSupplyId": self.powerSupplyId,
            "networkCardId": self.networkCardId,
            "user": self.user.id,
        }


class Case(db.Model):
    __tablename__ = 'cases'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    manufacturer = db.Column(db.String(40), nullable=False)
    pictureUrl = db.Column(db.String)
    size = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)

    build = db.relationship("Build", back_populates="case")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "manufacturer": self.manufacturer,
            "pictureUrl": self.pictureUrl,
            "size": self.size,
            "price": self.price,
        }


class MotherBoard(db.Model):
    __tablename__ = 'motherBoards'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    manufacturer = db.Column(db.String(40), nullable=False)
    pictureUrl = db.Column(db.String)
    size = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)

    build = db.relationship("Build", back_populates="motherBoard")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "manufacturer": self.manufacturer,
            "pictureUrl": self.pictureUrl,
            "size": self.size,
            "price": self.price,
        }


class CPU(db.Model):
    __tablename__ = 'cpus'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    manufacturer = db.Column(db.String(40), nullable=False)
    pictureUrl = db.Column(db.String)
    clockSpeed = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)

    build = db.relationship("Build", back_populates="cpu")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "manufacturer": self.manufacturer,
            "pictureUrl": self.pictureUrl,
            "clockSpeed": self.clockSpeed,
            "price": self.price,
        }


class Cooler(db.Model):
    __tablename__ = 'coolers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    manufacturer = db.Column(db.String(40), nullable=False)
    pictureUrl = db.Column(db.String)
    liquid = db.Column(db.Boolean, nullable=False)
    price = db.Column(db.Integer, nullable=False)

    build = db.relationship("Build", back_populates="cooler")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "manufacturer": self.manufacturer,
            "pictureUrl": self.pictureUrl,
            "liquid": self.liquid,
            "price": self.price,
        }


class HardDrive(db.Model):
    __tablename__ = 'hardDrives'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    manufacturer = db.Column(db.String(40), nullable=False)
    pictureUrl = db.Column(db.String)
    SSD = db.Column(db.Boolean, nullable=False)
    gbSize = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)

    build = db.relationship("Build", back_populates="hardDrive")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "manufacturer": self.manufacturer,
            "pictureUrl": self.pictureUrl,
            "SSD": self.SSD,
            "gbSize": self.gbSize,
            "price": self.price,
        }


class RAM(db.Model):
    __tablename__ = 'ram'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    manufacturer = db.Column(db.String(40), nullable=False)
    pictureUrl = db.Column(db.String)
    gbSize = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)

    build = db.relationship("Build", back_populates="ram")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "manufacturer": self.manufacturer,
            "pictureUrl": self.pictureUrl,
            "gbSize": self.gbSize,
            "price": self.price,
        }


class GPU(db.Model):
    __tablename__ = 'gpus'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    manufacturer = db.Column(db.String(40), nullable=False)
    pictureUrl = db.Column(db.String)
    VRAM = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)

    build = db.relationship("Build", back_populates="gpu")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "manufacturer": self.manufacturer,
            "pictureUrl": self.pictureUrl,
            "VRAM": self.VRAM,
            "price": self.price,
        }


class PowerSupply(db.Model):
    __tablename__ = 'powerSupplies'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    manufacturer = db.Column(db.String(40), nullable=False)
    pictureUrl = db.Column(db.String)
    watts = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)

    build = db.relationship("Build", back_populates="powerSupply")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "manufacturer": self.manufacturer,
            "pictureUrl": self.pictureUrl,
            "watts": self.watts,
            "price": self.price,
        }


class NetworkCard(db.Model):
    __tablename__ = 'networkCards'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    manufacturer = db.Column(db.String(40), nullable=False)
    pictureUrl = db.Column(db.String)
    price = db.Column(db.Integer, nullable=False)

    build = db.relationship("Build", back_populates="networkCard")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "manufacturer": self.manufacturer,
            "pictureUrl": self.pictureUrl,
            "price": self.price,
        }
