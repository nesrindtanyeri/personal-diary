import React, { useEffect, useState } from 'react';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true); 
    try {
      const response = await fetch('https://zenquotes.io/api/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuote(data[0].q); 
      setAuthor(data[0].a); 
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
        <blockquote className="text-lg italic">
          "{quote}" {author && <span>- {author}</span>}
        </blockquote>
      )}
      <button className="btn btn-secondary mt-4" onClick={fetchQuote}>
        Get a New Quote
      </button>
    </div>
  );
};

export default DailyQuote;
