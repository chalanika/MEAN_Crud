import { Component, OnInit ,TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {UserService} from '../../user.service'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  modalRef: BsModalRef;
  user : User = new User();
  users:any;
  editUser:any;
  id ={ 'id':''};
  constructor(private modalService: BsModalService, private userService:UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.get().subscribe(res=>{
      this.users = res ;
      console.log(this.users);
    },error =>{
      console.log(error);
    })
  }

  openModalAdd(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalEdit(template: TemplateRef<any>,user) {
    this.editUser = user;
    this.modalRef = this.modalService.show(template);
  }

  openModalDelete(template: TemplateRef<any>,id){
    this.id.id = id;
    console.log(this.id.id);
    this.modalRef = this.modalService.show(template);
  }

  onSave(){
    this.userService.post(this.user).subscribe(res=>{
      this.getUser();
      this.modalRef.hide();
      console.log(this.user);
    },error=>{
      console.log(error);
    });
  }  

  onEdit(){
    this.userService.update(this.editUser).subscribe(res=>{
      this.getUser();
      this.modalRef.hide();
      console.log(this.user);
    },error=>{
      console.log(error);
    });

  } 
  
  onDelete(){
    this.userService.delete(this.editUser).subscribe(res=>{
      this.getUser();
      this.modalRef.hide();
      console.log(this.user);
    },error=>{
      console.log(error);
    });
  } 
}
class User{
  name:string;
  address :string;
}