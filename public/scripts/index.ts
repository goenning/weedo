const newIdea = document.querySelector('#new-idea');
const cancelIdea = document.querySelector('#cancel-idea');
const ideaActions = <HTMLParagraphElement> document.querySelector('#idea-actions');

const hideOrShowActions = () => {
    if (newIdea.innerHTML.length >= 3) {
      ideaActions.style.display = 'block';
    } else {
      ideaActions.style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => {

  newIdea.addEventListener('keyup', () => {
    hideOrShowActions();
  });

  cancelIdea.addEventListener('click', () => {
    newIdea.innerHTML = '';
    hideOrShowActions();
  });

});
