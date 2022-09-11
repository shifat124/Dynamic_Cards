const fetchData = async(config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("data is not fetched");
    }
};

const postsElement = document.querySelector(".posts");

const loadAllData = async() => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
         <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
    `;
        postsElement.appendChild(postElement);
    });
};

loadAllData();