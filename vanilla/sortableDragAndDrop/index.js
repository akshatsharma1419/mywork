const dragabbles = document.querySelectorAll(".draggable");
const sections = document.querySelectorAll("section");

dragabbles.forEach((drag) => {
  drag.addEventListener("dragstart", () => {
    drag.classList.add("dragging");
  });
  drag.addEventListener("dragstop", () => {
    drag.classList.remove("dragging");
  });
});

sections.forEach((sec) => {
  sec.addEventListener("dragover", () => {
    const drag = document.querySelector(".dragging");
    sec.append(drag);
  });
});
