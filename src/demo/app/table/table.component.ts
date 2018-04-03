import {Component, TrackByFunction} from '@angular/core';
import {SampleCellData} from './sampel-cell-template.component';
import {SampleDataSource, TEST_DATA_COLUMNS} from "./sample-data-source.model";
import {IBdTableColumn} from "table";
import {SampleCellTemplateProvider} from './sample-template-provider';

const SAMPLE_TRACK_BY: TrackByFunction<any> = (index: number, item: any) => {
  return item.randomFact.factNumber;
};

@Component({
  selector: '',
  template: `
    <bd-table [dataSource]="sampleDataSource"
              [trackByFnc]="sampleTrackBy"
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
  public readonly sampleTrackBy: TrackByFunction<SampleCellData> = SAMPLE_TRACK_BY;
  public readonly displayColumns: string[] = TEST_DATA_COLUMNS.map((column: IBdTableColumn) => column.name);
}

