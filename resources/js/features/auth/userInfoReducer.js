export const userInfoReducer = (state, action) => { 
    switch (action.type) {
        case 'first_name':
            return { ...state, firstName: action.payload.first_name };
        case 'last_name':
            return { ...state, lastName: action.payload.last_name };
        case 'pid':
            return { ...state, pid: action.payload.pid };
        case 'email':
            return { ...state, email: action.payload.email };
        case 'eco_no':
            return { ...state, eco_no: action.payload.eco_no };
        case 'reg_no':
            return { ...state, reg_no: action.payload.reg_no };
        case 'shaba_no':
            return { ...state, shaba_no: action.payload.shaba_no };
        case 'acc_no':
            return { ...state, acc_no: action.payload.acc_no };
        case 'sex':
            return { ...state, sex: action.payload.sex };
        case 'type':
            return { ...state, type: action.payload.type };
        case 'all':
            return action.payload;
        default:
            return state;
    }
};