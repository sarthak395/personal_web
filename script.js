let data;

const about = {
  typing: [
    'Sarthak Bansal',
    'A Student',
    'A Curious Person',
  ],
};

const skills = [
  { name: 'Javascript', level: 85 },
  { name: 'CSS', level: 75 },
  { name: 'React JS', level: 80 },
  { name: 'Express.js', level: 70 },
  { name: 'C/C++', level: 85 },
  { name: 'MySQL', level: 80 },
  { name: 'Shell Scripting', level: 60 },
  { name: 'DS & Algorithms', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'DBMS', level: 70 },
  { name: 'Operating Systems', level: 60 },
  { name: 'Deep Learning', level: 40 },
];



data = { about, skills };


//  --------------------------------------------------------------

const typeStart = () => {
  const typingElement = document.querySelector('.running-text');
  const sentences = data.about.typing;

  const letterWait = 80;
  const sentenceWait = 2000;

  const type = (sentence = -1, letter = -1, erasing) => {
    if (sentence === sentences.length) return type(0, letter, erasing);

    if (letter === -1) {
      setTimeout(() => type(sentence + 1, 0, false), letterWait);
    } else if (letter === sentences[sentence].length) {
      setTimeout(() => type(sentence, letter - 1, true), sentenceWait);
    } else if (erasing) {
      typingElement.innerText = typingElement.innerText.slice(0, letter);

      setTimeout(() => type(sentence, letter - 1, true), letterWait);
    } else {
      typingElement.innerText += sentences[sentence][letter];

      setTimeout(() => type(sentence, letter + 1, false), letterWait);
    }
  };

  type();
};

const loadData = () => {
  const skillsElement = document.querySelector('.skills');

  data.skills.forEach(
    ({ name, level }) =>
      (skillsElement.innerHTML += `<div class="skill">
          <p class="skill__name">${name}</p>
          <div class="skill__level-container">
            <div class="skill__level" style="width: ${level}%;"></div>
          </div>
        </div>`)
  );
};


loadData();
typeStart();

// document.querySelector('.form').addEventListener('submit', mail);
