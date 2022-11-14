import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksService } from 'src/app/services/api/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addForm = new FormGroup({
    title: new FormControl(''),
    resume: new FormControl(''),
    url: new FormControl(''),
    urlAvailable: new FormControl(false)
  });

  constructor(private bookService: BooksService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onSubmit(){
    return;
  }

  fetchRessource(){
    console.log(this.addForm.value);
    if(this.addForm.value.url){
      this.bookService.fetchUrl(this.addForm.value.url?.toString()).subscribe(
        (data:string)=> {this.addForm.patchValue({resume : data})},
        (error:Error)=>{console.log(error.message)}
      );
    }
    
  }
  onCheckboxChange(value: boolean){
    console.log(value)
    this.changeDetector.detectChanges();
  }

}
