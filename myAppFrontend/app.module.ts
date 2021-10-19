import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HttpClientModule } from '@angular/common/http';
import { BookServiceService } from './book-service.service';
import { Books } from './books'
import { FormsModule } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogBookComponent } from './dialog-book/dialog-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent,
    DialogBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [BookServiceService,Books,BookListComponent],
  bootstrap: [AppComponent],
  entryComponents: [DialogBookComponent]
})
export class AppModule { }
