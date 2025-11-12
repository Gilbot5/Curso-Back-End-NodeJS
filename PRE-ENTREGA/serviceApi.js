const urlService = "https://fakestoreapi.com";
const method_get = "GET";
const method_post = "POST";
const method_put = "PUT";
const method_delete = "DELETE";

export async function getAllProducts () {

    try{  
        const response = await fetch(`${urlService}/products`, {
            method: method_get
        });

        const data = await response.json();

        console.log("Los productos son: ");

        data.map((producto) => {
            console.log(producto);
        })

        return data;

    } catch(error){
        console.log(error);
    }
}

export async function getSingleProduct (id) {
     
    try{
        const response = await fetch(`${urlService}/${id}`,{
            method: method_get
        });

        const data = await response.json();

        console.log("La informacion del producto es: ", data);

        return data;

    }catch(error){
        console.log(error);
    }
}

export async function addNewProduct (producto) {
    
    try{  
        const response = await fetch(`${urlService}/products`, {
            method: method_post,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

        const data = await response.json();

        console.log("Producto agregado exitosamente: ", data);

        return data;

    }catch(error){
        console.log(error);
    }
}

export async function updateProduct (producto) {
     
    try{
        const response = await fetch(`${urlService}/products/${producto.id}`,{
            method: method_put,
            headers: {
               "Content-Type" : "application/json "
            },
            body: JSON.stringify(producto)
        });

        const data = await response.json();

        console.log("Producto actualizado: ", data);

        return data;

    }catch(error){
        console.log(error);
    }
}

export async function deleteProduct (id) {
     
    try{
        const response = await fetch(`${urlService}/${id}`,{
            method: method_delete
        });

        const data = await response.json();

        console.log("Producto eliminado exitosamente: ", data);

        return data;

    }catch(error){
        console.log(error);
    }
}
