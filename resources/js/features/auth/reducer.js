export const reducer = (state, action) => {
    switch (action.type) {
        case 'abort':
            return { ...state, authenticated: false, loading: false, phone: '', stage: 0, error: 0 };
        case 'loading':
            return { ...state, loading: true };
        case 'loaded':
            return { ...state, loading: false };
        case 'add_phone':
            return { ...state, phone: action.payload.phone, stage: 1 };
        case 'resend_code':
            return { ...state, stage: 0, error: 0 };
        case 'commit_login':
            return { ...state, authenticated: true, token: action.payload.token, error: 0 };
        case 'commit_logout':
            return { authenticated: false, error: 0, stage: 0 };
        case 'error_no_connection':
            return { ...state, error: 1 };
        case 'error_wrong_code':
            return { ...state, error: 2 };
        case 'error_code_expired':
            return { ...state, error: 3 };
        default:
            return state;
    }
}