import { buildSVG } from './svg';

const buildPopupWrapper = document => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('popup-wrapper');
  return wrapper;
};

const buildContainerWrapper = document => {
  const container = document.createElement('div');
  container.classList.add('gantt-container');
  return container;
};

export const buildWrappers = (element, document) => {
  const containerWrapper = buildContainerWrapper(document);

  const svg = buildSVG(element);

  const parentElement = svg.parentElement;
  parentElement.appendChild(containerWrapper);
  containerWrapper.appendChild(svg);

  const popupWrapper = buildPopupWrapper(document);
  containerWrapper.appendChild(popupWrapper);

  return {
    containerWrapper,
    popupWrapper,
    svg
  };
};
