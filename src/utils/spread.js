import assign from 'object-assign';

export default (obj, omit) => {
  let clone = assign({}, obj);
  omit.forEach((key) => {
    delete clone[key];
  });
  return clone;
}
