const codigoDescuento = 'DESCUENTO2024'

function validarCodigoDescuento(codigo){
    return new Promise((resolve, reject)=>{   

           if(codigo === codigoDescuento){
               resolve('Codigo de descuento valido')
           } else {
               reject('Codigo de descuento invalido')
           }
        }
      )
    }
   
 
validarCodigoDescuento('DESCUENTO2024')
.then(res=>{
     console.log(res)
})

.catch(error=>{
     console.log(error)
})