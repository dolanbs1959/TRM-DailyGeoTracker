import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationComponent } from 'src/app/components/location/location.component';
import { QuickbaseService } from 'src/app/services/quickbase.service';

@NgModule({
  declarations: [AppComponent, LocationComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  QuickbaseService,
],
  bootstrap: [AppComponent],
})
export class AppModule {}
