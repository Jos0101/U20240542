 
function stockProducto(cantidad){
    return new Promise((resolve, reject)=>{   

           if(cantidad <= 100 ){
               resolve('Stock suficiente para ' + cantidad)
           } else {
               reject('Stock insuficiente')
           }
         }
       )
    }
   
stockProducto(100)
.then(res=>{
     console.log(res)
})

.catch(error=>{
     console.log(error)
})