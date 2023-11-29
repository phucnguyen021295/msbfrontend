// Api login
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

// Api get danh sách sản phẩm
export const getListProductApi = (success, failure) => {
    fetch('https://012c8b68440c47d184cfa2f7fef10e47.api.mockbin.io/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => success(data))
        .catch((error) => {
            failure(error)
        });


};