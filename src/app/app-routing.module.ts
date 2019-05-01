import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookFormComponent} from "./book-form/book-form.component";
import {LoginComponent} from "./login/login.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrderComponent} from "./order/order.component";
import {OrderHistoryComponent} from "./order-history/order-history.component";
import {AdminComponent} from "./admin/admin.component";
import {OrderManagementComponent} from "./order-management/order-management.component";
import {OrderOverviewComponent} from "./order-overview/order-overview.component";
import {OrderEditComponent} from "./order-edit/order-edit.component";

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'books', component: BookListComponent},
  {path:'books/:isbn', component: BookDetailsComponent},
  //{path:'admin', component: BookFormComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'addBook', component: BookFormComponent},
  {path: 'manageOrder', component: OrderManagementComponent},
  {path: 'editOrder', component: OrderEditComponent},
  {path:'admin/:isbn', component: BookFormComponent},
  {path:'login', component: LoginComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'history', component: OrderHistoryComponent},
  {path: 'orderOverview', component: OrderOverviewComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
