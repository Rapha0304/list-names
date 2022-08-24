 const captura =  () =>  {
   let input = document.getElementById("nomes").value 
   let inputMaiusculo = input.toUpperCase()
   let array = inputMaiusculo.split(" ")
   array.sort()
   console.log(array) 
   
   let divLista = document.createElement("div")
   let lista = document.createTextNode(array)
    divlista.appendChild(lista)
    let divNova = document.getElementById("div1")
    document.body.insertBefore(divLista, divNova)

    
}

