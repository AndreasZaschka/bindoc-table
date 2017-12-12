import {NgModule} from "@angular/core";
import {BdTableTestComponent} from "./table.component";
import {RouterModule} from "@angular/router";
import {BdTableModule} from "table";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'table', component: BdTableTestComponent }
    ]),
    BdTableModule
  ],
  declarations: [
    BdTableTestComponent
  ],
  exports: [
    RouterModule,
    BdTableTestComponent
  ],
  providers: []
})
export class BdTableTestModule {

}
