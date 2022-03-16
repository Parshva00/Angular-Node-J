import { GetDataService } from './../get-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin = new FormGroup({
    user_name: new FormControl,
    user_password: new FormControl
  });
  selectUserbyname: any;

  ;
  constructor(private service: GetDataService, private route: ActivatedRoute, private routr: Router) {

  }

  ngOnInit(): void {

  }

  onSubmit(body: any): void {
    this.selectUser(body);
    console.log(body);
  }
  selectUser(body: any): void {
    this.service.selectUserbyname(body)
      .subscribe((result) => {
        if (result && result.length > 0)
          this.routr.navigateByUrl('/user-form/' + result[0].user_id);
          else
          alert('no user found');
        // console.log(result);
      })
  }
  Userlogin(): void {

  }

}
