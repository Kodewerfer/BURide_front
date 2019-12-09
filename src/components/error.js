import React from 'react';

export default function ErrorPage({ error, onClose }) {

  if (!error) {
    window.history.back();
    return false;
  }

  return (
    <div>
      <h3>Error</h3>
      <h3>{error.title}</h3>
      <h4>{error.message}</h4>
      <h4>Server status : {error.status}</h4>
      {/* <div>
        <p>{error}</p>
      </div> */}
      <div className="close-error">
        <button onClick={onClose}>Back</button>
      </div>
    </div>
  )
}