const express = require('express')
const router = express.Router()

const BookModel = require('../models/Book')

// Snippet -> node-express-get
router.get('/', (req, res) => {
  BookModel.find({isbn:{$exists:false}},'title coAuthor isbn')
  .then(result=>res.json(result))
  .catch(err => res.json(err))
})


// POST, snippet->  node-express-post
router.post('/', function (req, res) {
  const newBook = new BookModel(req.body)
  newBook.save()
  .then(result=>res.json(result))
  .catch(err => res.json(err))
})
 // Aggregate lookup
router.get('/aggregate-lookup', (req, res) => {
  BookModel.aggregate([
    {
      $match:{isbn:"979-8602477429"}
    },
    {
      $lookup:{
        from:"authors",
        localField:"authorId",
        foreignField:"_id",
        as:"author"
      }
    },
    {
      project:{title:1, authorName:"$author.name", authorScore:"$author.score"}
    }
  ])
  .then(result=>res.json(result))
  .catch(err => res.json(err))
})


module.exports = router