import { user } from 'data';
import { User } from 'types';
import { TIMEOUT } from 'constants';

export const getUser = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, TIMEOUT);
  });
};
