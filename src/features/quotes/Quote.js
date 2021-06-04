import { useSelector, useDispatch } from 'react-redux';
import { selectQuote } from './quoteSlice';
import { useEffect } from 'react';
import { fetchQuote } from './quoteSlice';

export function Quote() {
    const quote = useSelector(selectQuote);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuote());
    }, []);

    return (
        <div id="quoteArea">
            <div id="quoteContainer">
                <p id="quote">
                    {quote.quote}
                </p>
                <div id="author" >-{quote.author}</div>
            </div>   
        </div>
    );
}