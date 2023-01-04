const express = require('express');
const { getLinkPreview } = require('link-preview-js');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'https://gauth.co.kr'],
  methods: '*',
  allowedHeaders: '*',
  credentials: true
};
app.use(cors(corsOptions));

app.get('/:url(*)', (req, res) => {
  const url = req.params.url
  getLinkPreview(url)
    .then(data => {
      if (data.images[0]) 
        res.send({
          'image': data.images[0]
        });
      else
        res.status(404).send('Not found twitter image')
    })
    .catch(_ => {
      res.status(404).send('Not found twitter image');
    });
});

app.listen('3001');
