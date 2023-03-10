// "use strict";

// $(document).ready(() => {
//     $.post('https://hw3w8zp4xc.execute-api.us-east-1.amazonaws.com/Prod/visit')
//     .done(visitor_counter => {
//         $('#loader').hide();
//         $('#visits').text(visitor_counter);
//     })
//     .fail(e => {
//         console.log('Error');
//         console.log(e);
//     });
// });

"use strict";

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://hw3w8zp4xc.execute-api.us-east-1.amazonaws.com/Prod/visit", {
    method: "POST"
    })
    .then(response => response.text())
    .then(visitorCounter => {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#visits").textContent = visitorCounter;
    })
    .catch(error => {
    console.log("Error");
    console.log(error);
    });
});
