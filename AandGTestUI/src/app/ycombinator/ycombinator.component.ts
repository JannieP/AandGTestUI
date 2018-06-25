import { Component, OnInit } from '@angular/core';
import { SearchRestService } from '../shared/services/search-rest.service';
import Hit = Ycombinator.Hit;
import Results = Ycombinator.Results;

@Component({
  selector: 'app-ycombinator',
  templateUrl: './ycombinator.component.html',
  styleUrls: ['./ycombinator.component.css']
})
export class YcombinatorComponent implements OnInit {

  tags:string[] = ['story','comment','poll','pollopt','show_hn','ask_hn','front_page'];
  activeTags:string[] = [];
  results:any = {hits:[],nbHits:0,page:0,hitsPerPage:0};
  numPages: number = 0;
  newsSearchResults:Hit[]  = [];
  queryString:string = "";
  formTitle:string;
  currentPage:number = 0;

  constructor(private _searchRestService:SearchRestService) { }

  ngOnInit() {
    this.formTitle = "Y Combinator Hacker News Search"
  }

  private search(){

    let response = this._searchRestService.getSearchResult(this.queryString,this.activeTags,[],this.currentPage);

    response.subscribe(
      value => {
        this.results = value;
        this.newsSearchResults = value.hits;
      }

    );

  }

  searchYcombinator(event) {
    if (event.target.value && event.target.value.length < 6) {
      return;
    }

    this.queryString = event.target.value;
    this.currentPage = 0;
    this.search();

  }

  searchChangePage(event){
    this.currentPage = event.page;
    this.search();
  }

  openLinkInNewPage(hit:Hit){
    window.open(hit.url, "_blank");
  }

  switchNumPages ($event: number) {
    this.numPages = $event;
  }
}
