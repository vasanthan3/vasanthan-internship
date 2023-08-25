document.addEventListener('DOMContentLoaded', function() {
  const quoteButton = document.getElementById('quoteButton');
  const quoteDisplay = document.getElementById('quoteDisplay');

  quoteButton.addEventListener('click', fetchRandomQuote);

  function fetchRandomQuote() {
      fetch('https://type.fit/api/quotes') 
          .then(response => response.json())
          .then(data => {
              const randomIndex = Math.floor(Math.random() * data.length);
              const quote = data[randomIndex].text;
              const author = data[randomIndex].author || 'Unknown';

              quoteDisplay.innerHTML = `"${quote}" - ${author}`;
          })
          .catch(error => {
              console.error('Error fetching quote:', error);
              quoteDisplay.innerHTML = 'An error occurred while fetching the quote.';
          });
  }
});
