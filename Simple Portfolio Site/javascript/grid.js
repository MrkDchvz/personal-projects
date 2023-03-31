const wrapper = document.getElementById("tiles");
let rows = 0;
let height = 0;
const createTile = () => {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  return tile;
}

// Creates divs based on area of the screen 
const createTiles = quantity => {
  Array.from(Array(quantity)).map(() => {
    wrapper.appendChild(createTile());
  })
}

// Adjusts grid if window is resized
const createGrid = () => {
  wrapper.innerHTML = "";
  const size = document.body.clientWidth > 800 ? 100 : 50; 
  rows = Math.ceil(document.body.clientHeight / size);
  columns = Math.ceil(document.body.clientWidth / size); 
  console.log(document.body.clientHeight);

  createTiles(rows * columns);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);
  
}
createGrid();
window.onresize = () => {createGrid()};

