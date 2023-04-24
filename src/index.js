
import app from './app'
//product manager
const ProductMan = new ProductManager("./products.txt"); 
app.get("/", (req, res) => {
    console.log('hola');
    res.send('hellow');
   });
  
app.get("/product", async (req, res) =>{
     const products =  await ProductMan.getProducts()
     //console.log(products)
    res.send(products)
 })

app.get("/product/:id", async (req, res) => {
    const id=req.params.id;
    console.log(id);
    const product = await ProductMan.getProductById(id)
    res.send(product)
})

//enviar un mensaje
socket.emit("mensaje", 'hola mundo')
//recibir un mensaje
io.on('conection', (socket)=>{ //cuando se establesca la conexion
socket.on('mensaje', info =>{
    console.log(info)
})

})

  app.listen(PORT);