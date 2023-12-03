document.getElementById('searchForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const queryInput = document.getElementById('query');
  const query = queryInput.value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.length > 0) {
      console.log(`Search Results for "${query}":`, data);
    } else {
      console.log(`No results found for "${query}"`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
