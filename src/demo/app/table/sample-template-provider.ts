import {BdTemplate, BdTemplateProvider} from "@bindoc/templates";
import {Type} from "@angular/core";
import {
  BD_TABLE_DATE_CELL_TYPE,
  BD_TABLE_DECIMAL_CELL_TYPE, BD_TABLE_VALUE_CELL_TYPE,
  BdTableDateCellComponent,
  BdTableDecimalCellComponent, BdTableValueCellComponent
} from 'table';
import {SAMPLE_CELL_TYPE, SampleCellComponent} from './sampel-cell-template.component';

export class SampleCellTemplateProvider implements BdTemplateProvider{

  getTemplates(type: string): Type<BdTemplate> {
    switch (type) {
      case BD_TABLE_DATE_CELL_TYPE:
        return BdTableDateCellComponent;
      case BD_TABLE_DECIMAL_CELL_TYPE:
        return BdTableDecimalCellComponent;
      case SAMPLE_CELL_TYPE:
        return SampleCellComponent;
      case BD_TABLE_VALUE_CELL_TYPE:
      default:
        return BdTableValueCellComponent;
    }
  }
}
