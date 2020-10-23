import Cookies from 'js-cookie'

const GET_BUILDS = 'auth/GET_BUILDS';
const DELETE_BUILD = 'auth/DELETE_BUILD';
const CREATE_BUILD = 'auth/CREATE_BUILD';

const getBuilds = (builds) => {
    return {
        type: GET_BUILDS,
        builds,
    };
};


const createBuild = (build) => ({
    type: CREATE_BUILD,
    build
})

const removeBuild = (buildId) => {
    return {
        type: DELETE_BUILD,
        buildId
    };
};


export const fetchBuilds = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/builds/${userId}`);
        const data = await res.json();
        dispatch(getBuilds(data));
        return res;
    };
};

export const makeBuild = ( title, description, user_id, caseId, motherBoardId, cpuId, coolerId, hardDriveId, ramId, gpuId, powerSupplyId, networkCardId) => {
    return async (dispatch) => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = await fetch(`/api/builds`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify({ title, description, user_id, caseId, motherBoardId, cpuId, coolerId, hardDriveId, ramId, gpuId, powerSupplyId, networkCardId })
        });
        const data = await res.json();
        if (res.ok) {
            dispatch(createBuild(data));
            res.data = data;
        }
        return res;
    };
}

export const deleteBuild = (buildId) => async dispatch => {
    const res = await fetch(`/api/builds/delete/${buildId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (res.ok) {
        dispatch(removeBuild(buildId));
    }

    return res;
}


export default function buildsReducer(state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case GET_BUILDS:
            return action.builds;
        case CREATE_BUILD:
            return action.build;
        case DELETE_BUILD:
            return action.build;
        default:
            return state;
    }
};
