/*Agregar producto*/ 
let inventory = [
    { code: "101", name: 'DeTodito', category: 'snaks', quantity: 7 },
    { code: "102", name: 'Tostacos', category: 'snask', quantity: 3 },
    { code: "103", name: 'Bombombun', category: 'dulces', quantity: 2 },
    { code: "104", name: 'Cerveza poker lata 330 ml', category: 'refrigerado', quantity: 45 },
    { code: "105", name: 'Gaseosa 350 ML POSTOBON', category: 'refrigerado', quantity: 7 },
    { code: "106", name: 'Agua Polar 350 ml', category: 'refrigerado', quantity: 6 },
    { code: "107", name: 'Agua con gas saboriada 350 ml', category: 'refrigerado', quantity: 4 },
    { code: "108", name: 'caja pequena chicles x2 unidades', category: 'dulces', quantity: 150 },
    { code: "109", name: 'Aguardiente tapa azul(x 1/2)', category: 'seco', quantity: 10 },
    { code: "110", name: 'Aguardiente tapa roja (x 1/2)', category: 'seco', quantity: 10 },
    { code: "111", name: 'Cerveza pilsen 350 en lata ', category: 'refrigerado', quantity: 16 },
    { code: "112", name: 'Cerveza Aguila lith en la 350 ml', category: 'refrigerado', quantity: 30 },
    { code: "113", name: 'Traident pequeno x2 unidades', category: 'dulces', quantity: 20 },
    { code: "114", name: 'Cerveza Aguila negra 350 ml en lata', category: 'refrigerado', quantity: 30 },
    { code: "115", name: 'Botella Aguardiente', category: 'seco', quantity: 30 },
    { code: "116", name: 'Botella Ron', category: 'seco', quantity: 20 },
    { code: "117", name: 'Gatorade 350 ml', category: 'refrigerado', quantity: 40 },
    { code: "118", name: 'Cerveza Like', category: 'refrigerado', quantity: 20 },
    { code: "119", name: 'vive 100 400 ml', category: 'refrigerado', quantity: 45 },
    { code: "120", name: 'Spik Mas', category: 'refrigerado', quantity: 30 },
    { code: "121", name: 'butifarra', category: 'snask', quantity: 28 },
    { code: "122", name: 'Baileys (x botella)', category: 'seco', quantity: 6 },
    { code: "123", name: 'Chocolatina Jumbo X2 UNIDADES', category: 'snask', quantity: 12 },
    { code: "124", name: 'Arepa Con Salchichon', category: 'snask', quantity: 18 },
    { code: "125", name: 'Coca Cola 350 ml', category: 'refrigerado', quantity: 10 },
    { code: "126", name: 'paquete Cigarrillo Boston', category: 'snask', quantity: 36 },
    { code: "127", name: 'medio paquete cigarrillo', category: 'snask', quantity: 18 },
    { code: "128", name: 'Brandy DOMEQ (x botella)', category: 'seco', quantity: 8 },
    { code: "129", name: 'Bretaña 8.5oz (x 250ml)', category: 'refrigerado', quantity: 9 },
    { code: "130", name: 'Bretaña postobon 10oz (x 300ml)', category: 'refrigerado', quantity: 9 },
   
];

let currentUser = null;


function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function showInventory() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    inventory.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `Código: ${product.code}  Nombre: ${product.name}  Categoria:${product.category}  Cantidad: ${product.quantity}`;
        productList.appendChild(li);
    });
}

function showAddProductForm() {
}

function hideAddProductForm() {
    showMessage('');
}

function addProduct() {
    const codeProduct = document.getElementById('product-code').value;
    const productName = document.getElementById('product-name').value;
    const productCategory = document.getElementById('product-category').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value, 10);

    if (productName && productCategory && !isNaN(productQuantity) && productQuantity > 0 && codeProduct.length == 5) {
        inventory.push({code: codeProduct, name: productName, category: productCategory, quantity: productQuantity });
        showInventory();
        hideAddProductForm();
        showMessage('Producto agregado al inventario.');
    } else {
        showMessage('Por favor, ingrese un nombre de producto válido y una cantidad válida.');
    }
}
/*Actualizar*/
function actualizar() {
    const codeProduct = document.getElementById('product-code').value;
    const productName = document.getElementById('product-name').value;
    const productCategory = document.getElementById('product-category').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value, 10);

    if (productName && productCategory && !isNaN(productQuantity) && productQuantity > 0 && codeProduct.length == 5) {
        inventory.push({code: codeProduct, name: productName, category: productCategory, quantity: productQuantity });
        showInventory();
        hideactualizarForm();
        showMessage('Producto actualizado al inventario.');
    } else {
        showMessage('Por favor, ingrese un nombre de producto válido y una cantidad válida.');
    }
}
/*buscar*/
function buscarProducto() {
    const codigoNombreBuscado = document.getElementById('buscarCodigoNombre').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultadoBusqueda');
    resultadoDiv.innerHTML = '';

    const matchingProducts = inventory.filter(
        (p) => p.code.toLowerCase().includes(codigoNombreBuscado) || p.name.toLowerCase().includes(codigoNombreBuscado)
    );

    if (matchingProducts.length > 0) {
        matchingProducts.forEach((product) => {
            const li = document.createElement('li');
            li.textContent = `Código: ${product.code}  Nombre: ${product.name}  Cantidad: ${product.quantity}`;
            resultadoDiv.appendChild(li);
        });
    } else {
        showMessage('Producto no encontrado', 'resultadoBusqueda');
    }
}
/*buscar eliminar*/
function buscarYEliminarProducto() {
    const codigoBuscado = document.getElementById('codigoEliminar').value;
    const resultadoDiv = document.getElementById('resultadoEliminar');
    resultadoDiv.innerHTML = '';

    const product = inventory.find((p) => p.code === codigoBuscado);

    if (product) {
        showProductInfo(product, 'resultadoEliminar');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => deleteProduct(product.code, 'resultadoEliminar'));

        resultadoDiv.appendChild(deleteButton);
    } else {
        showMessage('Producto no encontrado', 'resultadoEliminar');
    }
}

function deleteProduct(code, targetId) {
    const index = inventory.findIndex((p) => p.code === code);

    if (index !== -1) {
        const product = inventory[index];

        const confirmDelete = confirm(`¿Estás seguro de que deseas eliminar el producto?\nCódigo: ${product.code}\nNombre: ${product.name}\nCantidad: ${product.quantity}`);

        if (confirmDelete) {
            inventory.splice(index, 1);
            showInventory();
            showMessage('Producto eliminado del inventario.', targetId);
        }
    }
}

//Exportar a pdf
let inventarioExportar = [];
inventory.forEach((element, index, array)=>{
    inventarioExportar.push([element.code, element.name, element.category, element.quantity]);
});

button.addEventListener('click', (e)=>{
    let doc = new jsPDF();
    
    let styles = {
        fillColor: [100, 100, 255], 
        textColor: [255, 255, 255],  
    };

    let cellStyles = {
        fillColor: [200, 200, 200],  
        textColor: [140, 86, 74],  
    };
    
    doc.autoTable({
    head:[['Código','Nombre','Categoría','Cantidad']],
    body: inventarioExportar,    
    theme: 'grid',  
    styles: styles,
    columnStyles: { 0: { cellStyles } },  // Aplicar estilos a una columna específica        
    })
    doc.save("Inventario_CasaHipHopMed.pdf")
})

showInventory()

