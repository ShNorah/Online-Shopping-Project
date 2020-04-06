function validate() {
  let userName = document.getElementById("uname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (uname.length < 4 ) {
      alert("Invalid Username");
      return false;
  } else if (email.length < 4 ) {
      alert("Invalid email");
      return false;
  } else if (password.length < 6) {
      alert("Password should be aleast 6 characters");
      return false;
  } else {
      return true;
  }
}
    
function signIn() {
      let userEmail = document.getElementById("email").value;
      let userPassword = document.getElementById("password").value;
  
      let email = ["sam@gmail.com","sharon@gmail.com"];
      let paswrd = ["hhhhhh", "gggggg"];
  
      for(let i = 0; i < email.length; i++) {
          if (userEmail == email[i] && userPassword == paswrd[i]) {
              alert("Successfully logged in");
              return true;
          } else {
              alert("Invalid email or password");
              return false;
          }
      }
  }

  jQuery(document).ready(function(){
    $('.slideshow-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 300,
    });

        var dialog, form,
     
          // validating user input
          emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          name = $( "#name" ),
          email = $( "#email" ),
          phonenumber = $( "#phonenumber" ),
          allFields = $( [] ).add( name ).add( email ).add( phonenumber ),
          tips = $( ".validateTips" );
     
        function updateTips( t ) {
          tips
            .text( t )
            .addClass( "ui-state-highlight" );
          setTimeout(function() {
            tips.removeClass( "ui-state-highlight", 1500 );
          }, 500 );
        }
     
        function checkRegexp( o, regexp, n ) {
          if ( !( regexp.test( o.val() ) ) ) {
            o.addClass( "ui-state-error" );
            updateTips( n );
            return false;
          } else {
            return true;
          }
        }
     
        function orderNow() {
          var valid = true;
          allFields.removeClass( "ui-state-error" );      
            console.log('yes');
            alert("thank you, your order has been initiated, click ok to proceed");
            window.location.href = "/UI/pages/order.html";
            dialog.dialog({
                close: function() { 
                    console.log('no');                    
                   }
            });
        }
     
        dialog = $( "#dialog-form" ).dialog({
          autoOpen: false,
          height: 400,
          width: 350,
          modal: true,
          buttons: {
            "Make Order": orderNow,
            Cancel: function() {
              dialog.dialog( "close" );
              alert("sorry, your order has been cancelled");
            }
          },
          close: function() {
            form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
          }
        });
     
        form = dialog.find( "form" ).on( "submit", function( event ) {
          event.preventDefault();
          orderNow();
        });
     
        $( "#popup" ).button().on( "click", function() {
          dialog.dialog( "open" );
        });

});

jQuery(document).ready(function(){
  $('.slideshow-container').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 300,
  });

      var dialog, form,
   
        // validating user input
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        name = $( "#name" ),
        email = $( "#email" ),
        phonenumber = $( "#phonenumber" ),
        allFields = $( [] ).add( name ).add( email ).add( phonenumber ),
        tips = $( ".validateTips" );
   
      function updateTips( t ) {
        tips
          .text( t )
          .addClass( "ui-state-highlight" );
        setTimeout(function() {
          tips.removeClass( "ui-state-highlight", 1500 );
        }, 500 );
      }
   
      function checkRegexp( o, regexp, n ) {
        if ( !( regexp.test( o.val() ) ) ) {
          o.addClass( "ui-state-error" );
          updateTips( n );
          return false;
        } else {
          return true;
        }
      }
   
      function orderNow() {
        var valid = true;
        allFields.removeClass( "ui-state-error" );      
          console.log('yes');
          alert("thank you, your order has been initiated, click ok to proceed");
          window.location.href = "/UI/pages/order.html";
          dialog.dialog({
              close: function() { 
                  console.log('no');                    
                 }
          });
      }
   
      dialog = $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
          "Make Order": orderNow,
          Cancel: function() {
            dialog.dialog( "close" );
            alert("sorry, your order has been cancelled");
          }
        },
        close: function() {
          form[ 0 ].reset();
          allFields.removeClass( "ui-state-error" );
        }
      });
   
      form = dialog.find( "form" ).on( "submit", function( event ) {
        event.preventDefault();
        orderNow();
      });
   
      $( "#popup" ).button().on( "click", function() {
        dialog.dialog( "open" );
      });

});

//searching an item
function myfunction(){
var input, myProduct, filter, texttValue, products;
filter = input.value;
input =document.getElementById("product");
myProduct =document.getElementById("myProduct");
for (i=0; i<myProduct.lenghth; i++){
  products = myProduct[i].detElementsByClassName("edu-product__image")[0];
  texttValue = products.textContent || products.innerText;
  if(texttValue.indexOf(filter)> -1){
  myProduct[i].style.display ="";
  }else{
    myProduct[i].style.display = none;
  }
}
}
