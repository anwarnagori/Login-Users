async function fetchApi() {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30,
        }),
    })
    const data = await response.json();

    if (data.accessToken) {
        console.log(data.accessToken);

        localStorage.setItem('Token', data.accessToken);
        window.location.href = 'dashboard.html';
    } else {
        window.location.href = 'index.html';
    }
}