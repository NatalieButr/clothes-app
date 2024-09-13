import { user } from 'data';
import { User } from 'types';

export const getUser = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 1000);
  });
};
