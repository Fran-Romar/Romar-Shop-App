export const ftrendProduct = (products) => {
    let productoMasRating = null;

    if (products && products.length > 0) {
      productoMasRating = products[0];
      for (let i = 1; i < products.length; i++) {
        if (
          products[i].rating &&
          products[i].rating.rate > productoMasRating.rating.rate
        ) {
          productoMasRating = products[i];
        }
      }
    }
    return productoMasRating;
  };

  export const f10trendproducts = (products) => {
    const trendsProducts = products.sort(function(a,b){
        return b.rating.rate - a.rating.rate;
    });

    return trendsProducts.slice(0,10);
  }