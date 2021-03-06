//Function to collect the best price from the html page
function getBestPrice () {
    //get the Best Price field by its Id
    const bestPriceField = document.getElementById( 'best-price' );
    //get the inner text from the field
    const bestPriceText = bestPriceField.innerText;
    //convert the price into floating point number
    const bestPrice = parseFloat( bestPriceText );
    //return the Best Price wherever the function is called
    return bestPrice;
}

//Function to calculate the memory cost according to memory capacity and price
function calculateMemoryCost ( price ) {
    const memoryCostField = document.getElementById( 'extra-memory-cost' );
    memoryCostField.innerText = price;
    const memoryCostText = memoryCostField.innerText;
    const memoryCost = parseFloat( memoryCostText );
    return memoryCost;
}

//Function to collect the memory cost from the html page
function getMemoryCost ( memory ) {
    // validation for 8GB memory
    if ( memory == 8 ) {
        const extraMemoryCost = calculateMemoryCost( 0 );
        return extraMemoryCost;
    }
    // validation for 16GB Memory
    else if ( memory == 16 ) {
        const extraMemoryCost = calculateMemoryCost( 180 );
        return extraMemoryCost;
    }
}

//Function to calculate the storage cost according to storage capacity and price
function calculateStorageCost ( price ) {
    const storageCostField = document.getElementById( 'extra-storage-cost' );
    storageCostField.innerText = price;
    const storageCostText = storageCostField.innerText;
    const storageCost = parseFloat( storageCostText );
    return storageCost;
}

//Function to collect the storage cost from the html page
function getStorageCost ( storage ) {
    // validation for 256GB SSD Storage
    if ( storage == 256 ) {
        const extraStorageCost = calculateStorageCost( 0 );
        return extraStorageCost;
    }
    // validation for 512GB SSD Storage
    else if ( storage == 512 ) {
        const extraStorageCost = calculateStorageCost( 100 );
        return extraStorageCost;
    }
    // validation for 1TB SSD Storage
    else if ( storage == 1024 ) {
        const extraStorageCost = calculateStorageCost( 180 );
        return extraStorageCost;
    }
}

//Function to calculate the delivery cost according to delivery plan
function calculateDeliveryCost ( price ) {
    const deliveryCostField = document.getElementById( 'delivery-cost' );
    deliveryCostField.innerText = price;
    const deliveryCostText = deliveryCostField.innerText;
    const deliveryCost = parseFloat( deliveryCostText );
    return deliveryCost;
}

//Function to collect the delivery cost from the html page
function getDeliveryCost ( option ) {
    // validation for free delivery
    if ( option == 'free' ) {
        const deliveryCost = calculateDeliveryCost( 0 );
        return deliveryCost;
    }
    // validation for charged delivery
    else if ( option == 'charged' ) {
        const deliveryCost = calculateDeliveryCost( 20 );
        return deliveryCost;
    }
}

//Function to calculate the total price and Final Price with and without promocode
function calculateTotalPrice ( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost ) {
    const totalPriceField = document.getElementById( 'total-price' );
    totalPriceField.innerText = bestPrice + extraMemoryCost + extraStorageCost + deliveryCost;
    const finalTotalFiled = document.getElementById( 'final-total' );

    //Calculate the Final Total Price if the Promocode is already applied
    const applyButton = document.getElementById( 'apply-button' );
    console.log( applyButton );

    //validate the final total price if the promo code is already applied
    if ( applyButton.disabled == true ) {
        finalTotalFiled.innerText = parseFloat( totalPriceField.innerText ) * 0.8;
    }
    //validate the final total price if the promo code is not applied yet
    else {
        finalTotalFiled.innerText = totalPriceField.innerText;
    }
}

//Collect the price of other products when calculate a product price associated with the button clicked
function getRequiredProductCost ( productFieldId ) {
    const extraProductCostField = document.getElementById( productFieldId );
    const extraProductCostText = extraProductCostField.innerText;
    const extraProductCost = parseFloat( extraProductCostText );
    return extraProductCost;
}

//Clicked button design for memory and delivery button
function clickedButtonDesign ( clickedButtonId, otherButtonId ) {
    const clickedButton = document.getElementById( clickedButtonId );
    clickedButton.style.backgroundColor = 'skyblue';
    clickedButton.style.color = 'white';
    const otherButton = document.getElementById( otherButtonId );
    otherButton.style.backgroundColor = 'white';
    clickedButton.style.color = 'black';
}

//Clicked button design for storage buttons
function storageButtonDesign ( clickedButtonId, otherButtonId1, otherButtonId2 ) {
    const clickedButton = document.getElementById( clickedButtonId );
    clickedButton.style.backgroundColor = 'skyblue';
    clickedButton.style.color = 'white';
    const otherButton1 = document.getElementById( otherButtonId1 );
    otherButton1.style.backgroundColor = 'white';
    clickedButton.style.color = 'black';
    const otherButton2 = document.getElementById( otherButtonId2 );
    otherButton2.style.backgroundColor = 'white';
    clickedButton.style.color = 'black';
}

//Event handler for 8GB Unified Memory Button
document.getElementById( 'memory-8-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getMemoryCost( 8 );
    const extraStorageCost = getRequiredProductCost( 'extra-storage-cost' );
    const deliveryCost = getRequiredProductCost( 'delivery-cost' );
    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
    clickedButtonDesign( 'memory-8-button', 'memory-16-button' );
} );

//Event handler for 16GB Unified Memory Button
document.getElementById( 'memory-16-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getMemoryCost( 16 );
    const extraStorageCost = getRequiredProductCost( 'extra-storage-cost' );
    const deliveryCost = getRequiredProductCost( 'delivery-cost' );
    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
    clickedButtonDesign( 'memory-16-button', 'memory-8-button' );
} );

//Event handler for 256GB SSD Storage Button
document.getElementById( 'storage-256-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getRequiredProductCost( 'extra-memory-cost' );
    const extraStorageCost = getStorageCost( 256 );
    const deliveryCost = getRequiredProductCost( 'delivery-cost' );
    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
    storageButtonDesign( 'storage-256-button', 'storage-512-button', 'storage-1tb-button' );
} );

//Event handler for 512GB SSD Storage Button
document.getElementById( 'storage-512-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getRequiredProductCost( 'extra-memory-cost' );
    const extraStorageCost = getStorageCost( 512 );
    const deliveryCost = getRequiredProductCost( 'delivery-cost' );
    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
    storageButtonDesign( 'storage-512-button', 'storage-256-button', 'storage-1tb-button' );
} );

//Event handler for 1TB SSD Storage Button
document.getElementById( 'storage-1tb-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getRequiredProductCost( 'extra-memory-cost' );
    const extraStorageCost = getStorageCost( 1024 );
    const deliveryCost = getRequiredProductCost( 'delivery-cost' );
    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
    storageButtonDesign( 'storage-1tb-button', 'storage-256-button', 'storage-512-button' );
} );

//Event handler for Free Delivery Button
document.getElementById( 'free-delivery-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getRequiredProductCost( 'extra-memory-cost' );
    const extraStorageCost = getRequiredProductCost( 'extra-storage-cost' );
    const deliveryCost = getDeliveryCost( 'free' );
    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
    clickedButtonDesign( 'free-delivery-button', 'charged-delivery-button' );
} );

//Event handler for Charged Delivery Button
document.getElementById( 'charged-delivery-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getRequiredProductCost( 'extra-memory-cost' );
    const extraStorageCost = getRequiredProductCost( 'extra-storage-cost' );
    const deliveryCost = getDeliveryCost( 'charged' );
    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
    clickedButtonDesign( 'charged-delivery-button', 'free-delivery-button' );
} );

//Event handler for promo code Apply button
document.getElementById( 'apply-button' ).addEventListener( 'click', function ( event ) {
    //collect the promo code text from the input field
    const promoCodeInputField = document.getElementById( 'promo-code-input' );
    const promoCodeInputText = promoCodeInputField.value;
    promoCodeInputField.value = '';

    //validation of promo code with pre-defined code 'stevekaku'
    if ( promoCodeInputText != 'stevekaku' ) {
        alert( 'WRONG PROMO CODE!!!' );
    }
    else {
        const finalTotalField = document.getElementById( 'final-total' );
        const finalTotalText = finalTotalField.innerText;
        const finalTotal = parseFloat( finalTotalText );
        finalTotalField.innerText = finalTotal * 0.8;
        event.target.disabled = true;
        event.target.style.backgroundColor = 'gray';
    }
} );