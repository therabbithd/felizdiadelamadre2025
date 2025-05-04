document.getElementById("surpriseBtn").addEventListener("click", function() {
    const card = document.querySelector(".card");
    card.classList.add("flipped");
  });
  
  document.getElementById("backBtn").addEventListener("click", function() {
    const card = document.querySelector(".card");
    card.classList.remove("flipped");
  });