// Add JS here
const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("#note");
const btnReset = document.querySelector("#reset");

// Event untuk membuat list baru
form.addEventListener("submit", (e) => {
  e.preventDefault(); // preventDefault berfungsi agar form setelah di submit tidak pindah halaman
  const noteValue = input.value;
  const newList = document.createElement("li");
  newList.className = "new-list";
  newList.innerText = noteValue;
  list.append(newList);
  input.value = "";
});

// Event Delegation = memanipulasi node / element sesuai target
//   Event untuk mencoret daftar list
list.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.classList.toggle("checked");
});
// event untuk menghapus list
list.addEventListener("dblclick", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});

// Event Button reset
btnReset.addEventListener("click", () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild); // Menghapus setiap elemen li satu per satu
  }
});
