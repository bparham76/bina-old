/*
action.type
action.payload
*/
export const dataReducer = (state, action) => {
    switch (action.type) {
        case "send_code":
            return { stage: 1, phone: action.payload.phone, ...state };
        case "verify_success":
            return { stage: 2, success: true, ...state };
        case "verify_fail":
            return { stage: 2, success: false, ...state };
        default:
            return state;
    }
};