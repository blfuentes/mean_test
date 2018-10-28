import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

declare var M: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  addUser(form: NgForm) {
    if(form.value._id){
      // update
      this.userService.putUser(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'update successfuly'});
          this.getUsers();
        });
    } else {
        this.userService.postUser(form.value)
          .subscribe(res => {
            this.resetForm(form);
            M.toast({html: 'save succesfully'});
            this.getUsers();
          });
    }
  }

  getUsers(){
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
        console.log(res);
      });
  }

  editUser(user: User){
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string){
    if(confirm('Are your sure you want to delete it?')){
        this.userService.deleteUser(_id)
          .subscribe(res => {
            this.getUsers();
            M.toast({html: 'delete succesfully'});
          });
    }
  }

  resetForm(form?: NgForm) {
    if(form){
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

}
