function ejecutarCodigo(iteraciones){
    setTimeout(function(){
          console.log("hola nano");
          
          if (--iteraciones) //Si es > 0, que siga llamando a la función
              ejecutarCodigo(iteraciones)
      }, 1000);
  }
  
  ejecutarCodigo(5);