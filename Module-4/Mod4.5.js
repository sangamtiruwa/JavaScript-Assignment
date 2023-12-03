async function getChuckNorrisJoke() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            if (!response.ok) {
                throw new Error('Failed to fetch Chuck Norris joke');
            }

            const data = await response.json();
            const joke = data.value;

            console.log('Chuck Norris Joke:', joke);
        } catch (error) {
            console.error(error.message);
        }
    }

    getChuckNorrisJoke();