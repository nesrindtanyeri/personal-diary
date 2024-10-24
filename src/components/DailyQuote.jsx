import React, { useEffect, useState } from 'react';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const quotesUrl = new URL("../assets/Quotes.json", import.meta.url).href;
  const fetchQuote = async () => {
    setLoading(true); 
    try {
      const response = await fetch(quotesUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
const randomNumber = Math.floor(Math.random() * data.length);
      setQuote(data[randomNumber].q); 
      setAuthor(data[randomNumber].a); 
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Could not fetch a quote');
      setAuthor('');
    } finally {
      setLoading(false); 
    }
  };

 
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="mt-4 text-center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <blockquote className="text-lg italic mb-4">
          "{quote}" {author && <span>- {author}</span>}
        </blockquote>
      )}
      <button className="btn btn-secondary w-full py-4 mb-4" onClick={fetchQuote}>
        Get a New Quote
      </button>
    </div>
  );
};

export default DailyQuote;
