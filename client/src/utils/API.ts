import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const setAuthorizationHeader = (token:string) => {
    const jwt = `Bearer ${token}`;
    localStorage.setItem('jwt', jwt);
    axiosInstance.defaults.headers.common['Authorization'] = jwt;
}

export const removeAuthorizationHeader = () => {
    localStorage.removeItem('jwt');
    delete axiosInstance.defaults.headers.common['Authorization'];
}

export const hasToken = () => {
    if(!getToken()) return false;
    if(!axiosInstance.defaults.headers.common['Authorization']) {
        axiosInstance.defaults.headers.common['Authorization'] = getToken();
    }
    
    return true;
}

export const getToken = () => localStorage.getItem('jwt') || null;

export const login = async (url:string, data:object) => {
        const res = await axios.post(url, data);
        setAuthorizationHeader(res.data.token);
}

export const signup = async (url:string, data:object) => {
    const res = await axios.post(url, data);
    setAuthorizationHeader(res.data.token);
}

export const logout = async (url:string) => {
    await axios.post(url);
    removeAuthorizationHeader();
}

export const getData = async (url:string) => {
    return await axios.get('/user/me');
}

export default axiosInstance;