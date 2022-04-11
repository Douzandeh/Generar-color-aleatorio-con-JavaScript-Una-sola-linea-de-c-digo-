function getColor() {
  return (
    "#" +
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
      .sort(() => 0.5 - Math.random())
      .slice(0, 6)
      .join("")
  );
}

function generate() {
  const color = getColor();
  document.querySelector("#color").style.backgroundColor = color;
  document.querySelector("button").innerText = color;
}
