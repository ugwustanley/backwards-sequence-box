const boxes = document.getElementsByClassName("box");

let active_boxes = [];

for (let i = 0; i < 6; i++) {
  boxes[i].addEventListener("click", function (e) {
    //check if item already exists
    const itemExists = active_boxes.find((box) => box.boxIndex === i);
    if (itemExists) return;
    //check if active_boxes is not at maximum
    if (active_boxes.length < 5) {
      e.target.style.backgroundColor = "teal";
      active_boxes.push({
        boxIndex: i,
        background: "transparent",
      });
      return;
    }
    //change background for final box
    e.target.style.backgroundColor = "teal";
    active_boxes.push({
      boxIndex: i,
      background: "transparent",
    });

    //remove background color using the click sequence
    active_boxes.forEach((box, index) => {
      setTimeout(() => {
        boxes[box.boxIndex].style.backgroundColor = box.background;
      }, 400 * (index + 1));
    });

    //reset active boxes
    active_boxes = [];
  });
}
