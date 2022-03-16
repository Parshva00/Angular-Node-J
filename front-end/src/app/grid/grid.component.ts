import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  // alert: boolean=false
title = "User Profile"

  userdata: any;
  id: any;

constructor(private service: GetDataService, private route: ActivatedRoute,private router:Router) { 
 // this.id = this.route.snapshot.paramMap.get('id');
}

  ngOnInit(): void {
    this.service.getData().subscribe
    (
      (      data: any)=>
      {
        this.userdata = data;
      }
    );
  }
  delete(id:number): void {
    this.router.navigateByUrl('user-form/'+id);
    // this.service.deleteUserById(this.id)
    // .subscribe((result) => {
    //   console.log(result);
    // })
    
  }

}
 