import {
  obj, orderByProps,
} from '../objCharacters';

const arrCheck = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

test('check function orderByProps', () => {
  const checkProps = orderByProps(obj, ['name', 'level']);
  expect(checkProps).toEqual(arrCheck);
});
