/*
state:{
    stage,
    code,
    phone,
    success,
    token
}

action:{
    type,
    ...state
}
*/

export const authData = {
    stage: 0,
    phone: null,
    success: false,
    token: null,
    error: null,
};

export const authDataReducer = (state, action) => {
    switch (action.type) {
        case "phone_sent_success":
            return {...state, phone: action.phone, stage: 1, error: 0};
        case "phone_sent_fail_network":
            return {...state, error: 1}; 
        case "phone_verify_success_former_user":
            return {...state, success: true, stage: 2, token: action.token, error: 0}; 
        case "phone_verify_success_new_user":
            return {...state, success: true, stage: 3, token: action.token, error: 0};
        case "phone_verify_fail_network":
            return {...state, error: 2}; 
        case "phone_verify_fail_expired_code":
            return {...state, error: 3};
        case "phone_verify_fail_not_found":
            return { ...state, error: 4 };
        case "clear_error":
            return { ...state, error: 0 };
        default:
            return state;
    }
};