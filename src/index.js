console.log('loaded!');

const NUMBER_OF_DOGS = 15;
const state = {
  dogImg: null
};

const pickRandomNumber = () => {
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const setRandomDog = () => {
  const imgNumber = pickRandomNumber();
  const newImgName = `../imgs/${imgNumber}.jpeg`;
  state.dogImg.src = newImgName;
}

const onLoaded = () => {
  loadControls();
  setRandomDog();
};

const loadControls = () => {
  state.dogImg = document.getElementById('dog-image');
};

onLoaded();