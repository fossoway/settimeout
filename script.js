'use strict';


const input = document.createElement('input');
const paragraph = document.createElement('p');
document.body.append(input, paragraph);


const inputChange = () => {
  input.addEventListener('change', e => {
    setTimeout(() => {
      paragraph.append(e.target.value);
    }, 300);
  })
};


inputChange();
