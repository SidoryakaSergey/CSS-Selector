import { Level } from './types';

function createHTMLCode(tag: string, clas: string | null, id: string | null): string {
  const OPENTAG = '&lt;';
  const CLOSETAG = '&gt;';
  let result: string;
  result = `${OPENTAG}${tag}`;
  if (clas) {
    result += ` class="${clas}"`;
  }
  if (id) {
    result += ` id="${id}"`;
  }
  return `${result}${CLOSETAG}`;
}

export const arrLevels: Level[] = [
  {
    id: 0,
    questionHTML: [createHTMLCode('cat', null, null), createHTMLCode('dog', null, null), createHTMLCode('rabbit', null, null)],
    questionImg: ['animated-cat', 'dog', 'rabbit'],
    answer: 'cat',
    description: 'Select the cat',
  },
  {
    id: 1,
    questionHTML: [createHTMLCode('cat', 'Kity', null), createHTMLCode('dog', 'Bob', null), createHTMLCode('dog', null, null)],
    questionImg: ['cat', 'animated-dog', 'dog'],
    answer: '.Bob',
    description: 'Select the Bob',
  },
  {
    id: 2,
    questionHTML: [createHTMLCode('rabbit', 'Kity', null), createHTMLCode('dog', 'Bob', null), createHTMLCode('rabbit', null, 'Rebecca')],
    questionImg: ['rabbit', 'dog', 'animated-rabbit'],
    answer: '#Rebecca',
    description: 'Select the Rebecca',
  },
  {
    id: 3,
    questionHTML: [createHTMLCode('dog', null, null), createHTMLCode('dog', null, null), createHTMLCode('dog', null, null)],
    questionImg: ['animated-dog', 'dog', 'dog'],
    answer: ':first-child',
    description: 'Select the first child',
  },
  {
    id: 4,
    questionHTML: [createHTMLCode('dog', null, null), createHTMLCode('dog', null, null), createHTMLCode('dog', null, null)],
    questionImg: ['dog', 'dog', 'animated-dog'],
    answer: ':last-child',
    description: 'Select the last child',
  },
  {
    id: 5,
    questionHTML: [
      createHTMLCode('rabbit', 'Kity', null),
      createHTMLCode('rabbit', null, 'Rebecca'),
      createHTMLCode('rabbit', 'Pupsik', null),
    ],
    questionImg: ['animated-rabbit', 'animated-rabbit', 'animated-rabbit'],
    answer: 'rabbit',
    description: 'Select all rabbits',
  },
  {
    id: 6,
    questionHTML: [createHTMLCode('cat', 'Kity', null), createHTMLCode('dog', 'Bob', null), createHTMLCode('rabbit', null, 'Rabecca')],
    questionImg: ['animated-cat', 'animated-dog', 'animated-rabbit'],
    answer: '*',
    description: 'Select all animals',
  },
  {
    id: 7,
    questionHTML: [createHTMLCode('cat', null, null), createHTMLCode('dog', null, null), createHTMLCode('rabbit', null, null)],
    questionImg: ['animated-cat', 'dog', 'animated-rabbit'],
    answer: ':not(dog)',
    description: 'Select all animals except dog',
  },
  {
    id: 8,
    questionHTML: [createHTMLCode('dog', null, null), createHTMLCode('cat', null, null), createHTMLCode('cat', null, null)],
    questionImg: ['dog', 'animated-cat', 'cat'],
    answer: 'dog~cat',
    description: 'Select second cat',
  },
  {
    id: 9,
    questionHTML: [createHTMLCode('cat', 'Kity', null), createHTMLCode('dog', 'Kity', null), createHTMLCode('cat', 'Pupsik', null)],
    questionImg: ['animated-cat', 'dog', 'cat'],
    answer: 'cat.Kity',
    description: 'Select the cat Kity',
  },
];
