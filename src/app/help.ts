import { arrLevels } from './obj';

function disableInteraction(): void {
  document.body.addEventListener('click', disableEvent, true);
  document.body.addEventListener('mousedown', disableEvent, true);
  document.body.addEventListener('mouseup', disableEvent, true);
  document.body.addEventListener('keydown', disableEvent, true);
  document.body.addEventListener('keyup', disableEvent, true);
  document.body.addEventListener('keypress', disableEvent, true);
}

function enableInteraction(): void {
  document.body.removeEventListener('click', disableEvent, true);
  document.body.removeEventListener('mousedown', disableEvent, true);
  document.body.removeEventListener('mouseup', disableEvent, true);
  document.body.removeEventListener('keydown', disableEvent, true);
  document.body.removeEventListener('keyup', disableEvent, true);
  document.body.removeEventListener('keypress', disableEvent, true);
}

function disableEvent(event: Event): void {
  event.preventDefault();
  event.stopPropagation();
}

export function getID(): number {
  const idPressedBtn = document.querySelector('.item-pressed') as HTMLElement;

  if (idPressedBtn) {
    return parseInt(idPressedBtn.dataset.level as string, 10);
  } else {
    return -1;
  }
}

export function outputAnswer(): void {
  const inputAnswer = document.querySelector('.answer-css') as HTMLInputElement;
  const id = getID();
  const thisLevel = document.querySelector(`[data-level="${id}"]`);
  if (thisLevel) {
    thisLevel.classList.add('item-help');
  }
  if (inputAnswer) {
    const text = arrLevels[id].answer;
    disableInteraction();
    let index = 0;
    inputAnswer.value = '';
    const interval = setInterval(() => {
      inputAnswer.value += text[index];
      index++;

      if (index >= text.length) {
        clearInterval(interval);
        enableInteraction();
      }
    }, 100);
  }
}
