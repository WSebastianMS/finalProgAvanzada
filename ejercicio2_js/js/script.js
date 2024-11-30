const registroForm = document.forms["discountForm"];
const productName = document.getElementById(productName);
const productCategory = document.getElementById(productCategory);
const costPerUnit =document.getElementById(costPerUnit);
const units = document.getElementById(units);
const discount = document.getElementById(discount);

function calcular() {

    let totalDiscount;
    discount.textContent = "";

    switch(productCategory){
        case A:
            if(units>0&&units<10){
                totalDiscount = costPerUnit * 0.01;
                discount.textContent = "El descuento de su compra es: ", totalDiscount;

            }
            if(units>10&&units<21){
                totalDiscount = costPerUnit * 0.015;
                discount.textContent = "El descuento de su compra es: ", totalDiscount;
                
            }
            if(units>20){
                totalDiscount = costPerUnit * 0.02;
                discount.textContent = "El descuento de su compra es: ", totalDiscount;
            
            }
            
            break;
        case B:
            if(units>0&&units<10){
                totalDiscount = costPerUnit * 0.012;
                discount.textContent = "El descuento de su compra es: ", totalDiscount;

            }
            if(units>10&&units<21){
                totalDiscount = costPerUnit * 0.02;
                discount.textContent = "El descuento de su compra es: ", totalDiscount;
                
            }
            if(units>20){
                totalDiscount = costPerUnit * 0.03;
                discount.textContent = "El descuento de su compra es: ", totalDiscount;
            
            }
            break;
        case C:
            if(units>0&&units<10){
                totalDiscount = costPerUnit * 0;
                discount.textContent = "El descuento de su compra es: ", totalDiscount;

            }
            if(units>10&&units<21){
                totalDiscount = costPerUnit * 0.005;
                discount.textContent = "El descuento de su compra es: ", totalDiscount;
                
            }
            if(units>20){
                totalDiscount = costPerUnit * 0.01;
                discount.textContent = "El descuento de su compra es: ", totalDiscount;
            
            }
        break
        default:
            
    }
}



