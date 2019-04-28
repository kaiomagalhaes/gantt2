import { isString } from '../string';

export const buildSVG = element => {
  let svg_element, wrapper_element;

  // CSS Selector is passed
  if (isString(element)) {
    element = document.querySelector(element);
  }

  // get the SVGElement
  if (element instanceof HTMLElement) {
    wrapper_element = element;
    svg_element = element.querySelector('svg');
  } else if (element instanceof SVGElement) {
    svg_element = element;
  } else {
    throw new TypeError(
      'Frappé Gantt only supports usage of a string CSS selector,' +
      " HTML DOM element or SVG DOM element for the 'element' parameter"
    );
  }

  let svg = null;
  // svg element
  if (!svg_element) {
    // create it
    svg = createSVG('svg', {
      append_to: wrapper_element,
      class: 'gantt'
    });
  } else {
    svg = svg_element;
    svg.classList.add('gantt');
  }
  return svg;
};
