
const stripe = Stripe('pk_test_51IbkXFLPFiZWWNCV29EmGC8VVNGM7hOXy1iRPN83tiM5hsaTwQazzKTXi8iAJZBqRb49MRhPR5V0h1Z1a3yHD3PN00obYZSJPd');

var checkoutButton = document.getElementById('checkout-button');


checkoutButton.addEventListener('click', function() {
  // Create a new Checkout Session using the server-side endpoint you
  // created in step 3.
  fetch('/create-checkout-session', {
    method: 'POST',

  })
  .then(function(response) {
    return response.json();
  })
  .then(function(session) {
    return stripe.redirectToCheckout({ sessionId: session.id });
  })
  .then(function(result) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, you should display the localized error message to your
    // customer using `error.message`.
    if (result.error) {
      alert(result.error.message);
    }
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
});


/*
for(var i=0;i<req.session.dataCardBike.length;i++){

  stripeItems.push({
    price_data: {
      currency: 'eur',
      product_data: {
        name: req.session.dataCardBike[i].name,
      },
      unit_amount: req.session.dataCardBike[i].price * 100,

    },
    quantity: req.session.dataCardBike[i].quantity,
  });

}

*/