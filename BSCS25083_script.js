let number = alert("Hey! Welcome to my Website")

let date = new Date().getDate()
let month = new Date().getMonth() + 1
let year = new Date().getFullYear()

console.log("Day: " , date)
console.log("Month: " , month)
console.log("Year: " , year)

let footerDate = document.getElementById("footer-date")
footerDate.innerHTML = year
console.log(footerDate)

function AvailabilityCheck(id){
    let button = document.getElementById(id)
    console.log(button)
    button.innerHTML = "In Stock"

}

const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatLog = document.getElementById('chatlog');

const botReplies = {
    "hi": "Hi there! How can I help you today?",
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm doing great, thank you for asking!",
    "bye": "Goodbye! Have a great day!",
    "default": "Sorry, I didn't understand that. Could you please rephrase?"
};

function getBotReply(userMessage) {
    userMessage = userMessage.toLowerCase();
    return botReplies[userMessage] || botReplies["default"];
}

function updateChatLog(userMessage, botMessage) {
    const userDiv = document.createElement('div');
    userDiv.textContent = "You: " + userMessage;
    chatLog.appendChild(userDiv);

    const botDiv = document.createElement('div');
    botDiv.textContent = "Bot: " + botMessage;
    chatLog.appendChild(botDiv);

    chatLog.scrollTop = chatLog.scrollHeight;
}

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        const botMessage = getBotReply(userMessage);
        updateChatLog(userMessage, botMessage);
        userInput.value = '';
    }
});

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});

const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function(event) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    event.preventDefault();
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    alert("Form submitted successfully!");
  }
});

