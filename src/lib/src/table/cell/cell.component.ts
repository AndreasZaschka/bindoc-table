import {Component, Input, OnInit} from '@angular/core';
import {BdTableCellTemplateProvider} from "./cell-template-provider";
import {BdTemplateData, BdTemplateProvider} from '@bindoc/templates'

@Component({
  selector: 'bd-table-cell',
  template: `
    <ng-container *ngIf="templateProvider">
      <bd-dynamic-template-factory  [templateProvider]="templateProvider"
                                    [data]="templateData">
      </bd-dynamic-template-factory>
    </ng-container>
  `,
  styles: [`
  
  `]
})
export class BdTableCellComponent implements OnInit {

  @Input('cellTemplateProvider') templateProvider: BdTemplateProvider;
  @Input('cellData') data: any;
  @Input('cellType') type: string;

  public templateData: BdTemplateData;

  ngOnInit(): void {
    this.templateProvider = this.templateProvider || new BdTableCellTemplateProvider();
    this.templateData = {
      data: this.data,
      type: this.type
    };
  }
}
