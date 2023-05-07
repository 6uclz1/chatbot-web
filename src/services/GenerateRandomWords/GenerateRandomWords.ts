import { faker } from '@faker-js/faker/locale/ja';

export const generateRandomWords = () => {
  return faker.lorem.word();
}
