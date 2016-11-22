const newIdea = <HTMLSpanElement> document.querySelector('#new-idea');
const cancelIdea = <HTMLButtonElement> document.querySelector('#cancel-idea');
const ideaActions = <HTMLParagraphElement> document.querySelector('#idea-actions');

const hideOrShowActions = () => {
  ideaActions.style.display = newIdea.innerHTML.length >= 3 ? 'block' : 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  $('.menu .item').tab();

  newIdea.addEventListener('keyup', () => {
    hideOrShowActions();
  });

  cancelIdea.addEventListener('click', () => {
    newIdea.innerHTML = '';
    hideOrShowActions();
  });

});
