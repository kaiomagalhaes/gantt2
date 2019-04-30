var tasks = [
  {
    id: '0',
    name: 'Task 1',
    start: '2019-01-01',
    end: '2019-07-25'
  },
  {
    id: '1',
    name: 'Task 2',
    start: '2019-08-01',
    end: '2019-12-23'
  },
  {
    id: '2',
    name: 'Task 3',
    start: '2019-01-01',
    end: '2019-03-15'
  },
  {
    id: '3',
    name: 'Task 4',
    start: '2019-01-15',
    end: '2019-09-20'
  },
  {
    id: '4',
    name: 'Task 5',
    start: '2019-01-01',
    end: '2019-04-28'
  },
  {
    id: '5',
    name: 'Task 6',
    start: '2019-04-29',
    end: '2019-12-23',
    dependencies: '4'
  }
];

var gantt = new Gantt('#gantt', tasks, {
  with_padding: false,
  view_mode: 'Month'
});
