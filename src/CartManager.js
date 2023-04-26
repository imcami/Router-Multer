export class CartManager {
    constructor(path){
         this.path = path //mediante el path hago todas las operaciones del txt
         this.cart = [];
         this.incrementId = 1;
 
   }  

   //id del producto
   static incrementId() {
    if (this.incrementId) {
       this.incrementId++
          } else {
           this.incrementId = 1
          }
          return this.incrementId
       } 
    
        productExists () {
           if (this.productExists){
            this.addToCartById
           }else{
            console.error('product not exist')
           }
       } 
       //Agrega los productos por Id
   async addToCartById(id){
    //conversion 
     const prodsJSON =  await fs.readFile(this.path, 'utf-8')
     console.log(prodsJSON);
     const prods = JSON.parse(prodsJSON);
     //console.log(prods);
     const product = prods.find(p => p.id == id);
     if (!product) {
      console.error(`Product id not found ${id}`);
      }else{
      return product;
      }
    }
//elimina los productos por id
    delateProduct(id){
        const productIndex =this.products.findIndex(product => product.id === id);
        if(productIndex === -1){
          console.error(`product id ${id} does not finded`)
          return;
        }
        this.products.splice(productIndex, 1)
        this.saveProducts();
        console.log(`product id  ${id} successfully delated `)
        }
    

            
}
 



