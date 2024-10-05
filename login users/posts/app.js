document.addEventListener('DOMContentLoaded', () => {
    async function fetchData() {
        try {
            const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await usersResponse.json();

            const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await postsResponse.json();

            const contentDiv = document.getElementById('content');

            for (const user of users.slice(0, 10)) {
                const userSection = document.createElement('div');
                userSection.className = 'user-section';

                const userDiv = document.createElement('div');
                userDiv.className = 'user';
                userDiv.innerHTML = `<h2>${user.name}</h2><p>${user.email}</p>`;
                userSection.appendChild(userDiv);

                const userPosts = posts.filter(post => post.userId === user.id).slice(0, 10);
                const postsDiv = document.createElement('div');
                postsDiv.className = 'posts';

                userPosts.forEach(post => {
                    const postDiv = document.createElement('div');
                    postDiv.className = 'post';
                    postDiv.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
                    postsDiv.appendChild(postDiv);
                });

                userSection.appendChild(postsDiv);
                contentDiv.appendChild(userSection);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData();
});