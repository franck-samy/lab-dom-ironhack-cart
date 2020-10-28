// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const priceVal = price.innerHTML;
  const quantityVal = quantity;
  const subtotalVal = Number(`${quantity * priceVal}`);

  return (product.querySelector(".subtotal span").innerHTML = `${subtotalVal}`);

  console.log('quantity', quantity);
  console.log('price', priceVal);
  console.log('quantity', quantityVal);
  console.log('subtotal', subtotalVal)

  console.log('Calculating subtotal', subtotalVal);
}


//... your code goes here


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const allProducts = document.querySelectorAll('tr.product');

  allProducts.forEach(function (element) {
    updateSubtotal(element);
  });

  // ITERATION 3
  //... your code goes here
  const totalVal = Number(`${allProducts.quantity * allProducts.priceVal}`);
  return (allProducts.getElementById["#total-value"].innerHTML = `${totalValue}`);

}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
