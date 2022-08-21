export const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export function orderByProps(objIn, keys) {
  const keyPropOrder = [];
  const objProp = [];
  for (const prop in objIn) {
    keys.includes(prop) ? objProp.push({ key: prop, value: objIn[prop] }) : keyPropOrder.push(prop);
  }
  for (const keySorted of keyPropOrder.sort()) {
    objProp.push({ key: keySorted, value: objIn[keySorted] });
  }
  return objProp;
}
