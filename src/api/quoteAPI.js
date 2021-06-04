// const QUOTE_URL = `https://zenquotes.io/api/random/${process.env.REACT_APP_QUOTE_API_KEY}`;
const QUOTE_URL = 'https://quotes.rest/qod';

export const getQuote = async() => {
    const response = await fetch(QUOTE_URL);
    const json = await response.json();
    const { quote, author } = json.contents.quotes[0];

    return {quote: quote, author: author}; 
}

const quoteAPI = {
    getQuote
};

export default quoteAPI;