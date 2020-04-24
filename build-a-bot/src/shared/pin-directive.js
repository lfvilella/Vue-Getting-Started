export default {
  bind: (el, binding) => {
    const element = el;

    Object.keys(binding.value).forEach((position) => {
      element.style[position] = binding.value[position];
    });

    element.style.position = 'absolute';
  },
};
