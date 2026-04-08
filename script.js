// Typing effect
const text = ["Researcher", "Microbiologist", "Innovator"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];
  
  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").innerText = current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}

// Chatbot
const input = document.getElementById("chat-input");
const body = document.getElementById("chat-body");

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    let userMsg = input.value;
    body.innerHTML += "<p>You: " + userMsg + "</p>";

    let botReply = "I am Kavin's portfolio bot 🤖";
    body.innerHTML += "<p>Bot: " + botReply + "</p>";

    input.value = "";
  }
});
