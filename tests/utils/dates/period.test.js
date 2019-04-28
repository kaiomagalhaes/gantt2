import { getPeriod } from '../../../src/utils/dates/period';
import { MONTH } from '../../../src/utils/enums/time';

var tasks = [
  {
    id: '1',
    name: 'feature 1',
    _start: new Date('2019-03-01'),
    _end: new Date('2019-04-28')
  },
  {
    id: '2',
    name: 'feature 2',
    _start: new Date('2019-03-01'),
    _end: new Date('2019-04-15')
  },
  {
    id: '3',
    name: 'feature 3',
    _start: new Date('2019-04-16'),
    _end: new Date('2019-05-20')
  }
];

test('getPeriod: start', () => {
  const period = getPeriod(tasks, false, MONTH);
  const { start } = period;

  const expectedStart = new Date('2019-03-01');

  expect(start.getDay()).toBe(expectedStart.getDay());
  expect(start.getMonth()).toBe(expectedStart.getMonth());
  expect(start.getYear()).toBe(expectedStart.getYear());
});

test('getPeriod: end', () => {
  const period = getPeriod(tasks, false, MONTH);
  const { end } = period;

  const expectedEnd = new Date('2019-05-20');

  expect(end.getDay()).toBe(expectedEnd.getDay());
});
