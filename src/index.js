console.log('loaded!');

const NUMBER_OF_DOGS = 15;

const pickRandomNumber = () => {
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const onLoaded = () => {
  const dogImg = document.getElementById('dog-image');
  const imgNumber = pickRandomNumber();
  const newImgName = `../imgs/${imgNumber}.jpeg`;
  dogImg.src = newImgName;
};

onLoaded();