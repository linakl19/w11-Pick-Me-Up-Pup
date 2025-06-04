console.log('loaded!');

const NUMBER_OF_DOGS = 15;
const state = {
  dogImg: null,
  addDogButton: null,
  dogImageContainer: null,
  dogCountLabel: null,
  dogCount: 1,
};

const pickRandomNumber = () => {
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const setRandomDog = () => {
  const imgNumber = pickRandomNumber();
  const newImgName = `../imgs/${imgNumber}.jpeg`;
  state.dogImg.src = newImgName;
};

const handleAddButtonClicked = (event) => {
  // Pick a random rumber
  // set the path for the new dogImg
  // Create a img element
  // Add the src to the img
  // Add the alt to the new img
  const imgNumber = pickRandomNumber();
  const newImgName = `../imgs/${imgNumber}.jpeg`;
  const newDog = document.createElement('img');
  newDog.src = newImgName;
  newDog.alt = `Random dog number ${imgNumber}`;
  state.dogImageContainer.prepend(newDog);
  ++state.dogCount;
  state.dogCountLabel.textContent = state.dogCount;
};

const registerEvents = () => {
  state.addDogButton.addEventListener('click', handleAddButtonClicked);
};

const onLoaded = () => {
  loadControls(); // get the image from the page
  setRandomDog(); // set a new image source
  registerEvents();
};

const loadControls = () => {
  state.dogImg = document.getElementById('dog-image');
  state.addDogButton = document.getElementById('addDogButton');
  state.dogImageContainer = document.getElementById('dog-img-container');
  state.dogCountLabel = document.getElementById('dogCountLabel');
};

onLoaded();