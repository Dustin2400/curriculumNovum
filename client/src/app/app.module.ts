import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

import { AaIntroComponent } from './aa-intro/aa-intro.component';
import { BaNeolithicComponent } from './ba-neolithic/ba-neolithic.component';
import { BbMesopotamiaComponent } from './bb-mesopotamia/bb-mesopotamia.component';

import { SatPopoverModule } from '@ncstate/sat-popover';
import { EtytooltipComponent } from './etytooltip/etytooltip.component';
import { EtydictionaryComponent } from './etydictionary/etydictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    AaIntroComponent,
    BaNeolithicComponent,
    BbMesopotamiaComponent,
    EtytooltipComponent,
    EtydictionaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    SatPopoverModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
