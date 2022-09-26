function solve() {
   const textMes = document.getElementById("chat_input");
   const sendButton = document.getElementById("send");
  // const newDivMess = document.getElementsByClassName("message my-message");
   const chatMessages = document.getElementById("chat_messages");

   sendButton.addEventListener('click', sendFunction);

   function sendFunction() {
      //newDivMess.textContent = textMes.value;
      const newMess = document.createElement("div");
      newMess.className = "message my-message";
      newMess.textContent = textMes.value; 
      chatMessages.appendChild(newMess);
      textMes.value = '';
   }
   //TODO...
}


