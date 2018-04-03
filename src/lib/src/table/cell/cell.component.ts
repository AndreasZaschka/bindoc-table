import {Component, Input, OnInit} from "@angular/core";
import {BdTableCellTemplateProvider} from "./cell-template-provider";
import {BdTemplateProvider} from "@bindoc/templates"
import {IBdTableColumn} from "../column/column.interface";

@Component({
  selector: 'bd-table-cell',
  template: `
    <ng-container *ngIf="templateProvider">
      <bd-dynamic-template-factory  [templateProvider]="templateProvider"
                                    [data]="data">
      </bd-dynamic-template-factory>
    </ng-container>
  `,
  styles: [`
  
  `]
})
export class BdTableCellComponent implements OnInit {

  @Input('cellTemplateProvider') templateProvider: BdTemplateProvider;
  @Input('cellData') data: any;

  ngOnInit(): void {
    this.templateProvider = this.templateProvider || new BdTableCellTemplateProvider();
  }
}
