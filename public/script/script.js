// $(document).ready(function () {

// // toggle navbar mobile
// $("#togglerButton").each(function (_, navToggler) {
//     var target = $(navToggler).data("target");
//     $(navToggler).on("click", function () {
//         console.log('dadw')
//         $(target).animate({
//             height: "toggle",
//         })
//     })
// })

//     // user avatar dropdown
//     var dd_btn = $(".dropdown-button")
//     var dd_target = $("#dropdown-target")
//     dd_btn.click(function () {
//         dd_btn.each(function () {
//             if (dd_target.hasClass("hidden")) {
//                 console.log('dadw')
//                 dd_target.removeClass("hidden").addClass("block");
//             } else if (dd_target.hasClass("block")) {
//                 console.log('dadw')
//                 dd_target.removeClass("block").addClass("hidden");
//             }
//         })
//     })




// })



window.onload = function () {

    // Toggle navbar mobile
    document.querySelectorAll("#togglerButton").forEach(function (navToggler) {
        var target = document.querySelector(navToggler.getAttribute("data-target"));

        navToggler.addEventListener("click", function () {
            console.log('dadw');

            // Toggle height
            if (target.style.display === "none" || target.style.display === "") {
                target.style.display = "block";
                target.style.height = "auto";
            } else {
                target.style.display = "none";
            }
        });
    });



    // User avatar dropdown
    let dd_btn = document.getElementById('dropdown-button');
    let dd_target = document.getElementById('dropdown-target');

    console.log(dd_btn); 
    console.log(dd_target); 

    if (dd_btn && dd_target) {
        dd_btn.addEventListener('click', () => {
            if (dd_target.classList.contains('hidden')) {
                dd_target.classList.remove('hidden');
                dd_target.classList.add('block');
            } else if (dd_target.classList.contains('block')) {
                dd_target.classList.remove('block');
                dd_target.classList.add('hidden');
            }
        });
    } else {
        console.error("Element tidak ditemukan");
    }
};
