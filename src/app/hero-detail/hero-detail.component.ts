import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
import { PageInfo, MetaService } from '../meta.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  pageInfo: PageInfo = {
    title: 'Hero detail ',
    name: 'The hero detail page',
    content: 'some info about the hero selected'
  };

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private metaService: MetaService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  updatePageInfo(hero){
    this.pageInfo.title += ': '+hero.name;
    this.metaService.setMeta(this.pageInfo);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe( (hero) => {
        this.updatePageInfo(hero);
        return this.hero = hero;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
