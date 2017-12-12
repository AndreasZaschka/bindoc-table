import {Component} from "@angular/core";
import {SampleDataSource, TEST_DATA_COLUMNS} from "./sample-data-source.model";
import {IBdTableColumn} from "table";

@Component({
  selector: '',
  template: `
    <bd-table [dataSource]="sampleDataSource"
              [displayedColumns]="displayColumns">
    </bd-table>
  `,
  styles: [`
  
  `]
})
export class BdTableTestComponent {

  public sampleDataSource: SampleDataSource = new SampleDataSource();
  public displayColumns: string[] = TEST_DATA_COLUMNS.map((column: IBdTableColumn) => column.name);
}
