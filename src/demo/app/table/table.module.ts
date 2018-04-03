import {HttpClientModule} from '@angular/common/http';
import {NgModule} from "@angular/core";
import {SampleCellComponent} from './sampel-cell-template.component';
import {BdTableTestComponent} from "./table.component";
import {RouterModule} from "@angular/router";
import {BdTableCellModule, BdTableModule} from 'table';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild([
      { path: 'table', component: BdTableTestComponent }
    ]),
    BdTableCellModule,
    BdTableModule
  ],
  declarations: [
    BdTableTestComponent,
    SampleCellComponent
  ],
  exports: [
    RouterModule,
    BdTableTestComponent
  ],
  providers: [],
  entryComponents: [
    SampleCellComponent
  ]
})
export class BdTableTestModule {

}
