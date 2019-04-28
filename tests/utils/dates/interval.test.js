import { getPeriod } from '../../../src/utils/dates/period';
import { getDateIntervalRange } from '../../../src/utils/dates/interval';
import { SCALE_MONTH } from '../../../src/utils/enums/view_modes';
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

test('getDateIntervalRange', () => {
  const period = getPeriod(tasks, false, MONTH);
  const interval = getDateIntervalRange(period, SCALE_MONTH, false, 24);
  expect(interval.length).toBe(3);
});
