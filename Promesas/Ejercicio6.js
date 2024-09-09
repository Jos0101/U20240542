function compraLinea(monto){
    return new Promise((resolve, reject)=>{   

           if(monto > 0 ){
               resolve('Compra completada por: $' + monto)
           } else {
               reject('Monto invalido para la compra')
           } 
         }
       )
    }
   
 
compraLinea(1)
.then(res=>{
     console.log(res)
})

.catch(error=>{
     console.log(error)
})