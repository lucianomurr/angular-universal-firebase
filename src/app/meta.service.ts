import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface PageInfo {
  title: string,
  name: string,
  content: string
}


@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }
  setMeta(info: PageInfo){
    this.titleService.setTitle(info.title);
    this.metaService.updateTag(
      {
        name: info.name,
        content: info.content
      }
    );
  }
}
