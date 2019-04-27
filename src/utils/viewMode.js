import { isString } from './string';

export const isViewMode = (modes, viewMode) => {
  if (isString(modes)) {
    return viewMode === modes;
  }

  if (Array.isArray(modes)) {
    return modes.some(mode => viewMode === mode);
  }

  return false;
};
