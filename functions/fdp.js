const fdp = (req) => {
    let bikeQuantity = 0;
    let totalPanier = 0;
  
    if (!req.session.fraisDePort) {
      req.session.fraisDePort = 0;
    }
  
    for (i = 0; i < req.session.dataCardBike.length; i++) {
      bikeQuantity += req.session.dataCardBike[i].quantity;
      totalPanier +=
        req.session.dataCardBike[i].price * req.session.dataCardBike[i].quantity;
    }
  
    req.session.fraisDePort = bikeQuantity * 30;
  
    totalPanier >= 4000
      ? (req.session.fraisDePort = 0)
      : totalPanier >= 2000
      ? (req.session.fraisDePort = req.session.fraisDePort * 0.5)
      : (req.session.fraisDePort = bikeQuantity * 30);

      console.log({ bikeQuantity, totalPanier, fdp: req.session.fraisDePort });
      
} 

module.exports = fdp;