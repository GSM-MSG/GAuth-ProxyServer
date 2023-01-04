const express = require('express');
const { getLinkPreview } = require('link-preview-js');

const app = express();

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

app.listen(port);
