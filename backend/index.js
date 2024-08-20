require('dotenv').config(); // Wczytywanie zmiennych środowiskowych z .env
const express = require('express');
const cors = require('cors');
const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  BlobSASPermissions,
  generateBlobSASQueryParameters
} = require('@azure/storage-blob');

const app = express();

app.use(cors());
app.use(express.json());

// Konfiguracja Azure Blob Storage
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const AZURE_STORAGE_ACCOUNT_KEY = process.env.AZURE_STORAGE_ACCOUNT_KEY;

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const containerName = 'test'; // Zastąp nazwą swojego kontenera

// Funkcja do generowania SAS URL dla całego kontenera
const generateContainerSasUrl = async (containerClient) => {
  // Ustawienia SAS (Shared Access Signature)
  const sasOptions = {
    containerName: containerName,
    permissions: BlobSASPermissions.parse('r'), // 'r' oznacza uprawnienia do odczytu dla całego kontenera
    startsOn: new Date(),
    expiresOn: new Date(new Date().valueOf() + 3600 * 1000), // SAS ważny przez 1 godzinę
  };

  // Tworzenie obiektu StorageSharedKeyCredential
  const sharedKeyCredential = new StorageSharedKeyCredential(
    AZURE_STORAGE_ACCOUNT_NAME,
    AZURE_STORAGE_ACCOUNT_KEY
  );

  // Generowanie SAS tokenu
  const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();

  // Tworzenie pełnego URL z SAS tokenem dla kontenera
  return `${containerClient.url}?${sasToken}`;
};

// Endpoint do sprawdzania kodu
app.post('/api/check-code', async (req, res) => {
  const { code } = req.body;

  // Przykładowa walidacja kodu
  const validCodes = ['12345', '67890'];

  if (validCodes.includes(code)) {
    try {
      const containerClient = blobServiceClient.getContainerClient(containerName);
      const containerSasUrl = await generateContainerSasUrl(containerClient);

      res.json({ message: 'Kod poprawny!', url: containerSasUrl });
    } catch (error) {
      console.error('Błąd podczas generowania URL:', error);
      res.status(500).json({ message: 'Błąd serwera' });
    }
  } else {
    res.status(400).json({ message: 'Niepoprawny kod.' });
  }
});

// Uruchomienie serwera na porcie 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
