export function get(url) {
    var result = fetch(url, {
        method: 'get',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });
    return result;
}