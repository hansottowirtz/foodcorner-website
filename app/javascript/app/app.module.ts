import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FoodcornersMapComponent } from './foodcorners-map/foodcorners-map.component';
import { HeaderComponent } from './header/header.component';
import { FoodcornerPageComponent } from './foodcorner-page/foodcorner-page.component';
import { FoodcornersMapPageComponent } from './foodcorners-map-page/foodcorners-map-page.component';
import { OrderTrackingPageComponent } from './order-tracking-page/order-tracking-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodcornersMapComponent,
    HeaderComponent,
    FoodcornerPageComponent,
    FoodcornersMapPageComponent,
    OrderTrackingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: FoodcornersMapPageComponent },
        { path: 'foodcorners/:name', component: FoodcornerPageComponent },
        { path: 'orders/:id', component: OrderTrackingPageComponent },
      ]
    )
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
