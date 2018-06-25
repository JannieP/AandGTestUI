declare module Ycombinator {

  export class Results {
    hits: Hit[];
    page: number;
    nbHits: number;
    nbPages: number;
    hitsPerPage: number;
    processingTimeMS: number;
    query: string;
    params: string;
  }

  export class Title {
    value: string;
    matchLevel: string;
    matchedWords: any[];
  }

  export class Url {
    value: string;
    matchLevel: string;
    matchedWords: any[];
  }

  export class Author {
    value: string;
    matchLevel: string;
    matchedWords: string[];
  }

  export class HighlightResult {
    title: Title;
    url: Url;
    author: Author;
  }

  export class Hit {
    title: string;
    url: string;
    author: string;
    points: number;
    story_text?: string;
    story_title?: string;
    story_url?: string;
    comment_text?: string;
    _tags: string[];
    num_comments: number;
    objectID: string;
    _highlightResult: HighlightResult;
  }

}

