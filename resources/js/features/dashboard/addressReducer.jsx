export default function addressReducer(state, { type, payload }) {
    switch (type) {
        case "all":
            return payload;
        case "title":
            return { ...state, title: payload };
        case "owner":
            return { ...state, owner: payload };
        case "text":
            return { ...state, text: payload };
        case "po_box":
            if ((/^\d+$/.test(payload) || payload == "") && payload.length < 11)
                return { ...state, po_box: payload };
            else return state;
        case "no":
            if ((/^\d+$/.test(payload) || payload == "") && payload.length < 11)
                return { ...state, no: payload };
            else return state;
        case "phone":
            if ((/^\d+$/.test(payload) || payload == "") && payload.length < 12)
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

export const compareAddresses = (a1, a2) => {
    if (
        a1.title == a2.title &&
        a1.owner == a2.owner &&
        a1.text == a2.text &&
        a1.po_box == a2.po_box &&
        a1.no == a2.no &&
        a1.phone == a2.phone &&
        a1.latitude == a2.latitude &&
        a1.longitude == a2.longitude &&
        a1.province == a2.province &&
        a1.county == a2.county &&
        a1.city == a2.city
    )
        return true;
    else return false;
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
