async function getChuckNorrisJokes(searchTerm) {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Chuck Norris jokes');
        }

        const data = await response.json();
        const jokes = data.result;

        const jokesContainer = document.getElementById('jokes-container');
        jokesContainer.innerHTML = ''; 

        jokes.forEach(joke => {
            const article = document.createElement('article');
            const paragraph = document.createElement('p');
            paragraph.textContent = joke.value;
            article.appendChild(paragraph);
            jokesContainer.appendChild(article);
        });
    } catch (error) {
        console.error(error.message);
    }
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    getChuckNorrisJokes(searchTerm);
});
