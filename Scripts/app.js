//Creating elements for the DOM!!

const pageTitle = document.getElementById("page-title");
const subTitle = document.getElementById("subtitle");
const toggleTitle = document.getElementById("toggle-title");

const outputUserName = document.getElementById("user-name");
const inputName = document.getElementById("input-name");
const nameBtn = document.getElementById("name-btn");

const outputHobbies = document.getElementById("user-hobbies");
const inputHobbies = document.getElementById("input-hobbies");
const hobbiesBtn = document.getElementById("hobbies-btn");

const outputEmail = document.getElementById("user-email");
const inputEmail = document.getElementById("input-email");
const emailBtn = document.getElementById("email-btn");

const bgColorBtn = document.getElementById("bg-random-color");
const titleColorBtn = document.getElementById("title-color-btn");
const textColorBtn = document.getElementById("text-color-btn");

const addNewCardBtn = document.getElementById("add-card-btn");
const clearCardsBtn = document.getElementById("clear-cards-btn");

const cardContainer = document.getElementById("card-container");

//Toggles title text
toggleTitle.addEventListener("click" , () => {
    if(pageTitle.innerText === "Manipulating the DOM!!!")
    {
        pageTitle.innerText = "Welcome to my Javascript running Page";
        subTitle.innerText = "Please Explore my page and see the functionality!";
    }else
    {
        pageTitle.innerText ="Manipulating the DOM!!!";
        subTitle.innerText = "Welcome to my JavaScript run Page";
    }
});
// button to manipulate Hello World to greet the user my name!!
nameBtn.addEventListener("click" , () => {
    if(inputName.value.trim() === "")
    {
        outputUserName.innerText = "Hello World!!";
    }
    else
    {
        outputUserName.innerText = "Hello " + inputName.value;
    }
});
hobbiesBtn.addEventListener("click" , () => {
    if(inputHobbies.value.trim() === "")
    {
        outputHobbies.innerText = "Here are my hobbies!"
    }
    else{
        outputHobbies.innerText = "My hobbies are " + inputHobbies.value;
    }
});
bgColorBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = randomColor;
});

titleColorBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    pageTitle.style.color = randomColor;
    outputUserName.style.color = randomColor;
});

emailBtn.addEventListener("click", () => {
    if(inputEmail.value.trim() === "")
    {
        outputEmail.innerText = "What is your email?";
    }
    else{
        outputEmail.innerText = "Your email is " + inputEmail.value.trim();
    }
});

textColorBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    subTitle.style.color = randomColor;
    outputHobbies.style.color = randomColor;
    outputEmail.style.color = randomColor;
})

// fucntions to create cards
function createCard(text)
{
    const card = document.createElement("div");
    //borrowed cards class from todays lecture
    card.className = "card";

    const content = document.createElement("p");
    content.innerText = text;

    const alertBtn = document.createElement("button");
    alertBtn.innerText = "Display Content via alert!";
    alertBtn.addEventListener("click", () => {
        alert("Red Alert: " + content.innerText);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Card";
    deleteBtn.addEventListener("click", () => {
        card.remove();
    })
    // appends card element to the card!
    card.appendChild(content);
    card.appendChild(alertBtn);
    card.appendChild(deleteBtn);
    return card;
}

addNewCardBtn.addEventListener("click", () => {
    const card = createCard("I was created through the power of Javascript and by you clicking buttons!");
    cardContainer.appendChild(card);
});

clearCardsBtn.addEventListener("click" , () => {
    cardContainer.innerHTML = "";
})