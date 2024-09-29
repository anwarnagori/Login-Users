async function fetchApi() {
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30,
        }),
    })
        .then(res => res.json())
        .then(console.log);
        
}

fetchApi();