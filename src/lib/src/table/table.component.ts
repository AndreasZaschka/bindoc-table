import {Component, Input, OnInit} from "@angular/core";
import {BdDataSource} from "./data-source/data-source-model";
import {IBdTableColumn} from "./column/column.interface";
import {BdTemplateProvider} from "@bindoc/templates";
import {BD_TABLE_VALUE_CELL_TYPE} from "./cell/templates/value-cell.component";

@Component({
  selector: 'bd-table',
  template: `
    <mat-table #table
               [dataSource]="dataSource">
      <ng-container   *ngFor="let column of columns"
                      [matColumnDef]="column.name">
        <mat-header-cell *matHeaderCellDef>
          {{column.displayName}}
        </mat-header-cell>
        
        <mat-cell *matCellDef="let element">
          <bd-table-cell  [cellTemplateProvider]="cellTemplateProvider"
                          [cellData]="getCellValue(element, column)">
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

  @Input() cellTemplateProvider: BdTemplateProvider;

  public columns: IBdTableColumn[];

  ngOnInit(): void {
    if(this.dataSource) {
      this.columns = this.dataSource.getColumns();
      this.displayedColumns = this.setDisplayedColumns()
    }
  }

  public getCellValue(rowData: any, selectedColumn: IBdTableColumn): any {
    return {
      data: rowData[selectedColumn.name],
      type: selectedColumn.type || BD_TABLE_VALUE_CELL_TYPE
    };
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
