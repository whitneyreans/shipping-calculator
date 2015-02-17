var dimensionPrice = function(dimension) {
  if (dimension < 10) {
    return 0
  } else if (dimension > 10 && dimension < 50) {
    return 1
  } else {
    return 2
  }

};

$(document).ready(function() {
  $("form#new-package").submit(function(event) {
    event.preventDefault();

    var inputtedWeight = parseInt($("input#new-weight").val());
    var inputtedHeight = parseInt($("input#new-height").val());
    var inputtedLength = parseInt($("input#new-length").val());
    var inputtedMiles = parseInt($("input#new-miles").val());
    var newPackage = {weight: inputtedWeight, hi: inputtedHeight, len: inputtedLength, miles: inputtedMiles,
                        calculation: function() {
                          var weightCost = dimensionPrice(this.weight);
                          var heightCost = dimensionPrice(this.hi);
                          var lengthCost = dimensionPrice(this.len);
                          var milesCost = dimensionPrice(this.miles);

                          var totalCost = weightCost + heightCost + lengthCost + milesCost;
                          return totalCost;
                        }
                      };

    var total = newPackage.calculation();

    $(".total").text(total);
    $(".results").show();

    if (total === 0) {
      $(".package-image").css('height', '80');
      $(".package-image").css('width', '80');
    } else if (total < 3) {
      $(".package-image").css('height', '110');
      $(".package-image").css('width', '110');
    } else if (total < 5) {
      $(".package-image").css('height', '190');
      $(".package-image").css('width', '190');
    } else if (total < 8) {
      $(".package-image").css('height', '230');
      $(".package-image").css('width', '230');
    } else {
      $(".package-image").css('height', '300');
      $(".package-image").css('width', '300');
    }




  });
});
