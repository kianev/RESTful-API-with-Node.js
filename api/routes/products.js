const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'handling GET requests /products'
  })
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'handling POST requests /products'
  })
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if(id === 'special'){
    res.status(200).json({
      message: 'You have discovered Special ID',
      id: id
    })
  }else {
    res.status(200).json({
      message: 'You passed an ID'
    })
  }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
      message: 'Updated Product!'
    })
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted Product!'
  })
});

module.exports = router;