import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, TrackByFunction} from '@angular/core';
import {BdDataSource} from "./data-source/data-source-model";
import {IBdTableColumn} from "./column/column.interface";
import {BdTemplateProvider} from "@bindoc/templates";
import {BD_TABLE_VALUE_CELL_TYPE} from "./cell/templates/value-cell.component";

export const BD_TABLE_DEFAULT_TRACK_BY_FNC: TrackByFunction<any> = (index: number, item: any) => {
  return item;
};

@Component({
  selector: 'bd-table',
  template: `
    <mat-table #table
               [trackBy]="trackByFnc"
               [dataSource]="dataSource">
      <ng-container   *ngFor="let column of columns"
                      [matColumnDef]="column.name">
        <mat-header-cell *matHeaderCellDef>
          {{column.displayName}}
        </mat-header-cell>
        
        <mat-cell *matCellDef="let element">
          <bd-table-cell  [cellTemplateProvider]="cellTemplateProvider"
                          [cellData]="element[column.name]"
                          [cellType]="column.type || BD_TABLE_VALUE_CELL_TYPE">
          </bd-table-cell>
        </mat-cell>
        
      </ng-container>

      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
    </mat-table>
  `,
  styles: [`
  
  `]
})
export class BdTableComponent implements OnInit {

  @Input() dataSource: BdDataSource<any>;
  @Input() displayedColumns: string[];
  @Input() trackByFnc: TrackByFunction<any> = BD_TABLE_DEFAULT_TRACK_BY_FNC;

  @Input() cellTemplateProvider: BdTemplateProvider;

  public columns: IBdTableColumn[];

  constructor() {
  }

  ngOnInit(): void {
    if(this.dataSource) {
      this.columns = this.dataSource.getColumns();
      this.displayedColumns = this.setDisplayedColumns();
    }
  }

  /**
   * When no restrictions are passed through input just render all columns.
   *
   * @returns {string[]} an array with the column names to render
   */
  private setDisplayedColumns(): string[] {
    return this.displayedColumns || this.dataSource.getColumns().map(column => column.name);
  }
}
