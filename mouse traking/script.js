const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) => {
  rotateElement(e, pre);
});

function rotateElement(e, element) {
  //getting mouse position
  const x = e.clientX;
  const y = e.clientY;
  //console.log(x,y);

  //finding Middle
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  //getting offset in percentage from middle & max of 45deg
  const offsetX = ((x - middleX)/middleX)*45;
  const offsetY = ((y - middleY)/middleY)*45;
//   console.log(offsetX, offsetY)

element.style.setProperty("--rotateX", -1 * offsetY + "deg");
element.style.setProperty("--rotateY", offsetX + "deg");
}
