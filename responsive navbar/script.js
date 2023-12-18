const sidebar = document.querySelector(".sidebar");

const showSidebar = () => {
  sidebar.style.right = 0;
};

const hideSidebar = () => {
  sidebar.style.right = "-450px";
};

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", showSidebar);

const closeButtons = document.querySelectorAll(".sidebar li");
closeButtons.forEach((closeButton) =>
  closeButton.addEventListener("click", hideSidebar)
);
