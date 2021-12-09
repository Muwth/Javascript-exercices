function calculetotal(){
    var quantite = document.getElementById("qtty").value;
    var prixunit = document.getElementById("prixu").value;
    var prixbrut = 0;
    prixbrut = quantite * prixunit;
    prixbrut = prixbrut.toFixed(2);
    var remise = prixbrut * 0.1;
    document.getElementById("facture").style.display="block";
    document.getElementById("mbrut").innerHTML=prixbrut + " €";
    if(document.getElementById("accorde").checked) {
      document.getElementById("discount").innerHTML=remise + " €";
    }else
      remise = 0;
      document.getElementById("discount").innerHTML=remise + " €";
    const frais1 = 10;
    const frais2 = 20;
    const frais3= 30;
    const frais4 = 0;
    var frais = 0;
    if(document.getElementById("frais1").checked) {
      frais = frais1;
    }else if(document.getElementById("frais2").checked) {
      frais = frais2;
    }else if(document.getElementById("frais3").checked) {
      frais = frais3;
    }else if(document.getElementById("frais4").checked) {
      frais = frais4;
    }else
      document.getElementById("error").innerHTML="Veuillez sélectionner un code de frais*";
    document.getElementById("fraisliv").innerHTML=frais + " €";
    var prixht = prixbrut - remise;
    document.getElementById("htamount").innerHTML=prixht + " €"; 
    var tva = 0.2;
    var tvaamount = (prixbrut - remise) * tva;
    document.getElementById("tva").innerHTML=tvaamount + " €";
    var ttc = prixht + tvaamount;
    document.getElementById("ttcamount").innerHTML=ttc + " €";
    var net = ttc + frais;
    document.getElementById("netamount").innerHTML=net + " €";
}


// function flatreduction(){
//   var quantite = document.getElementById("qtty").value;
//   var prixunit = document.getElementById("prixu").value;
//   var remise = (quantite * prixunit) * 0.1;
//   remise = remise.toFixed(2);
//   if(document.getElementById("accorde").checked) {
//     document.getElementById("discount").innerHTML=remise + " €";
//   }else
//     remise = 0;
//     document.getElementById("discount").innerHTML=remise + " €";
// }

// function feesndprixnetht(){
//   var quantite = document.getElementById("qtty").value;
//   var prixunit = document.getElementById("prixu").value;
//   var remise = (quantite * prixunit) * 0.1;
//   const frais1 = 10;
//   const frais2 = 20;
//   const frais3= 30;
//   const frais4 = 0;
//   var frais = 0;
//   frais = frais.toFixed(2);
//   if(document.getElementById("frais1").checked) {
//     frais = frais1;
//   }else if(document.getElementById("frais2").checked) {
//     frais = frais2;
//   }else if(document.getElementById("frais3").checked) {
//     frais = frais3;
//   }else if(document.getElementById("frais4").checked) {
//     frais = frais4;
//   }else
//     document.getElementById("error").innerHTML="Veuillez sélectionner un code de frais*";
//   document.getElementById("fraisliv").innerHTML=frais + " €";
//   var prixht = (quantite * prixunit) - remise + frais;
//   document.getElementById("htamount").innerHTML=prixht + " €"; 
// }




// var prixht = prixbrut - remise + frais;
// var prixttc = prixht * 1.2;



// document.getElementById("calcule").onclick = function() {
//     calculeprixbrut();
// };

// document.getElementById("calcule").onclick.display="facture";
