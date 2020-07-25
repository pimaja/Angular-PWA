import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [DataService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core
      modules in the AppModule only.`);
    }
  }
}
