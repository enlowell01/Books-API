const router = require('express').Router()
const book = require('../models/book')


router.get('/', async (req, res) => {
    try {
        console.log('Hello World!')
        res.json({ message: 'Hello World!' })
    } catch (error) {
        console.log('Error getting page', error)
        res.status(404).json({ message: 'Error 404' })
    }
})

router.get('/books', async (req, res) => {
    try {
        const books = await book.find()
        res.json(books)
    } catch (error) {
        console.log('error retreiving books:', error)
        res.json({ message: 'error retreving books' })
    }
})

router.get('/books/:id', async (req, res) => {
    const { id } = req.params
    try {
        const books = await book.findById(id)
        res.json(books)
    } catch (error) {
        console.log('error retreiving book:', error)
        res.status(404).json({ message: `error retreiving book with id ${id}` })
    }
})

router.post('/books', async (req, res) => {
    try {
        const books = await new book(req.body).save()
        res.json(books)
    } catch (error) {
        console.log('Error making book:', error)
        res.status(500).json({ message: 'Error making book' })
    }
    
})

router.put('/books/:id', async (req, res) => {
    try {
        const { id } = req.params
        await book.findByIdAndUpdate(id, req.body)
        console.log('Book updated')
        res.status(303).json({ message: 'Book updated' })
    } catch (error) {
        console.log('Error updating book:', error)
        res.status(500).json({ message: 'Error updating book' })
    }
})

router.delete('/books/:id', async (req, res) => {
    try {
        const { id } = req.params
        await book.findByIdAndDelete(id)
        console.log('Book deleted')
        res.status(303).json({ message: 'Book deleted' })
    } catch (error) {
        console.log('Error deleting book:', error)
        res.status(500).json({ message: 'Error deleting book' })
    }
})

module.exports = router