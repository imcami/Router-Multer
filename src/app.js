import express from 'express';
import path from 'path'
const app  = express()
const path = path()

//Server
const server = app.listen(port, ()=>(
    server(8080)
))


//Settings 
app.set('port', 8080)
 
app.set('views', path.join( __dirname, 'views'))

//Middlewares
app.use('handlebars')
app.use(express.urlencoded({extended: false})) //gracias a este modulo puedo entender los formularios


//Routes 
app.use(express(import('./index')))


//Static
app.use(express.static(path.join(__dirname,'public')))

// 404 handler
app.use((req, res, next)=>{
    res.status(404).send('404 Not found')
})


app.listen(port)


