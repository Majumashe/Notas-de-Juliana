// 3 amigos quieren comprar el helado mas caro que puedan con el dinero que tienen.
document.write("Lista de precios de los helados. <br> Paleta de agua: $0.6 USD <br> Paleta de leche: $1 USD <br> Helado platillo: $1.6 USD <br> Helado Polet: $1.8 USD <br> Helado Bocatto: $2.8 USD <br> Litro de helado de vainilla: $2.9 USD  ")
let amigo1 = "Cofla";
let amigo2 = "Roberto";
let amigo3 = "Pedro";
dineroAmigo1 = prompt(`¿Que cantidad de dinero tienes ${amigo1}?`);
dineroAmigo2 = prompt(`¿Que cantidad de dinero tienes ${amigo2}?`);
dineroAmigo3 = prompt(`¿Que cantidad de dinero tienes ${amigo3}?`);
// Para optimizar el codigo pudimos crear una funcion pero lo haremos mas adelante. Estamos practicando.
// COFLA
if (dineroAmigo1 >= 0.6 && dineroAmigo1 < 1){
    alert(amigo1+". Compra una paleta de agua");
    let precio = 0.6;
    alert("Te sobraron "+(dineroAmigo1-precio));
} 
else if(dineroAmigo1 >=1 && dineroAmigo1 < 1.6){
    alert(amigo1+". Compra una paleta de leche");
    let precio = 1;
    alert("Te sobraron "+(dineroAmigo1-precio));
}
else if(dineroAmigo1 >=1.6 && dineroAmigo1 < 1.8){
    alert(amigo1+". Compra un helado Platillo");
    let precio = 1.6;
    alert("Te sobraron "+(dineroAmigo1-precio));
}
else if(dineroAmigo1 >=1.8 && dineroAmigo1 < 2.8){
    alert(amigo1+". Compra una helado Polet");
    let precio = 1.8;
    alert("Te sobraron "+(dineroAmigo1-precio));
}
else if(dineroAmigo1 >=2.8 && dineroAmigo1 < 2.9){
    alert(amigo1+". Compra un helado Bocatto");
    let precio = 2.8;
    alert("Te sobraron "+(dineroAmigo1-precio));
}
else if(dineroAmigo1 >=2.9){
    alert(amigo1+". Compra un litro de helado de vainilla");
    let precio = 2.9;
    alert("Te sobraron "+(dineroAmigo1-precio));
}
else{
    alert(`Lo sentimos ${amigo1}, el dinero no te alcanza para ninguno de nuestros helados`);
}
// ROBERTO
if (dineroAmigo2 >= 0.6 && dineroAmigo2 < 1){
    alert(amigo2+". Compra una paleta de agua");
    let precio = 0.6;
    alert("Te sobraron "+(dineroAmigo2-precio));
} 
else if(dineroAmigo2 >=1 && dineroAmigo2 < 1.6){
    alert(amigo2+". Compra una paleta de leche");
    let precio = 1;
    alert("Te sobraron "+(dineroAmigo2-precio));
}
else if(dineroAmigo2 >=1.6 && dineroAmigo2 < 1.8){
    alert(amigo2+". Compra un helado Platillo");
    let precio = 1.6;
    alert("Te sobraron "+(dineroAmigo2-precio));
}
else if(dineroAmigo2 >=1.8 && dineroAmigo2 < 2.8){
    alert(amigo2+".Compra una helado Polet");
    let precio = 1.8;
    alert("Te sobraron "+(dineroAmigo2-precio));
}
else if(dineroAmigo2 >=2.8 && dineroAmigo2 < 2.9){
    alert(amigo2+".Compra un helado Bocatto");
    let precio = 2.8;
    alert("Te sobraron "+(dineroAmigo2-precio));
}
else if(dineroAmigo2 >=2.9){
    alert(amigo2+".compra un litro de helado de vainilla");
    let precio = 2.9;
    alert("Te sobraron "+(dineroAmigo2-precio));
}
else{
    alert(`Lo sentimos ${amigo2}, el dinero no te alcanza para ninguno de nuestros helados`);
}
// PEDRO
if (dineroAmigo3 >= 0.6 && dineroAmigo3 < 1){
    alert(amigo3+". Compra una paleta de agua");
    let precio = 0.6;
    alert("Te sobraron "+(dineroAmigo3-precio));
} 
else if(dineroAmigo3 >=1 && dineroAmigo3 < 1.6){
    alert(amigo3+". Compra una paleta de leche");
    let precio = 1;
    alert("Te sobraron "+(dineroAmigo3-precio));
}
else if(dineroAmigo3 >=1.6 && dineroAmigo3 < 1.8){
    alert(amigo3+". Compra un helado Platillo");
    let precio = 1.6;
    alert("Te sobraron "+(dineroAmigo3-precio));
}
else if(dineroAmigo3 >=1.8 && dineroAmigo3 < 2.8){
    alert(amigo3+". Compra una helado Polet");
    let precio = 1.8;
    alert("Te sobraron "+(dineroAmigo3-precio));
}
else if(dineroAmigo3 >=2.8 && dineroAmigo3 < 2.9){
    alert(amigo3+". Compra un helado Bocatto");
    let precio = 2.8;
    alert("Te sobraron "+(dineroAmigo3-precio));
}
else if(dineroAmigo3 >=2.9){
    alert(amigo3+". Compra un litro de helado de vainilla");
    let precio = 2.9;
    alert("Te sobraron "+(dineroAmigo3-precio));
}
else{
    alert(`Lo sentimos ${amigo3}, el dinero no te alcanza para ninguno de nuestros helados`);
}
