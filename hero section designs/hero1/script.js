const closebtn = document.getElementById("close");
const openbtn = document.getElementById("open");
const ol = document.getElementById("ol");

closebtn.addEventListener("click", () => {
  ol.classList.toggle("active");
  this.style.display = "none !important";
  openbtn.style.display = "block !important";
});
openbtn.addEventListener("click", () => {
  ol.classList.toggle("active");
  this.style.display = "none !important";
  closebtn.style.display = "block !important";
});
