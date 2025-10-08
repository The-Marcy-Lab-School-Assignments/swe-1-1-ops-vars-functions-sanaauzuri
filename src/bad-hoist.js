const debugFunc = () => {
  let name = 'Zo';
  let mood = 'happy';
  const time = 'today';
  console.log(`Hello ${name}, are you feeling ${mood} ${time}?`);
  
  
  mood = 'sad';
  console.log(`Oh no, I'm sorry you're feeling ${mood} ${time}.`);
};

debugFunc();

module.exports = {
  debugFunc,
};
