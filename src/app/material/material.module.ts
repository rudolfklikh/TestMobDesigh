import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    MatSliderModule,
    MatBadgeModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [
    MatSliderModule,
    MatBadgeModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule
  ]
})
export class MaterialModule { }
