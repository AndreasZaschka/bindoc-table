import {Component} from "@angular/core";
import {BdTemplateData} from "@bindoc/templates";

export const BD_TABLE_DECIMAL_CELL_TYPE: string = 'BdTableDecimalCell';

@Component({
  selector: '',
  template: `
    <span>
      {{ value | number:format }}
    </span>
  `,
  styles: [`

  `]
})
export class BdTableDecimalCellComponent {
  public static type: string = BD_TABLE_DECIMAL_CELL_TYPE;

  public value: number;
  public format: string;

  public init(config: BdTableDecimalCellData) {
    this.value = config.data.value;
    this.format = config.data.format || '1.0-2';
  }
}

export class BdTableDecimalCellData implements BdTemplateData {
  public type: string = BD_TABLE_DECIMAL_CELL_TYPE;
  public data: {
    value: number,
    format: string
  };
}
