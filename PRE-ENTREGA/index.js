import { getAllProducts, getSingleProduct, addNewProduct, updateProduct, deleteProduct } from "./serviceApi.js";

const argumentos = process.argv.slice(2);
const method_get = "GET";
const method_post = "POST";
const method_put = "PUT";
const method_delete = "DELETE";
const products = "products";

if (argumentos[0] == method_get && argumentos[1] == products){

    getAllProducts();

}else if(argumentos[0] == method_get && argumentos[1].includes(products)){

    getSingleProduct(argumentos[1]);

}else if (argumentos[0] == method_post && argumentos[1] == products && argumentos.length == 5){

    const producto = {
        title: argumentos[2],
        price: argumentos[3],
        category: argumentos[4]
    };
    addNewProduct(producto);

}else if (argumentos[0] == method_put && argumentos[1] == products && /^[0-9]+$/.test(argumentos[2])){

    const producto = {
        id: Number(argumentos[2]),
        title: argumentos[3],
        price: argumentos[4],
        category: argumentos[5]
    };
    updateProduct(producto);

}else if (argumentos[0] == method_delete && argumentos[1].includes(products)) {

    deleteProduct(argumentos[1]);

}else{
    console.log("Comando erroneo...");
}
