const app = require('./app')

app.listen(3306, () => {
    console.log(`server is running in port ${3306}`)
})