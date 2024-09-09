const chisme = document.querySelector(".envia_chisme")
chisme.addEventListener("click", guardar_chisme)




async function guardar_chisme(){
    const el_chisme = document.querySelector("#descripcion").value
    const tipo = document.querySelector("#categoria").value
    const estado = document.querySelector("#estado").value
    const coment = document.querySelector("#comentarios").value
    const hoy = document.querySelector("#fecha").value
    const identifica = document.querySelector("#identificador").value
    var lista2 = JSON.parse(localStorage.getItem("guardado")) || []
    var lista3 = JSON.parse(localStorage.getItem("contado")) || []
    var correccion = false
    lista2.forEach(element => {
        if(element.descripcion === el_chisme){
            alert("Este chisme ya fue contado")
            correccion = true
            
        }
        if(element.id === identifica){
            alert("Este cidentificador ya fue usado porfavor usa otro")
            correccion = true
        }
    })

    lista3.forEach(element => {
        if(element.descripcion === el_chisme){
            alert("Este chisme ya fue contado")
            correccion = true
            
        }
        if(element.id === identifica){
            alert("Este cidentificador ya fue usado porfavor usa otro")
            correccion = true
        }
    })

    if (!el_chisme || !tipo || !estado || !hoy) {
        alert("porfavor llena todos los campos")
        return
    }

    if(correccion === true){
        return
    }

    if( estado === "Guardado" ){
        let chisme_guardado = {
            categoria: tipo,
            descripcion: el_chisme,
            comentario: coment,
            fecha: hoy,
            id: identifica
        }
        
        lista2.push(chisme_guardado)
        localStorage.setItem("guardado", JSON.stringify(lista2))
    }else if( estado === "Contado"){
        let chisme_contado = {
            categoria: tipo,
            descripcion: el_chisme,
            comentario: coment,
            fecha: hoy,
            id: identifica
        }
        
        lista3.push(chisme_contado)
        localStorage.setItem("contado", JSON.stringify(lista3))
    }

}

const mostrador = document.querySelector(".todos")
mostrador.addEventListener("click", mostrar_todos)

function mostrar_todos(){
    const mostrador = JSON.parse(localStorage.getItem("guardado"))
    const mostrador2 = JSON.parse(localStorage.getItem("contado"))
    const escribir = document.querySelector("#listaChismes")
    escribir.innerHTML =""
    mostrador.forEach(element => {
        console.log(element)
        
        
        escribir.innerHTML += `
    <div class="divide">
                    <p>Categoria: Guardados</p>
                    <p>descripcion:${element.descripcion}</p>
                    <p>categoria: ${element.categoria}</p>
                    <p>fecha: ${element.fecha}</p>
                    <p>comentario: ${element.comentario}</p>
                    <p>Identificador: ${element.id}</p>
                        
                </div>
    
    `
    });

    mostrador2.forEach(element => {
        console.log(element)
        escribir.innerHTML += `
    <div class="divide">
                    <p>Categoria: Contados</p>
                    <p>descripcion:${element.descripcion}</p>
                    <p>categoria: ${element.categoria}</p>
                    <p>fecha: ${element.fecha}</p>
                    <p>comentario: ${element.comentario}</p>
                    <p>Identificador: ${element.id}</p>
                        
                </div>
    
    `
    });


    

}


const mostrador2 = document.querySelector(".chis_guardado")
mostrador2.addEventListener("click", mostrar_guardados)

function mostrar_guardados(){
    const mostrador = JSON.parse(localStorage.getItem("guardado"))
    const escribir = document.querySelector("#listaChismes")
    escribir.innerHTML =""
    mostrador.forEach(element => {
        
        
        escribir.innerHTML += `
    <div class="divide">
                    <p>Categoria: Guardados</p>
                    <p>descripcion:${element.descripcion}</p>
                    <p>categoria: ${element.categoria}</p>
                    <p>fecha: ${element.fecha}</p>
                    <p>comentario: ${element.comentario}</p>
                    <p>Identificador: ${element.id}</p>
                </div>
    
    `
    });


}



const mostrador3 = document.querySelector(".chis_contado")
mostrador3.addEventListener("click", mostrar_contado)

function mostrar_contado(){
    const mostrador2 = JSON.parse(localStorage.getItem("contado"))
    const escribir = document.querySelector("#listaChismes")
    escribir.innerHTML =""
    
mostrador2.forEach(element => {
    escribir.innerHTML += `
            <div class="divide">
                <p>Categoria: Contados</p>
                <p>descripcion:${element.descripcion}</p>
                <p>categoria: ${element.categoria}</p>
                <p>fecha: ${element.fecha}</p>
                <p>comentario: ${element.comentario}</p>
                <p>Identificador: ${element.id}</p>
                    
            </div>

`
});
}




const mostrador_per = document.querySelector(".personales")
mostrador_per.addEventListener("click", mostrar_personal)

function mostrar_personal(){
    const mostrador = JSON.parse(localStorage.getItem("contado"))
    const escribir = document.querySelector("#listaChismes")

    let objeto =  mostrador.find(element=> element.categoria === "Personal"
     )
    console.log(objeto)
    escribir.innerHTML =""
    
    escribir.innerHTML += `
            <div class="divide">
                <p>Categoria: Contados</p>
                <p>descripcion:${objeto.descripcion}</p>
                <p>categoria: ${objeto.categoria}</p>
                <p>fecha: ${objeto.fecha}</p>
                <p>comentario: ${objeto.comentario}</p>
                <p>Identificador: ${objeto.id}</p>
                    
            </div>

`

}






const mostrador_labor = document.querySelector(".labores")
mostrador_labor.addEventListener("click", mostrar_labor)

function mostrar_labor(){
    const mostrador = JSON.parse(localStorage.getItem("contado"))
    const escribir = document.querySelector("#listaChismes")

    let objeto =  mostrador.find(element=> element.categoria === "Laboral"
     )
    console.log(objeto)
    escribir.innerHTML =""
    
    escribir.innerHTML += `
            <div class="divide">
                <p>Categoria: Contados</p>
                <p>descripcion:${objeto.descripcion}</p>
                <p>categoria: ${objeto.categoria}</p>
                <p>fecha: ${objeto.fecha}</p>
                <p>comentario: ${objeto.comentario}</p>
                <p>Identificador: ${objeto.id}</p>
                    
            </div>

`

}

const mostrador_fami = document.querySelector(".familiares")
mostrador_fami.addEventListener("click", mostrar_familiar)

function mostrar_familiar(){
    const mostrador = JSON.parse(localStorage.getItem("contado"))
    const escribir = document.querySelector("#listaChismes")

    let objeto =  mostrador.find(element=> element.categoria === "Familiar"
     )
    if (objeto === undefined){
        let mostrador = JSON.parse(localStorage.getItem("guardado"))
        let objeto =  mostrador.find(element=> element.categoria === "Familiar" )
    }else{
        escribir.innerHTML =""
    
        escribir.innerHTML += `
                <div class="divide">
                    <p>Categoria: Contados</p>
                    <p>descripcion:${objeto.descripcion}</p>
                    <p>categoria: ${objeto.categoria}</p>
                    <p>fecha: ${objeto.fecha}</p>
                    <p>comentario: ${objeto.comentario}</p>
                    <p>Identificador: ${objeto.id}</p>
                        
                </div>
    
    `

    }
    

}






