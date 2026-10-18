const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'LIVE', message: 'Tearcher GBM API is LIVE!' });
});

app.post('/api/login', (req, res) => {
  res.json({ success: true, token: 'real-token-123' });
});

app.get('/api/data', (req, res) => {
  res.json({ teachers: [] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on ' + PORT));
