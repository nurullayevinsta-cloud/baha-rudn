import { LiteraryWorkData } from './LiteraryWorkData';
import { LoanableInterface } from './LoanableInterface';

export class LibraryItemManager implements LoanableInterface {
  private readonly workInformation: LiteraryWorkData;

  constructor(workData: LiteraryWorkData) {
    this.workInformation = workData;
  }

  borrow(recipientName: string): void {
    const prefix = process.env.BORROW_MESSAGE_PREFIX || 'Книга';
    const outputMessage = `${prefix} "${this.workInformation.title}" выдана пользователю ${recipientName}`;
    console.log(outputMessage);
  }
}
