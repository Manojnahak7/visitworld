let modebtn = document.querySelector("#mode");
let currmode = "light";
modebtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "#030637";
        document.querySelector("#tp").style.color = "white";
        document.querySelector("#most").style.color = "white";
        document.querySelector("#browse").style.color = "white";
        document.querySelector("#explore").style.color = "white";
        document.querySelector("#expl").style.color = "white";
        document.querySelector("#wrap").style.border = "black";
        //   document.querySelector("#wrapnew").style.border="black";
        document.querySelector("#quick").style.color = "white";
        document.querySelector("#quickp").style.color = "white";
        // document.querySelectorAll('#bgch1,#bgch2').style.backgroundColor="red";
        //   document.querySelector("#bgch3").style.backgroundColor="#030637"
        //   document.querySelector("#bgch4").style.backgroundColor="#030637"
        //   document.querySelector("#bgch5").style.backgroundColor="#030637"
        //   document.querySelector("#bgch6").style.backgroundColor="#030637"
        //   document.querySelector("#bgch7").style.backgroundColor="#030637"
        //   document.querySelector("#bgch8").style.backgroundColor="#030637"
        // document.querySelectorAll('#bgch1, #bgch2, #bgch3, #bgch4,#bgch5,#bgch6,#bgch7,#bgch8,#bgch9,#bgch10,#bgch11,#bgch12,#bgch13,#bgch14,#bgch15,#bgch16,#bgch17,#bgch18,#bgch19,#bgch20,#bgch21,#bgch22').style.backgroundColor="#030637"
        //   document.querySelector("#bgch9").style.backgroundColor="#030637"
        //   document.querySelector("#bgch10").style.backgroundColor="#030637"
        //   document.querySelector("#bgch11").style.backgroundColor="#030637"
        //   document.querySelector("#bgch12").style.backgroundColor="#030637"
        //   document.querySelector("#bgch13").style.backgroundColor="#030637"
        //   document.querySelector("#bgch14").style.backgroundColor="#030637"
        //   document.querySelector("#bgch15").style.backgroundColor="#030637"
        //   document.querySelector("#bgch16").style.backgroundColor="#030637"
        //   document.querySelector("#bgch17").style.backgroundColor="#030637"
        //   document.querySelector("#bgch18").style.backgroundColor="#030637"
        //   document.querySelector("#bgch19").style.backgroundColor="#030637"
        //   document.querySelector("#bgch20").style.backgroundColor="#030637"
        //   document.querySelector("#bgch21").style.backgroundColor="#030637"
        //   document.querySelector("#bgch22").style.backgroundColor="#030637"
        document.querySelector("#wrapnew").style.backgroundColor = "#030637";
    }
    else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("#tp").style.color = "black";
        document.querySelector("#most").style.color = "black";
        document.querySelector("#browse").style.color = "black";
        document.querySelector("#explore").style.color = "black";
        document.querySelector("#expl").style.color = "black";
        document.querySelector("#wrap").style.border = "white";
        document.querySelector("#wrapnew").style.border = "white";
        document.querySelector("#quick").style.color = "black";
        document.querySelector("#quickp").style.color = "black";
        document.querySelector("#bgch1").style.backgroundColor = "white"
        document.querySelector("#bgch2").style.backgroundColor = "white"
        document.querySelector("#bgch3").style.backgroundColor = "white"
        document.querySelector("#bgch4").style.backgroundColor = "white"
        document.querySelector("#bgch5").style.backgroundColor = "white"
        document.querySelector("#bgch6").style.backgroundColor = "white"
        document.querySelector("#bgch7").style.backgroundColor = "white"
        document.querySelector("#bgch8").style.backgroundColor = "white"
        document.querySelector("#bgch9").style.backgroundColor = "white"
        document.querySelector("#bgch10").style.backgroundColor = "white"
        document.querySelector("#bgch11").style.backgroundColor = "white"
        document.querySelector("#bgch12").style.backgroundColor = "white"
        document.querySelector("#bgch13").style.backgroundColor = "white"
        document.querySelector("#bgch14").style.backgroundColor = "white"
        document.querySelector("#bgch15").style.backgroundColor = "white"
        document.querySelector("#bgch16").style.backgroundColor = "white"
        document.querySelector("#bgch17").style.backgroundColor = "white"
        document.querySelector("#bgch18").style.backgroundColor = "white"
        document.querySelector("#bgch19").style.backgroundColor = "white"
        document.querySelector("#bgch20").style.backgroundColor = "white"
        document.querySelector("#bgch21").style.backgroundColor = "white"
        document.querySelector("#bgch22").style.backgroundColor = "white"
        document.querySelectorAll(".titl").style.color = "black";

    }
    console.log(currmode);
});


//  Big screen Browse by property type

const cards = document.querySelector(".cards"),
    allCards = document.querySelectorAll(".card"),
    buttons = document.querySelectorAll(".cardswrapper button"),
    prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next");

cards.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        event.currentTarget.scrollLeft += event.currentTarget.clientWidth;

    } else {
        event.currentTarget.scrollLeft -= event.currentTarget.clientWidth;
    }
});
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.currentTarget.classList.contains("prev")) {
            cards.scrollLeft -= cards.clientWidth;
        } else {
            cards.scrollLeft += cards.clientWidth;
        }
    });
});
const btnsFunction = () => {
    if (cards.scrollLeft === 0) {
        // if(cards.scrollLeft === cards.scrollWidth){
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "unset";

    }

    if (cards.scrollLeft + cards.clientWidth >= cards.scrollWidth - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "unset";
    }

    console.log(cards.scrollLeft, cards.clientWidth, cards.scrollWidth);
};

cards.addEventListener("scroll", btnsFunction);
window.addEventListener("load", btnsFunction);


// Explore your favourite places 

const cards2 = document.querySelector(".cards2"),
    allCards2 = document.querySelectorAll(".card2"),
    buttons2 = document.querySelectorAll(".cardswrapper2 button"),
    prevBtn2 = document.querySelector(".prev2"),
    nextBtn2 = document.querySelector(".next2");

cards2.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        event.currentTarget.scrollLeft += event.currentTarget.clientWidth;

    } else {
        event.currentTarget.scrollLeft -= event.currentTarget.clientWidth;
    }
});
buttons2.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.currentTarget.classList.contains("prev2")) {
            cards2.scrollLeft -= cards2.clientWidth;
        } else {
            cards2.scrollLeft += cards2.clientWidth;
        }
    });
});
const btnsFunction2 = () => {
    if (cards2.scrollLeft === 0) {
        // if(cards.scrollLeft === cards.scrollWidth){
        prevBtn2.style.display = "none";
    } else {
        prevBtn2.style.display = "unset";

    }

    if (cards2.scrollLeft + cards2.clientWidth >= cards2.scrollWidth - 1) {
        nextBtn2.style.display = "none";
    } else {
        nextBtn2.style.display = "unset";
    }

    console.log(cards2.scrollLeft, cards2.clientWidth, cards2.scrollWidth);
};

cards2.addEventListener("scroll", btnsFunction2);
window.addEventListener("load", btnsFunction2);

// Quick and easy trip plan

const cards3 = document.querySelector(".cards3"),
allCards3 = document.querySelectorAll(".card3"),
buttons3 = document.querySelectorAll(".cardswrapper3 button"),
prevBtn3 = document.querySelector(".prev3"),
nextBtn3 = document.querySelector(".next3");

cards3.addEventListener("wheel", (event) => {
if (event.deltaY > 0) {
    event.currentTarget.scrollLeft += event.currentTarget.clientWidth;

} else {
    event.currentTarget.scrollLeft -= event.currentTarget.clientWidth;
}
});
buttons3.forEach((button) => {
button.addEventListener("click", (event) => {
    if (event.currentTarget.classList.contains("prev3")) {
        cards3.scrollLeft -= cards3.clientWidth;
    } else {
        cards3.scrollLeft += cards3.clientWidth;
    }
});
});
const btnsFunction3 = () => {
if (cards3.scrollLeft === 0) {
    // if(cards.scrollLeft === cards.scrollWidth){
    prevBtn3.style.display = "none";
} else {
    prevBtn3.style.display = "unset";

}

if (cards3.scrollLeft + cards3.clientWidth >= cards3.scrollWidth -1 ) {
    nextBtn3.style.display = "none";
} else {
    nextBtn3.style.display = "unset";
}

console.log(cards3.scrollLeft, cards3.clientWidth, cards3.scrollWidth);
};

cards3.addEventListener("scroll", btnsFunction3);
window.addEventListener("load", btnsFunction3);

// Get inspiration for your next trip 
const cards5 = document.querySelector(".cards5"),
allCards5 = document.querySelectorAll(".card5"),
buttons5 = document.querySelectorAll(".cardswrapper5 button"),
prevBtn5 = document.querySelector(".prev5"),
nextBtn5 = document.querySelector(".next5");

cards5.addEventListener("wheel", (event) => {
if (event.deltaY > 0) {
    event.currentTarget.scrollLeft += event.currentTarget.clientWidth;

} else {
    event.currentTarget.scrollLeft -= event.currentTarget.clientWidth;
}
});
buttons5.forEach((button) => {
button.addEventListener("click", (event) => {
    if (event.currentTarget.classList.contains("prev5")) {
        cards5.scrollLeft -= cards5.clientWidth;
    } else {
        cards5.scrollLeft += cards5.clientWidth;
    }
});
});
const btnsFunction5 = () => {
if (cards5.scrollLeft === 0) {
    // if(cards.scrollLeft === cards.scrollWidth){
    prevBtn5.style.display = "none";
} else {
    prevBtn5.style.display = "unset";

}

if (cards5.scrollLeft + cards5.clientWidth >= cards5.scrollWidth - 1) {
    nextBtn5.style.display = "none";
} else {
    nextBtn5.style.display = "unset";
}

console.log(cards5.scrollLeft, cards5.clientWidth, cards5.scrollWidth);
};

cards5.addEventListener("scroll", btnsFunction5);
window.addEventListener("load", btnsFunction5);

// For temple 

let selectfield=document.getElementById("selectfield");
let selecttext=document.getElementById("selecttext");
let options=document.getElementsByClassName("options");
let list=document.getElementById("list");
let arrowicon=document.getElementById("arrowicon");


selectfield.onclick = function(){
  list.classList.toggle("hide");
  arrowicon.classList.toggle("rotate");
}

for(option of options){
  option.onclick=function(){
    selecttext.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowicon.classList.toggle("rotate");

  }
}