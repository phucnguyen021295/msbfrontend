export const loginApi = (username, password, success, failure) => {
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username, // 'kminchelle',
            password: password, // '0lelplR',
        })
    })
        .then(res => res.json())
        .then(data => success(data))
        .catch((error) => {
            failure(error)
        });


};