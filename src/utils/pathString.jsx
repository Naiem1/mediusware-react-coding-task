export const pathStringTransform = (str) => {
  const transformedStr = str.replace(/-|\//g, ' ');
  return transformedStr.toUpperCase();
};
