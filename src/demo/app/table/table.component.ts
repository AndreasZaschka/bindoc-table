import {Component} from "@angular/core";
import {SampleDataSource, TEST_DATA_COLUMNS} from "./sample-data-source.model";
import {IBdTableColumn} from "table";
import {SampleCellTemplateProvider} from './sample-template-provider';

@Component({
  selector: '',
  template: `
    <bd-table [dataSource]="sampleDataSource"
              [displayedColumns]="displayColumns"
              [cellTemplateProvider]="sampleProvider">
    </bd-table>
  `,
  styles: [`
  
  `]
})
export class BdTableTestComponent {

  public readonly sampleProvider: SampleCellTemplateProvider = new SampleCellTemplateProvider();
  public readonly sampleDataSource: SampleDataSource = new SampleDataSource();
  public readonly displayColumns: string[] = TEST_DATA_COLUMNS.map((column: IBdTableColumn) => column.name);
}
