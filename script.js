const body = document.body;
let header = document.getElementById("header-bg");
let mode = document.querySelector(".theme");
let headings = document.querySelectorAll(".heading");
let paragraphs = document.querySelectorAll(".paragraph");
let cards = document.querySelectorAll(".card");
let smallCards = document.querySelectorAll(".small-card");
let border = document.getElementById("title");
const changeTheme = document.getElementById("checkbox");

body.style.backgroundColor = "white";

changeTheme.addEventListener("change", e => {
    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "hsl(230, 17%, 14%)"
    }else{
        body.style.backgroundColor = "white";
    };

    if(header.classList.contains("l-t-bg")){
        header.classList.remove("l-t-bg");
        header.classList.add("d-t-bg");
    }else{
        header.classList.remove("d-t-bg");
        header.classList.add("l-t-bg");
    };

    if(mode.classList.contains("l-theme")){
        mode.classList.remove("l-theme");
        mode.classList.add("d-theme");
    }else{
        mode.classList.remove("d-theme");
        mode.classList.add("l-theme");
    };

    headings.forEach(heading => {
        if(heading.classList.contains("l-t-h")){
            heading.classList.remove("l-t-h");
            heading.classList.add("d-t-h");
        }else{
            heading.classList.remove("d-t-h");
            heading.classList.add("l-t-h");
        };
    });

    paragraphs.forEach(paragraph => {
        if(paragraph.classList.contains("l-t-p")){
            paragraph.classList.remove("l-t-p");
            paragraph.classList.add("d-t-p");
        }else{
            paragraph.classList.remove("d-t-p");
            paragraph.classList.add("l-t-p");
        };   
    });

    cards.forEach(card => {
        if(card.classList.contains("l-t-card")){
            card.classList.remove("l-t-card");
            card.classList.add("d-t-card");
        }else{
            card.classList.remove("d-t-card");
            card.classList.add("l-t-card");
        };
    });

    smallCards.forEach(smallCard => {
        if(smallCard.classList.contains("l-t-card")){
            smallCard.classList.remove("l-t-card");
            smallCard.classList.add("d-t-card");
        }else{
            smallCard.classList.remove("d-t-card");
            smallCard.classList.add("l-t-card");
        };
    });

    if(border.classList.contains("l-t-border")){
        border.classList.remove("l-t-border");
        border.classList.add("d-t-border");
    }else{
        border.classList.remove("d-t-border");
        border.classList.add("l-t-border");   
    }
});