import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ServicesComponent } from "./services/services.component";
import { AboutsComponent } from "./abouts/abouts.component";

import { RouterModule } from "@angular/router";
import { FallbackComponent } from "./fallback/fallback.component";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    AboutsComponent,
    FallbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "services",
        component: ServicesComponent
      },
      {
        path: "products",
        component: ProductsComponent
      },
      {
        path: "aboutus",
        component: AboutsComponent
      },
      {
        path: "**",
        component: FallbackComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
