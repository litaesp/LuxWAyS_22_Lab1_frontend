export * from './books.service';
import { BooksService } from './books.service';
export * from './dbInit.service';
import { DbInitService } from './dbInit.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [BooksService, DbInitService, UsersService];
