const counterDiv = document.querySelector('div[data-counter]');
const decrement = counterDiv.childNodes[1];
const countLabel = counterDiv.childNodes[3];
const increment = counterDiv.childNodes[5];
const changeValueButtons = [decrement, increment];

const render = (value) => {
  countLabel.textContent = value;
}

export default function counter(state) {
  state.counter = countLabel.textContent;
  changeValueButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      if (event.target.textContent === '+' || state.counter > 0) {
        const action = `${state.counter} ${button.textContent} 1`;
        state.counter = eval(action);
        render(state.counter);
      }
    })
  })
}
