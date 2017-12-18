import {Component} from "@angular/core";
import {BdTemplate, BdTemplateData} from "@bindoc/templates";

export const BD_TABLE_DATE_CELL_TYPE: string = 'BdTableDateCell';

@Component({
  selector: '',
  template: `
    <span>
      {{ date | date:format }}
    </span>
  `,
  styles: [`
  
  `]
})
export class BdTableDateCellComponent extends BdTemplate {

  public static type: string = BD_TABLE_DATE_CELL_TYPE;

  public date: Date;
  public format: string;

  public init(config: BdTableDateCellData) {
    this.date = config.data.date;
    this.format = config.data.format || 'short';
  }
}

export class BdTableDateCellData implements BdTemplateData {
  public type: string = BD_TABLE_DATE_CELL_TYPE;
  public data: {
    date: Date,
    format: string
  };
}
