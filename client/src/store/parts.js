import Cookies from 'js-cookie'

const GET_PARTS = 'auth/GET_PARTS';
const GET_PART = 'auth/GET_PART';
const DELETE_PART = 'auth/DELETE_PART';
const CREATE_PART = 'auth/CREATE_PART';

const getParts = (parts) => {
    return {
        type: GET_PARTS,
        parts,
    };
};


const getPart = (part) => {
    return {
        type: GET_PART,
        part,
    };
};

const createPart = (part) => ({
    type: CREATE_PART,
    part
})


export const fetchParts = () => {
    return async (dispatch) => {
        const res = await fetch(`/api/parts`);
        const data = await res.json();
        dispatch(getParts(data));
        return res;
    };
};

export const fetchPart = (type, id) => {
    return async (dispatch) => {
        if (!id) {
            return null;
        }
        const res = await fetch(`/api/parts/${type}/${id}`); // Using proxy in our package.json,
        const data = await res.json();
        dispatch(getPart(data.part));
        return res;
    };
};

export const makePart = (type, name, manufacturer, pictureUrl, price, size, clockSpeed, liquid, SSD, gbSize, VRAM, watts) => {
    return async (dispatch) => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = await fetch(`/api/parts/${type}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify({ type, name, manufacturer, pictureUrl, price, size, clockSpeed, liquid, SSD, gbSize, VRAM, watts})
        });
        const data = await res.json();
        if (res.ok) {
            dispatch(createPart(data));
            res.data = data;
        }
        return res;
    };
}


export default function partsReducer(state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case GET_PARTS:
            return action.parts;
        case GET_PART:
            return action.part;
        case CREATE_PART:
            return action.part;
        default:
            return state;
    }
};
