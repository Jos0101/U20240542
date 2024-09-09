 
function enviarCorreo(correo){
    return new Promise((resolve, reject)=>{
       console.log('Enviando correo a...' + correo)
      setTimeout(() => {
           if(correo){
               resolve('Correo enviado a: ' + correo)
           }else{
               reject('Direccion de correo no proporcionada')
           }
       
        }, 2000);
      }
    )
 }

enviarCorreo('stanArgueta@gmail.com')
 .then(res=>{
      console.log('mensaje: ' + res)
})

.catch(error=>{
      console.log(error)
})