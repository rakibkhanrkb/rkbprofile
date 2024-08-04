function contact() {
    document.getElementById("mycontact").innerHTML = "Md. Rakibul Islam 01725675580";
}

function printDiv(dPDF) {
     var printContents = document.getElementById(dPDF).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}
    