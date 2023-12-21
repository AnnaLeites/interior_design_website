// DisplayResults.js
import React from 'react';

function DisplayResults({ imgUrls }) {
  return (
    <div>
      <h2>Results</h2>
      {imgUrls.map((url, index) => (
        <img key={index} src={url} alt={`Result ${index + 1}`} />
      ))}
    </div>
  );
}

export default DisplayResults;
