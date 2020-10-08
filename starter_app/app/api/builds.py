from flask_login import LoginManager, current_user, login_user, logout_user, login_required  # noqa
from flask import (Blueprint, jsonify, url_for, request, redirect, render_template)  # noqa
from app.models import Build, db, User
from sqlalchemy import or_

builds = Blueprint('builds', __name__)


@builds.route("/<user_id>")
def user_builds(user_id):
    builds = db.session.query(Build).filter(or_(Board.user_id == user_id,
                                                Board.user_id == 1))
    format_builds = {"builds": {}}
    for build in builds:
        format_builds["builds"][build.id] = build.to_dict()
    return format_builds


@builds.route("/create", methods=["POST"])
def create_build():
    data = request.json
    new_build = Build(
        title=data['title'],
        description=data['description'],
        user_id=data['userId'],
        caseId=data['caseId'],
        motherBoardId=data['motherBoardId'],
        cpuId=data['cpuId'],
        coolerId=data['coolerId'],
        hardDriveId=data['hardDriveId'],
        ramId=data['ramId'],
        gpuId=data['gpuId'],
        powerSupplyId=data['powerSupplyId'],
        networkCardId=data['networkCardId'],
    )
    db.session.add(new_build)
    db.session.commit()
    format_build = new_build.to_dict()
    return {"build": format_build}
