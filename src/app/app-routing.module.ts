import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {AddproductComponent} from "./addproduct/addproduct.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {ForgotpasswordComponent} from "./forgotpassword/forgotpassword.component"
import {DeleteaccountComponent} from "./deleteaccount/deleteaccount.component"
import {ViewproductComponent} from "./viewproduct/viewproduct.component"
import {CartComponent} from './cart/cart.component'
import {CheckoutComponent} from './checkout/checkout.component'
import {OrderlistComponent} from './orderlist/orderlist.component'
const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'addProduct',component:AddproductComponent},
  //{path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'deleteaccount',component:DeleteaccountComponent},
  {path:'viewproduct/:id',component:ViewproductComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'orderlist',component:OrderlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
