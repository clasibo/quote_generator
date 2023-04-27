

/* If I want to use a API for the Quotes:  https://zenquotes.io/
let apiQuotes = [];

// Get Quotes From API 
async function getQuotes() {
	const apiUrl = 'https://......./quotes.json';
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		console.log(apiQuotes)
	} catch(error){
		//here I'll cach the errors
	}
}
// On load
getQuotes(); */

const quoteContainer = document.getElementById('container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const fbBtn = document.getElementById('fb');
const newQuoteBtn = document.getElementById('new-quote');

textQuote; // this is from file quotes.js

// Show new quote
function newQuote() {
	// Pick a random quote from quotes array
	const quote = textQuote[Math.floor(Math.random()* textQuote.length)];
	//Check if author field is black and replace with unknown
	if (!quote.author) {
		authorText.textContent = "Unknown"
	} else {
		authorText.textContent = quote.author;
	}
	// Check the quote length to determin the styling

	if(quote.text.length > 100) {
		quoteText.classList.add('long-text')
	} else {
		quoteText.classList.remove('long-text')
	}

	quoteText.textContent = quote.text;		
}


// Event Listener

newQuoteBtn.addEventListener('click', newQuote);
