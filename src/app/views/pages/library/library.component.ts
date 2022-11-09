import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/api/books.service';
import { Book } from 'src/app/services/model/book.model';
import { BooksResponse } from 'src/app/services/model/books-response.model';
import { UserBook } from 'src/app/services/model/user-book.model';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  books: UserBook[]= [];
  constructor(private bookServices: BooksService,  private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.bookServices.getAllBooks().subscribe((bs)=>{
      if(bs && bs.Books){
        this.books= bs.Books;
      }
    },(error) => {
      console.log(error);
    }
    );

  }

}
