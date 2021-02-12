const app = require('./app')
const { successMsg } = require('./functions')
const port = process.env.PORT

app.listen(port, () => {
  successMsg(`server running on port:${port}`)
})
