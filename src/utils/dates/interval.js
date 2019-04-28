import date_utils from '../../date_utils';
import { isViewMode } from '../viewMode';
import { SCALE_MONTH, SCALE_YEAR } from '../enums/view_modes';
import { YEAR, MONTH, HOUR } from '../enums/time';

//@TODO: improve the step system to not be hourly based, and not be used only
//for the our view mode
export const getDateIntervalRange = (period, viewScale, withPadding, step) => {
  const { start, end } = period;
  let currentDate = date_utils.clone(start);
  const dates = [currentDate];

  while (currentDate < end) {
    if (isViewMode(viewScale, SCALE_YEAR)) {
      currentDate = date_utils.add(currentDate, 1, YEAR);
    } else if (isViewMode(viewScale, SCALE_MONTH)) {
      currentDate = date_utils.add(currentDate, 1, MONTH);
    } else {
      currentDate = date_utils.add(currentDate, step, HOUR);
    }

    if (withPadding || currentDate < end) {
      dates.push(currentDate);
    }
  }

  return dates;
};
