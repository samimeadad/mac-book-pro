function getBestPrice() {
    const bestPriceField = document.getElementById( 'best-price' );
    const bestPriceText = bestPriceField.innerText;
    const bestPrice = parseFloat( bestPriceText );
    return bestPrice;
}

function calculateMemoryCost( price ) {
    const memoryCostField = document.getElementById( 'extra-memory-cost' );
    memoryCostField.innerText = price;
    const memoryCostText = memoryCostField.innerText;
    const memoryCost = parseFloat( memoryCostText );
    return memoryCost;
}

function getMemoryCost( memory ) {
    if ( memory == 8 ) {
        const extraMemoryCost = calculateMemoryCost( 0 );
        return extraMemoryCost;
    }
    else if ( memory == 16 ) {
        const extraMemoryCost = calculateMemoryCost( 180 );
        return extraMemoryCost;
    }
}

function calculateStorageCost( price ) {
    const storageCostField = document.getElementById( 'extra-storage-cost' );
    storageCostField.innerText = price;
    const storageCostText = storageCostField.innerText;
    const storageCost = parseFloat( storageCostText );
    return storageCost;
}

function getStorageCost( storage ) {
    if ( storage == 256 ) {
        const extraStorageCost = calculateStorageCost( 0 );
        return extraStorageCost;
    }
    else if ( storage == 512 ) {
        const extraStorageCost = calculateStorageCost( 100 );
        return extraStorageCost;
    }
    else {
        const extraStorageCost = calculateStorageCost( 180 );
        return extraStorageCost;
    }
}

function calculateDeliveryCost( price ) {
    const deliveryCostField = document.getElementById( 'delivery-cost' );
    deliveryCostField.innerText = price;
    const deliveryCostText = deliveryCostField.innerText;
    const deliveryCost = parseFloat( deliveryCostText );
    return deliveryCost;
}

function getDeliveryCost( option ) {
    if ( option == 'free' ) {
        const deliveryCost = calculateDeliveryCost( 0 );
        return deliveryCost;
    }
    else {
        const deliveryCost = calculateDeliveryCost( 20 );
        return deliveryCost;
    }
}

function calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost ) {
    const totalPriceFiled = document.getElementById( 'total-price' );
    totalPriceFiled.innerText = bestPrice + extraMemoryCost + extraStorageCost + deliveryCost;
    document.getElementById( 'final-total' ).innerText = totalPriceFiled.innerText;
}

function getRequiredProductCost( productFieldId ) {
    const extraProductCostField = document.getElementById( productFieldId );
    const extraProductCostText = extraProductCostField.innerText;
    const extraProductCost = parseFloat( extraProductCostText );
    return extraProductCost;
}

document.getElementById( 'memory-8-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getMemoryCost( 8 );
    const extraStorageCost = getRequiredProductCost( 'extra-storage-cost' );
    const deliveryCost = getRequiredProductCost( 'delivery-cost' );

    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
} );

document.getElementById( 'memory-16-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getMemoryCost( 16 );
    const extraStorageCost = getRequiredProductCost( 'extra-storage-cost' );
    const deliveryCost = getRequiredProductCost( 'delivery-cost' );

    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
} );

document.getElementById( 'storage-256-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getRequiredProductCost( 'extra-memory-cost' );
    const extraStorageCost = getStorageCost( 256 );
    const deliveryCost = getRequiredProductCost( 'delivery-cost' );

    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
} );

document.getElementById( 'storage-512-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getRequiredProductCost( 'extra-memory-cost' );
    const extraStorageCost = getStorageCost( 512 );
    const deliveryCost = getRequiredProductCost( 'delivery-cost' );

    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
} );

document.getElementById( 'storage-1tb-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getRequiredProductCost( 'extra-memory-cost' );
    const extraStorageCost = getStorageCost( 1024 );
    const deliveryCost = getRequiredProductCost( 'delivery-cost' );

    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );

} );

document.getElementById( 'free-delivery-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getRequiredProductCost( 'extra-memory-cost' );
    const extraStorageCost = getRequiredProductCost( 'extra-storage-cost' );
    const deliveryCost = getDeliveryCost( 'free' );

    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
} );

document.getElementById( 'charged-delivery-button' ).addEventListener( 'click', function () {
    const bestPrice = getBestPrice();
    const extraMemoryCost = getRequiredProductCost( 'extra-memory-cost' );
    const extraStorageCost = getRequiredProductCost( 'extra-storage-cost' );
    const deliveryCost = getDeliveryCost( 'charged' );

    calculateTotalPrice( bestPrice, extraMemoryCost, extraStorageCost, deliveryCost );
} );