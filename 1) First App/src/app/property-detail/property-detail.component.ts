import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    //this.id = Number(this.route.snapshot.params['id']);

    //name in params[''] should be same as in app.module.ts
    //we can use only + sign to convert string into number a below
    this.id = +this.route.snapshot.params['id'];

    //important to refresh the page for pagination buttons
    this.route.params.subscribe(
      (params)=> {
        this.id = +params['id'];
      }
    );
  }

  onBackClick()
  {
    this.router.navigate(['/']);
  }

  onNextClick()
  {
    this.id += 1;
    //can use both methods
    //this.router.navigate(['property-detail/'+this.id]);
    this.router.navigate(['property-detail',this.id]);
  }

}
