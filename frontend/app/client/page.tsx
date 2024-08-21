"use client";

import { useState } from 'react';
import Layout from '../components/Layout';

const Client = () => {
  const [code, setCode] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [responseUrl, setResponseUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Wysyłanie kodu do backendu
    const res = await fetch('http://localhost:5000/api/check-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();
    setResponseMessage(data.message);
    setResponseUrl(data.photos);
    console.log(data.photos);

    // Jeśli otrzymano URL, przekierowanie użytkownika
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <Layout>
      <h1>Client</h1>
      <p>Strefa Clienta. Proszę wpisać swój kod dostępu.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Wpisz kod"
          required
        />
        <button type="submit">Sprawdź kod</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </Layout>
  );
};

export default Client;
