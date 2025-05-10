// thumbnail-server.js
const express = require('express');
const axios = require('axios');
const sharp = require('sharp');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        const imageUrl = decodeURIComponent(req.query.url);
        const size = req.query.size || '800x600';
        const [width, height] = size.split('x').map(Number);
        
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = await sharp(response.data)
            .resize(width, height, { fit: 'inside' })
            .jpeg({ quality: 80 })
            .toBuffer();
            
        res.type('jpeg').send(buffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating thumbnail');
    }
});

app.listen(PORT, () => console.log(`Thumbnail server running on port ${PORT}`));
