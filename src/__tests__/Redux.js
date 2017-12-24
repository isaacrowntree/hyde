import { comparePassword } from '../Redux';
import CryptoJS from 'crypto-js';

test('Can decrypt a password', () => {
  expect(comparePassword('test')).toEqual(true);
  expect(comparePassword('not_a_password')).toEqual(false);
});
