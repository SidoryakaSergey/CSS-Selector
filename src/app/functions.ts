import 'highlight.js/styles/idea.css';

import hljs from 'highlight.js';

import { getID, outputAnswer } from './help';
import { arrLevels } from './obj';
import { setStorageId } from './storage';

const MAXLVL = 9;

function highlightHandler(): void {
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach((codeBlock) => {
    hljs.highlightBlock(codeBlock as HTMLElement);
  });
}

function addGameHTMLElements(id: number): void {
  const gameHTML = document.querySelector('.html');
  if (gameHTML) {
    gameHTML.innerHTML = arrLevels[id].questionHTML.reduce((acc, el) => acc + '\n' + el, '');
  }
}

function addGameTableImages(id: number): void {
  const gameTable = document.querySelector('.table');
  if (gameTable) {
    gameTable.classList.add('flip-animation');
    setTimeout(() => {
      gameTable.classList.remove('flip-animation');
    }, 1000);
    gameTable.innerHTML = '';
    arrLevels[id].questionImg.forEach((classEl) => {
      const div = document.createElement('div');
      div.classList.add(classEl);
      gameTable.append(div);
    });
  }
}

function addGameDescription(id: number): void {
  const gameDescription = document.querySelector('.game-task');
  if (gameDescription) {
    gameDescription.innerHTML = arrLevels[id].description;
  }
}

function removeClassPressed(): void {
  const levelBtns = document.querySelectorAll('.list-level') as NodeListOf<HTMLElement>;
  levelBtns.forEach((el: HTMLElement) => {
    if (el.classList.contains('item-pressed')) {
      el.classList.remove('item-pressed');
    }
  });
}

function correctAnswer(): void {
  const id = getID();
  const thisLevel = document.querySelector(`[data-level="${id}"]`);

  if (thisLevel) {
    if (id === MAXLVL) {
      const modalWin = document.querySelector('.modal');
      if (modalWin) {
        modalWin.classList.add('modal-on');
        thisLevel.classList.add('item-done');
      }
    } else {
      const nextLevel = document.querySelector(`[data-level="${id + 1}"]`);
      if (nextLevel) {
        thisLevel.classList.add('item-done');
        thisLevel.classList.remove('item-pressed');
        nextLevel.classList.add('item-pressed');
        renderLevel(id + 1);
      }
    }
  }
}

function wrongAnswer(): void {
  const leftWrap = document.querySelector('.left') as HTMLElement;
  if (leftWrap) {
    leftWrap.classList.add('shake-animation');
    setTimeout(() => {
      leftWrap.classList.remove('shake-animation');
    }, 300);
  }
}

function clickSubminHandler(): void {
  const answerCSS = document.querySelector('.answer-css') as HTMLInputElement;
  const id = getID();
  if (answerCSS) {
    if (answerCSS.value === arrLevels[id].answer) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  }
}

function resetGameHandler(): void {
  const levelBtns = document.querySelectorAll('.list-level') as NodeListOf<HTMLElement>;
  levelBtns.forEach((el: HTMLElement) => {
    el.className = 'list-level';
  });
  levelBtns[0].classList.add('item-pressed');
  renderLevel(0);
}

export function addEvents(): void {
  window.addEventListener('beforeunload', () => {
    setStorageId(getID());
  });

  const answerSubmit = document.querySelector('.answer-submit') as HTMLButtonElement;
  const answerCSS = document.querySelector('.answer-css') as HTMLInputElement;
  if (answerSubmit) {
    answerSubmit.addEventListener('click', clickSubminHandler);
  }

  const winBtn = document.querySelector('.win-btn') as HTMLButtonElement;
  if (answerSubmit) {
    winBtn.addEventListener('click', () => {
      const modalWin = document.querySelector('.modal');
      if (modalWin) {
        modalWin.classList.remove('modal-on');
      }
    });
  }

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      const id = getID();
      if (answerCSS) {
        if (answerCSS.value === arrLevels[id].answer) {
          correctAnswer();
        } else {
          wrongAnswer();
        }
      }
    }
  });

  const helpBtn = document.querySelector('#help') as HTMLButtonElement;
  if (helpBtn) {
    helpBtn.addEventListener('click', outputAnswer);
  }

  const resetBtn = document.querySelector('#reset') as HTMLButtonElement;
  if (resetBtn) {
    resetBtn.addEventListener('click', resetGameHandler);
  }

  const levelBtns = document.querySelectorAll('.list-level') as NodeListOf<HTMLElement>;
  levelBtns.forEach((el: HTMLElement) => {
    el.addEventListener('click', () => {
      const id: number = parseInt(el.dataset.level as string, 10);
      setStorageId(getID());
      removeClassPressed();
      el.classList.add('item-pressed');
      renderLevel(id);
    });
  });
}

export function renderLevel(id: number): void {
  const level = document.querySelector(`[data-level="${id}"]`);
  if (level) {
    level.classList.add('item-pressed');
  }
  addGameHTMLElements(id);
  addGameTableImages(id);
  addGameDescription(id);
  highlightHandler();
}

// document.addEventListener('DOMContentLoaded', highlightHandler);
