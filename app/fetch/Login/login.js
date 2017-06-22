import { post } from '../post';


export function login(data) {
    if(data == null)
        return;
    const result = post('http://localhost:3000/checkLogin', data);
    return result;
}

export function ppp(data) {
    if(data == null)
        return;
    const result = post('http://localhost:3000/login');
    return result;
}