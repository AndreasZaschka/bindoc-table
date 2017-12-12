import {Component, Input, OnInit} from "@angular/core";
import {BdDataSource} from "./data-source/data-source-model";
import {IBdTableColumn} from "./column/column.interface";

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
          hue
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

  @Input() dataSource: BdDataSource;
  @Input() displayedColumns: string[] = [];

  public columns: IBdTableColumn[];

  ngOnInit(): void {
    if(this.dataSource) {
      this.columns = this.dataSource.getColumns();
    }
  }
}
