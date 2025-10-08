const debugFunc = () => {
  let name = 'Zo';
  let mood = 'happy';
  let time = 'today';
  console.log(`Hello ${name}, are you feeling ${mood} ${time}?`);
  
  
  let newMood = 'sad';
  console.log(`Oh no, I'm sorry you're feeling ${newMood} ${time}.`);
};

debugFunc();

module.exports = {
  debugFunc,
};
