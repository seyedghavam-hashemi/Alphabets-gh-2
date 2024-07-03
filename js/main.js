


  function funcCheckBox() {
    var correct1 = document.getElementById("correct1");
    var correct2 = document.getElementById("correct2");
    var correct3 = document.getElementById("correct3");
    var correct4 = document.getElementById("correct4");
    var correct5 = document.getElementById("correct5");

    var incorrect1 = document.getElementById("incorrect1");
    var incorrect2 = document.getElementById("incorrect2");
    var incorrect3 = document.getElementById("incorrect3");
    var incorrect4 = document.getElementById("incorrect4");









    var gateCloset = document.getElementById("gateCloset");
    var gateClosep = document.getElementById("gateClosep");

    var gateOpent = document.getElementById("gateOpent");
    var gateOpenp = document.getElementById("gateOpenp");



    if (   correct1.checked == true 
        && correct2.checked == true
        && correct3.checked == true
       && correct4.checked == true
        && correct5.checked == true

        && incorrect1.checked == false
        && incorrect2.checked == false
       && incorrect3.checked == false
        && incorrect4.checked == false






        ){
            gateOpent.style.display = "block";
            gateOpenp.style.display = "block";

            gateCloset.style.display = "none";

            gateClosep.style.display = "none";
    } else {
        gateOpent.style.display = "none";
        gateOpenp.style.display = "none";

        gateCloset.style.display = "block";
        gateClosep.style.display = "block";

    }
  }
 