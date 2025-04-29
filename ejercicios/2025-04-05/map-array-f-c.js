function convertTemps(array) {
    return array.map(                
      function(temp) {              
        return (temp - 32) * 5 / 9
      }
    );
  }
  
  var array = [23, 140, 212, 41];
  var result = convertTemps(array);
  
  console.log(result);
  