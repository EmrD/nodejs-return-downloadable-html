import express from 'express';
import path from 'path';
const app = express();

app.use(express.static('.')); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); 
});

app.get('/get_info', (req, res) => {
  const htmlContent = `<h1>Informations for ${req.query.user}</h1>`; // Replace with actual informations from database
  res.setHeader('Content-disposition', 'attachment; filename=user_info.html');
  res.setHeader('Content-type', 'text/html');
  res.send(htmlContent);
});

app.listen(3000, () => {
  console.log(`listening on http://localhost:3000`);
});