import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Datatypes/user';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userprofileform = new FormGroup({
    user_first_name: new FormControl,
    user_last_name: new FormControl,
    user_organization_name: new FormControl,
    user_email: new FormControl,
    user_created_by: new FormControl,
  })
  id: string | null;
  message: string | undefined;
  isEmpty: boolean = false;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  user: any;
  Data: any;
  constructor(private router: Router, private http: HttpClient, private service: GetDataService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.service.getUserById(this.id).subscribe((resp: User[]) => {
        debugger;
        this.isEmpty = resp.length === 0;
        resp.forEach((element: User) => {


          this.userprofileform.controls['user_first_name'].setValue(element.user_first_name);
          this.userprofileform.controls['user_last_name'].setValue(element.user_last_name);
          this.userprofileform.controls['user_organization_name'].setValue(element.user_organization_name);
          this.userprofileform.controls['user_created_by'].setValue(element.user_created_by);
          this.userprofileform.controls['user_email'].setValue(element.user_email);
        });
      })
    }

  }
  //   this.req.user_id= this.id;
  //   this._api.put(this.req).subscribe((data: any)=>{
  //     this.objPosts = data;
  //         this._api.getComments().subscribe((resp:any)=>{
  //           this.listcomments=resp;
  //             this.flag = true;
  //             this.router.navigate(['/grid']);
  //               });
  //       });
  //     }
  //     else{
  //     this._api.post(this.req).subscribe((data: any)=>{
  //       this.objPosts = data;
  //       this._api.getuser().subscribe((resp:any)=>{
  //         this.listcomments=resp;
  //           this.flag = true;
  //           this.router.navigate(['/grid']);
  //             });
  //     });
  //   }
  // }
  ngOnInit(): void {
    this.getallData();
  }
  getallData() {
    this.service.getData().subscribe((resp: any) => {
      console.log(resp);
    })
  }


  onSubmit(data: any): void {
    if (this.id) {
      data.id = this.id;
      this.updateData(data);
    } else {
      this.service.addData(data)
        .subscribe((result) => {
          this.router.navigateByUrl('/grid');
          // this.getallData();
        })
    }

  }
  updateData(data: any): void {
    this.service.editUserById(data)
      .subscribe((result) => {
        this.router.navigateByUrl('/grid');
        //  this.getallData();
      })
  }
  deleteData(): void {
    this.service.deleteUserById(this.id)
      .subscribe((result) => {
        this.router.navigateByUrl('/grid');
        //  console.log(result);
      })

  }
}



function data(arg0: string, data: any) {
  throw new Error('Function not implemented.');
}
//   opost = new Posts();
//   opost.body='updating body';
//   opost.
// }

