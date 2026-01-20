import * as dotenv from 'dotenv';
dotenv.config();

import { LiteraryWorkData } from './types/LiteraryWorkData';
import { LibraryItemManager } from './types/LibraryItemManager';

const literaryWorkCollection: LiteraryWorkData[] = [
  {
    title: 'Война и мир',
    author: 'Лев Толстой',
    year: 1869
  },
  {
    title: 'Преступление и наказание',
    author: 'Федор Достоевский',
    year: 1866
  }
];

const userNamesFromEnv = [
  process.env.USER_NAME_1 || 'Пользователь1',
  process.env.USER_NAME_2 || 'Пользователь2'
];

const libraryItems = literaryWorkCollection.map(
  (workData, index) => new LibraryItemManager(workData)
);

libraryItems.forEach((item, idx) => {
  item.borrow(userNamesFromEnv[idx]);
});
