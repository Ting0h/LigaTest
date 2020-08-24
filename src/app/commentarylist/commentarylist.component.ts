import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { Commentary } from '../commentary';
import { CommentaryService } from '../commentary.service';
import { CategoryService } from '../category.service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-commentarylist',
  templateUrl: './commentarylist.component.html',
  styleUrls: ['./commentarylist.component.css']
})
export class CommentarylistComponent implements OnInit {
  @Input() category: Category;
  commentaryMenu: Boolean = true;
  commentaries: Commentary[];
  user: String = 'Ana';
  menuType;
  navStart: Observable<NavigationStart>;
  categories: Category[];
  imageSelected: Boolean = false;
  nameSelected: Boolean = false;
  commentarySelected: Boolean = false; 


  constructor(private commentaryService: CommentaryService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    route.params.subscribe(param => this.menuType = param['ownCommentary']);
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
    this.getCommentaries();
    this.getCategories();
  }

  ngOnInit(): void {
    this.navStart.subscribe(evt => {
      if (evt.url.includes('comments')) {
        this.route.params.subscribe(param => {
          this.menuType = param['user'];
        });
        this.getCommentaries();
      }
    });
    this.navStart.subscribe(evt => {
      if (evt.url.includes('comments')) {
        this.route.params.subscribe(param => {
          this.menuType = param['user'];
        });
        this.getCategories();
      }
    });
  }

  getCommentaries(): void{
    this.commentaryService.getCommentaries()
    .subscribe(commentary => this.commentaries = commentary)
  }

  getCategories(): void{
    this.categoryService.getCategories()
    .subscribe(category => this.categories = category)
  }

  createCommentaryMenu(): Boolean{
    this.commentaryMenu = false;
    return this.commentaryMenu;
  }

  showMenu(): Boolean{
    return this.commentaryMenu;
  }

  isRed(commentary: Commentary): Boolean{
    return commentary.face == 'red';
  }

  isGreen(commentary: Commentary): Boolean{
    return commentary.face == 'green';
  }

  isPurple(commentary: Commentary): Boolean{
    return commentary.face == 'purple';
  }

  isYellow(commentary: Commentary): Boolean{
    return commentary.face == 'yellow';
  }

  allCommentaries(): Boolean{
    return this.menuType == 0;
  }

  displayUserCommentaries(): Boolean{
    return this.menuType == 1;
  }

  displayCategoryCommentaries(): Boolean{
    return this.menuType == 2;
  }

  userCommentaries(commentary: Commentary): Boolean{
    return this.user == commentary.creator;
  }

  categoryCommentaries(commentary: Commentary): Boolean{
    for(let i = 0; i < this.categories.length; i++){
      if(commentary.category == this.categories[i].name)
        return true;
      else
        return false;
    }
  }

  readyImg(): void {
    this.imageSelected = true;
  }

  readyName(event: KeyboardEvent): void {
    this.nameSelected = true;
  }

  readyCommentary(event: KeyboardEvent): void {
    this.commentarySelected = true;
  }

  isValid(): Boolean{
    if(!this.imageSelected || !this.nameSelected || !this.commentarySelected)
      return false;
    else
      return true;
  }

}
