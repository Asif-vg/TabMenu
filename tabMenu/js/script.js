let htab = document.querySelectorAll(".htab");
let btab = document.querySelectorAll(".btab");



for (let i = 0; i < htab.length; i++) {
    htab[i].addEventListener("click", function(e) {
        e.preventDefault();
        for (let a = 0; a < htab.length; a++) {
            htab[a].classList.remove("active");
            btab[a].classList.remove("active");

        }
        htab[i].classList.add("active");
        btab[i].classList.add("active");
    })

}


// htab.forEach((item) => {
//     let index = 0;

//     item.addEventListener("click", function(e) {
//         e.preventDefault();
//         let index2 = 0;

//         htab.forEach(element => {
//             element.classList.remove("active");
//             btab[index2].classList.remove("active");
//             index2++;
//         });

//         item.classList.add("active");
//         btab[index].classList.add("active");
//         index++;
//     })


// });