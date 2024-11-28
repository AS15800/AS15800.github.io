import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
