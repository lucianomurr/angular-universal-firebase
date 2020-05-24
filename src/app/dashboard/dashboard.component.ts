import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MetaService, PageInfo } from '../meta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  pageInfo: PageInfo = {
    title: 'Hero Dashboard',
    name: 'Hero',
    content: 'Hero dashboard with all the information about hero'
  };

  constructor(
    private heroService: HeroService,
    private metaService: MetaService
    ) { }

  ngOnInit() {
    this.getHeroes();
    this.metaService.setMeta(this.pageInfo);

  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
