import date_utils from '../../date_utils';
import { isViewMode } from '../viewMode';

import {
  YEAR,
  MONTH,
  DAY,
  HOUR,
  MINUTE,
  SECOND,
  MILLISECOND
} from '../enums/time';
import {
  SCALE_DAY,
  SCALE_HALF_DAY,
  SCALE_MONTH,
  SCALE_QUARTER_DAY,
  SCALE_WEEK,
  SCALE_YEAR
} from '../enums/view_modes';

const getPeriodWithPadding = (period, viewMode) => {
  const { start, end } = period;
  let startWithPadding = null;
  let endWithPadding = null;

  if (isViewMode(viewMode, [SCALE_QUARTER_DAY, SCALE_HALF_DAY])) {
    startWithPadding = date_utils.add(start, -7, DAY);
    endWithPadding = date_utils.add(end, 7, DAY);
  } else if (isViewMode(viewMode, SCALE_MONTH)) {
    startWithPadding = date_utils.start_of(start, YEAR);
    endWithPadding = date_utils.add(end, 1, YEAR);
  } else if (isViewMode(viewMode, SCALE_YEAR)) {
    startWithPadding = date_utils.add(start, -2, YEAR);
    endWithPadding = date_utils.add(end, 2, YEAR);
  } else {
    startWithPadding = date_utils.add(start, -1, MONTH);
    endWithPadding = date_utils.add(end, 1, MONTH);
  }

  return {
    start: startWithPadding,
    end: endWithPadding
  };
};

const getSimplePeriod = tasks => {
  let start = null;
  let end = null;

  for (let task of tasks) {
    // set global start and end date
    if (!start || task._start < start) {
      start = task._start;
    }
    if (!end || task._end > end) {
      end = task._end;
    }
  }

  //@TODO: discover why this is necessary
  //start = date_utils.start_of(start, DAY);
  // end = date_utils.start_of(end, DAY);

  return {
    start,
    end
  };
};

export const getPeriod = (tasks, withPadding, viewMode) => {
  const period = getSimplePeriod(tasks);

  if (withPadding) {
    return getPeriodWithPadding(period, viewMode);
  }

  return period;
};
