export default function addressReducer(state, { type, payload }) {
    switch (type) {
        case "title":
            return { ...state, title: payload };
        case "owner":
            return { ...state, owner: payload };
        case "text":
            return { ...state, text: payload };
        case "po_box":
            if (/^\d+$/.test(payload) && payload.length < 11)
                return { ...state, po_box: payload };
            else return state;
        case "no":
            if (/^\d+$/.test(payload) && payload.length < 11)
                return { ...state, no: payload };
            else return state;
        case "phone":
            if (/^\d+$/.test(payload) && payload.length < 12)
                return { ...state, phone: payload };
            else return state;
        case "latitude":
            return { ...state, latitude: payload };
        case "longitude":
            return { ...state, longitude: payload };
        case "province":
            return { ...state, province: payload };
        case "county":
            return { ...state, county: payload };
        case "city":
            return { ...state, city: payload };
        default:
            return state;
    }
}

export const defaultAddress = {
    title: "",
    owner: "",
    text: "",
    po_box: "",
    no: "",
    phone: "",
    latitude: "",
    longitude: "",
    province: "",
    county: "",
    city: "",
};

// title
// owner
// text
// po_box
// no
// phone
// latitude
// longitude
// province
// county
// city
