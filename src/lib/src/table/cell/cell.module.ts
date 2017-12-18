import {NgModule} from "@angular/core";
import {BdDynamicTemplateModule} from "@bindoc/templates";
import {BdTableValueCellComponent} from "./templates/value-cell.component";
import {BdTableCellComponent} from "./cell.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {BdTableDateCellComponent} from "./templates/date-cell.component";

export * from './cell-template-provider';

export * from './templates/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BdDynamicTemplateModule
  ],
  declarations: [
    BdTableValueCellComponent,
    BdTableDateCellComponent,
    BdTableCellComponent
  ],
  exports: [
    BdTableValueCellComponent,
    BdTableDateCellComponent,
    BdTableCellComponent
  ],
  providers: [

  ],
  entryComponents: [
    BdTableDateCellComponent,
    BdTableValueCellComponent
  ]
})
export class BdTableCellModule {

}
