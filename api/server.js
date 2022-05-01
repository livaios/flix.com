const express = require('express')
const cors = require('cors')
const app = express()

const movies = ['Pulp Fiction', 'Naked Lunch', 'La Haine', 'The Godfather', 'The Godfather: Part II', 'Man Bites Dog', 'The Departed', 'Umberto D.', 'White Heat']

const corsOptions = {
    origin: '*',
}
app.options('*', cors(corsOptions))
app.use(cors(corsOptions))
app.get('/movies', (req, res) => {
    res.send(movies)
})
// Handling 404
app.use((req, res) => {
    res.status(404).send({ err: 'We can not find what you are looking for' })
})
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on ${port}.`))
