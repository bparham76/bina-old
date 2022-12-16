export default function profileInfoReducer(state, { type, payload }) {
    switch (type) {
        case "all":
            return payload;
        case "pid":
            if (
                (/^\d+\b$/.test(payload) || payload == "") &&
                payload.length < 11
            )
                return { ...state, pid: payload };
            else return state;
        case "first_name":
            return { ...state, first_name: payload };
        case "last_name":
            return { ...state, last_name: payload };
        case "sex":
            return { ...state, sex: payload };
        case "email":
            return { ...state, email: payload };
        case "eco_no":
            if (
                (/^\d+\b$/.test(payload) || payload == "") &&
                payload.length < 32
            )
                return { ...state, eco_no: payload };
            return state;
        case "reg_no":
            if (
                (/^\d+\b$/.test(payload) || payload == "") &&
                payload.length < 32
            )
                return { ...state, reg_no: payload };
            return state;
        case "shaba_no":
            if (
                (/^\d+\b$/.test(payload) || payload == "") &&
                payload.length < 32
            )
                return { ...state, shaba_no: payload };
            return state;
        case "acc_no":
            if (
                (/^\d+\b$/.test(payload) || payload == "") &&
                payload.length < 32
            )
                return { ...state, acc_no: payload };
            return state;
        default:
            return state;
    }
}

export function profileInfoCompare(l1, l2) {
    if (
        l1.acc_no == l2.acc_no &&
        l1.eco_no == l2.eco_no &&
        l1.email == l2.email &&
        l1.first_name == l2.first_name &&
        l1.last_name == l2.last_name &&
        l1.pid == l2.pid &&
        l1.reg_no == l2.reg_no &&
        l1.sex == l2.sex &&
        l1.shaba_no == l2.shaba_no
    )
        return true;
    return false;
}

// acc_no
// eco_no
// email
// first_name
// id
// last_name
// phone
// pid
// reg_no
// sex
// shaba_no
// type
// user_id
