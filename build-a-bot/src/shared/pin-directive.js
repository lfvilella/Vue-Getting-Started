function applyStyle(elementSelf, binding) {
  const element = elementSelf;

  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });

  element.style.position = 'absolute';
}

export default {
  bind: (elementSelf, binding) => {
    applyStyle(elementSelf, binding);
  },
  update: (elementSelf, binding) => {
    applyStyle(elementSelf, binding);
  },
};
