import React, { useEffect, useState } from 'react';

const QueryHistoryPage = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
  const storedQueries = JSON.parse(localStorage.getItem('queryHistory')) || [];
  console.log('Retrieved Queries:', storedQueries);
  setQueries(storedQueries);
}, []);

  return (
    <div>
      <h1>Query History</h1>
      {queries.length > 0 ? (
        <ul>
          {queries.map((query, index) => (
            <li key={index}>
              <div>
                <strong>Query:</strong> {query.query}
              </div>
              <div>
                <strong>Timestamp:</strong> {query.timestamp}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No queries found in history.</p>
      )}
    </div>
  );
};

export default QueryHistoryPage;
