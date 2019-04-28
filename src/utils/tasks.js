import { isString } from './string';
import date_utils from '../date_utils';
import { YEAR, DAY, HOUR } from './enums/time';

export const getPreparedTasks = tasks => {
  const preparedTasks = tasks.map((task, i) => {
    // convert to Date objects
    task._start = date_utils.parse(task.start);
    task._end = date_utils.parse(task.end);

    // make task invalid if duration too large
    if (date_utils.diff(task._end, task._start, YEAR) > 10) {
      task.end = null;
    }

    // cache index
    task._index = i;

    // invalid dates
    if (!task.start && !task.end) {
      const today = date_utils.today();
      task._start = today;
      task._end = date_utils.add(today, 2, DAY);
    }

    if (!task.start && task.end) {
      task._start = date_utils.add(task._end, -2, DAY);
    }

    if (task.start && !task.end) {
      task._end = date_utils.add(task._start, 2, DAY);
    }

    // if hours is not set, assume the last day is full day
    // e.g: 2018-09-09 becomes 2018-09-09 23:59:59
    const task_end_values = date_utils.get_date_values(task._end);
    if (task_end_values.slice(3).every(d => d === 0)) {
      task._end = date_utils.add(task._end, 24, HOUR);
    }

    // invalid flag
    if (!task.start || !task.end) {
      task.invalid = true;
    }

    // dependencies
    if (isString(task.dependencies) || !task.dependencies) {
      let deps = [];
      if (task.dependencies) {
        deps = task.dependencies
          .split(',')
          .map(d => d.trim())
          .filter(d => d);
      }
      task.dependencies = deps;
    }

    // uids
    if (!task.id) {
      task.id = generateTaskId(task);
    }

    return task;
  });

  return preparedTasks;
};

export const getTasksDependencies = tasks => {
  const dependencies = {};
  for (let t of tasks) {
    for (let d of t.dependencies) {
      dependencies[d] = dependencies[d] || [];
      dependencies[d].push(t.id);
    }
  }
  return tasks;
};

const generateTaskId = task => {
  return `${task.name}_${Math.random().toString(36).slice(2, 12)}`;
};
