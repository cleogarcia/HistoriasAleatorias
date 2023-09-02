

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
/*-----------função: randomValueFromArray ---------*/
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
const storyText = 'It was 94 fahrenheit outside, :insertx: cantou will survive :inserty:, bebádo abraçou um poste, :insertz: Godofredo dançou até no chão, :insertx: weighs 300 pounds, foi na igreja chamou a freira de batman .';
const insertX = ['Bebado, ', 'Xandão', 'Padre'];
const insertY = ['no casamento do amigo', 'na Disneyland', 'na rua movimentada'];
const insertZ = ['no bar da esquina', 'na festa de aniversário', 'No banco dos réus'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Godofredo', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
