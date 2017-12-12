import {NgModule} from "@angular/core";
import {MatTableModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {BdTableComponent} from "./table.component";

export * from './column/index';
export * from './data-source/index';

export * from './table.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [
    BdTableComponent
  ],
  exports: [
    BdTableComponent
  ],
  providers: []
})
export class BdTableModule {

}
