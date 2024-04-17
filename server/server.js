const express = require('express');
const axios = require('axios');
const cors = require('cors'); // for enabling Cross-Origin Resource Sharing

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Route to fetch most popular articles from NYT
app.get('/mostPopular/:section', async (req, res) => {
    const { section } = req.params;
    const apiKey = '7aa27d62f4964104bad539585e0aaf61'; // Replace with your NYT API key

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/.json`, {
            params: {
                'api-key': apiKey
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching most popular articles:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
