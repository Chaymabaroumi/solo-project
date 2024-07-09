function generateId() {
    var counter = 0;
    return function () {
      counter++;
      return counter;
    };
  }
  var id = generateId();


  var listDerma = [];
  var listHair = [];
  var listOffer = [];
  class MakeProducts {
    constructor(ProductName, price, category, images) {
      this.ProductName = ProductName;
      this.price = price;
      this.category = category;
      this.images = images;
      this.id = id();
      category === "dermatologie" && listDerma.push(this);
      category === "haircare" && listHair.push(this);
      category === "offre" && listOffer.push(this);
    }
  }

  var produitDerma1 = new MakeProducts(
    "SVR sun secure blur SPF50+",
    55.628,
    "dermatologie",
    [
      "https://tn.svr.com/cdn/shop/files/Sun-secure_blur_2000x2000_2022_3_a97cee70-2f2e-4090-9e09-77e1c2862a21_x3000.jpg?v=1685696196",
      "https://tn.svr.com/cdn/shop/products/Test_maquette-Solaires-fluide_x3000.jpg?v=1657614776",
      "https://tn.svr.com/cdn/shop/products/clairial_CC-Lightm_2000x2000_6d6de148-9fbc-4126-9e59-b6c93587b0d5_600x600_crop_center.jpg?v=1611523409",
    ]
  );
  var produitDerma2 = new MakeProducts(
    "AVENE solaire anti-age-UVB-UVA",
    72.53,
    "dermatologie",
    [
      "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//a/v/avene-sun-anti-age-sunscreen-spf50-50ml_2_1.jpg",
   
    ]
  );
  
  var produitDerma3 = new MakeProducts(
    "CREME SOLAIRE HYDRATANTE SPF50+ - URIAGE BARIESUN ",
    87.628,
    "dermatologie",
    [
      "https://amal-medical.com/10074-large_default/creme-solaire-hydratante-spf50-uriage-bariesun-50ml.jpg",
    ]
  );
  var produitHair1 = new MakeProducts(
    "AVÈNE A-OXITIVE NUIT SOIN PEELING",
    110.5,
    "haircare",
    [
      "https://professionalhairdresser.co.uk/wp-content/uploads/2019/01/pureology-strength-cure-best-blonde-range-e1546622140662.jpg",
      "https://th.bing.com/th/id/R.d2f5a60f5f548fc68c911bfc49d37f91?rik=IeP3BP71mYJJ%2bA&riu=http%3a%2f%2fwww.freestufffinder.com%2fwp-content%2fuploads%2f2012%2f12%2floreal-shampoo-300x266.jpg&ehk=jTCgqH7Ofv6y4A%2b4FKJqTLeO%2fwOgyQju%2bCwjCm0pawQ%3d&risl=&pid=ImgRaw&r=0",
     
    ]
  );
  
  var produitHair2 = new MakeProducts("Spray Eau Thermale", 100.8, "haircare", [
    
    "https://paraetpharmacie.com/12232-thickbox_default/avene-eau-thermale-spray-50ml.jpg",
  ]);

  
 
  function imageslider() {
    var promo = document.getElementById("promotion");
    var imgspromo= promo.getElementsByClassName("imgpromo");

  
    var index = 0;
    function imagechange() {
        imgspromo[index].classList.remove("active");
        index = (index + 1) % imgspromo.length;
        imgspromo[index].classList.add("active");
      }
      setInterval(imagechange, 3000);
  }
    imageslider();
    
    $("#shop").append(
      ` <div id="shop-id">
      <p id="soin-visage">facial care</p>
      <img
        id="img-s-visage"
        src="https://th.bing.com/th/id/OIP.f37wes801pk92wmfzMNAjAHaHa?rs=1&pid=ImgDetMain"
        alt=""
      />
    </div>
    <section id="section-product"></section>`
    );
   
    function display(listDerma) {
        var derma = listDerma[indexDerma];
        for (var j = 0; j < derma.images.length; j++) {
          $("#section-product").append(
            `
            <div id="promotion-${j}">
            <img id="img-${j}" src=${derma.images[j]} />
            <button id="btn">Add to basket +1</button>
            <br>
            <span id="prix">${listDerma[j].price} TND TTC</span>
            <p id="text">
              <b>SVR</b> Sun Scure SPF50+
            </p>
            </div>`
          );
          console.log(listDerma[j].price);
          var price = listDerma[j].price;
          $(`#img-${j}`).click(function () {
            var count = 0;
            document.getElementById("product-details-").innerHTML = price + " TND TTC";
            document.getElementById("product-details-").innerHTML = 1;
      
            console.log("click");
          });
        }
        indexDerma = (indexDerma + 1) % listDerma.length;
      }
      var indexDerma = 0;


      display(listDerma);

      $("#img-s-visage").click(function () {
      $("#section-product").empty();
        display(listDerma);
           });

      $("#hairshop").append(`
        <div id="hairshop-id">
        <p id="soin-hair">Hair care</p>
        <img id="img-s-hair"
        src="https://th.bing.com/th/id/OIP.Jwy7MNrOiAeijjoFFhYgDgAAAA?rs=1&pid=ImgDetMain"alt="" />
        </div>
        <section id="section-product-hair"></section>
          `);

          var indexHair = 0;

          function displayHair(arr) {
            var hair = arr[indexHair];
            for (var k = 0; k < hair.images.length; k++) {
              $(`#section-product-hair`).append(`
            
              <div id="global-hair">
               
                <div id="container-hair-${k}">
                 <img id="img-hair-${k}" src=${hair.images[k]} />
          
               <button id="btn">Add to basket +1</button>
              <span id="prix">${listHair[k].price} TND TTC</span>
             <p id="text">
              <b>SHAMPO</b> Hair Care
            </p>
            </div>
               </div>`);
            }
            indexHair = (indexHair + 1) % listHair.length;
          }
          displayHair(listHair);
          
$("#soin-visage").click(function () {
    $("#section-product").empty();
  
    var sortPriceDerma = listDerma.toSorted(function (a, b) {
      return a.price - b.price;
    });
  
    console.log("click");
    console.log(sortPriceDerma);
    display(sortPriceDerma);
  });
  
  $("#soin-hair").click(function () {
    $("#section-product-hair").empty();
  
    var sortPriceHair = listHair.toSorted(function (a, b) {
      return a.price - b.price;
    });
  
    console.log("click");
    console.log(sortPriceHair);
    displayHair(sortPriceHair);
  });


