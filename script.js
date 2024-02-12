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


// All places

const cards6 = document.querySelector(".cards6"),
    allCards6 = document.querySelectorAll(".card6"),
    buttons6 = document.querySelectorAll(".cardswrapper6 button"),
    prevBtn6 = document.querySelector(".prev6"),
    nextBtn6 = document.querySelector(".next6");

cards6.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        event.currentTarget.scrollLeft += event.currentTarget.clientWidth;

    } else {
        event.currentTarget.scrollLeft -= event.currentTarget.clientWidth;
    }
});
buttons6.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.currentTarget.classList.contains("prev6")) {
            cards6.scrollLeft -= cards6.clientWidth;
        } else {
            cards6.scrollLeft += cards6.clientWidth;
        }
    });
});
const btnsFunction6 = () => {
    if (cards6.scrollLeft === 0) {
        prevBtn6.style.display = "none";
    } else {
        prevBtn6.style.display = "unset";

    }

    if (cards6.scrollLeft + cards6.clientWidth >= cards6.scrollWidth - 1) {
        nextBtn6.style.display = "none";
    } else {
        nextBtn6.style.display = "unset";
    }

    console.log(cards6.scrollLeft, cards6.clientWidth, cards6.scrollWidth);
};

cards6.addEventListener("scroll", btnsFunction6);
window.addEventListener("load", btnsFunction6);


// Rating hotels 

const cards7 = document.querySelector(".cards7"),
      allCards7 = document.querySelectorAll(".card7"),
      buttons7 = document.querySelectorAll(".cardswrapper7 button"),
      prevBtn7 = document.querySelector(".prev7"),
      nextBtn7 = document.querySelector(".next7");

    cards7.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        event.currentTarget.scrollLeft += event.currentTarget.clientWidth;

      } else {
        event.currentTarget.scrollLeft -= event.currentTarget.clientWidth;
      }
    });
    buttons7.forEach((button) => {
      button.addEventListener("click", (event) => {
        if (event.currentTarget.classList.contains("prev7")) {
          cards7.scrollLeft -= cards7.clientWidth;
        } else {
          cards7.scrollLeft += cards7.clientWidth;
        }
      });
    });
    const btnsFunction7 = () => {
      if (cards7.scrollLeft === 0) {
        prevBtn7.style.display = "none";
      } else {
        prevBtn7.style.display = "unset";

      }

      if (cards7.scrollLeft + cards7.clientWidth >= cards7.scrollWidth - 1) {
        nextBtn7.style.display = "none";
      } else {
        nextBtn7.style.display = "unset";
      }

      console.log(cards7.scrollLeft, cards7.clientWidth, cards7.scrollWidth);
    };

    cards7.addEventListener("scroll", btnsFunction7);
    window.addEventListener("load", btnsFunction7);


    // Sticky Navbar

    //  window.onscroll = function () { myFunction7() };

    //  var navbar = document.getElementById("navbar2");
    //  var sticky = navbar.offsetTop;
 
    //  function myFunction7() {
    //    if (window.pageYOffset >= sticky) {
    //      navbar.classList.add("sticky")
    //    } else {
    //      navbar.classList.remove("sticky");
    //    }
    //  }
