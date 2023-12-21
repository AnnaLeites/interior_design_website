// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/processData', (req, res) => {
  const { selectedRoom, inputValue } = req.body;

  // Call Python function with selectedRoom and inputValue
  const options = {
    mode: 'text',
    pythonPath: 'python3', // Update with your Python executable path
    pythonOptions: ['-u'], // unbuffered mode
    scriptPath: '../../interior/python/functions', // Update with the path to your Python scripts
    args: [selectedRoom, inputValue],
  };

//   PythonShell.run('fun.py', options, (err, results) => {
//     if (err) {
//       console.error('Error running Python script:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       // Parse the results (assuming it's an array of image URLs)
//       const imgUrls = results.map((result) => result.trim());
//       //console.log('results: ', results);
//       // Send the image URLs back to the frontend
//       res.json({ imgUrls });
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
