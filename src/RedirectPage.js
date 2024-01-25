import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function RedirectPage() {
  const history = useNavigate();

  function handleRedirect() {
    history('/');
  }

  return (
    <div>
      <h2>Redirect</h2>
      <button onClick={handleRedirect}>Перейти на главную страницу</button>
    </div>
  );
}

export default RedirectPage;