import {Component} from "@angular/core";
import {BdTemplate, BdTemplateData} from "@bindoc/templates";

export const BD_TABLE_VALUE_CELL_TYPE: string = 'BdTableValueCell';

@Component({
  selector: '',
  template: `
    <span>{{value}}</span>
  `,
  styles: [`
  
  `]
})
export class BdTableValueCellComponent extends BdTemplate {

  public static type: string = BD_TABLE_VALUE_CELL_TYPE;

  public value: any;

  public init(config: BdTableValueCellData) {
    this.value = config.data;
  }
}

export class BdTableValueCellData implements BdTemplateData {
  public type: string = BD_TABLE_VALUE_CELL_TYPE;
  public data: any;
}

