import React, { useState } from 'react';

function OpenPage() {
  const [url, setUrl] = useState('');

  function handleOpen() {
    window.open(url, '_blank');
  }

  return (
    <div>
      <h2>Открыть страницу</h2>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={handleOpen}>Открыть новую страницу</button>
    </div>
  );
}

export default OpenPage;