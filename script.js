document.getElementById("chatbot-toggle").addEventListener("click", function() {
    let chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
});

document.getElementById("chatbot-send").addEventListener("click", function() {
    let input = document.getElementById("chatbot-input").value;
    if (input) {
        let messages = document.getElementById("chatbot-messages");
        messages.innerHTML += `<p><strong>Tú:</strong> ${input}</p>`;
        document.getElementById("chatbot-input").value = "";
    }
});
