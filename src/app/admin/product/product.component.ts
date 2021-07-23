import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title:any;
  todo:any={};
  todos:any=[];

  constructor(
    public dialog:MatDialog
  ) {
  }

  ngOnInit(): void {
    this.title='ToDo List';
    this.todo={
      title:'project tekweb',
      time:"31 juli",
      ket:'Membuat App Web',
      status:"Progres"
    };
    this.getTodos()
  } 

  getTodos()
  {
    this.todos=[
      {
        title:'project tekweb',
        time:"31 juli",
        ket:'Membuat App Web',
        status:"Progres"
      },
      {
        title:'praktikum pemvis',
        time:"26 juli",
        ket:'responsi jkashdiahsfilh msfhliafsa kjsfhoaefgklea ksahfoiewyraw klahwfuyoqwfyhla skfjhaiofyaw ksafhoa',
        status:"Progres"
      }
    ];
  }  

  ProductDetail(data: any,idx: number)
 {
   let dialog=this.dialog.open(ProductDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe((res: any)=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.todos.push(res);      
        //jika tidak maka perbarui data  
       else this.todos[idx]=res; 
     }
   })
 }

 deleteProduct(idx: any)
  {
    var conf=confirm('Delete item?');
    if(conf)
    this.todos.splice(idx,1);
  }


}