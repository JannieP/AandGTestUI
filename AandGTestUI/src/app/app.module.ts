import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccordionModule, BsDropdownModule, ModalModule, PaginationModule, TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { routes } from './app.router';
import { SearchRestService } from './shared/services/search-rest.service';
import { YcombinatorComponent } from './ycombinator/ycombinator.component';

@NgModule({
  declarations: [
    AppComponent,
    YcombinatorComponent,

  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [SearchRestService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (_title: Title) {
    _title.setTitle('YCombinator search');
  }
}
