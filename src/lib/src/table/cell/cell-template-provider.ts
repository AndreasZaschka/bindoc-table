import {BdTemplate, BdTemplateProvider} from "@bindoc/templates";
import {Type} from "@angular/core";
import {BD_TABLE_VALUE_CELL_TYPE, BdTableValueCellComponent} from "./templates/value-cell.component";
import {BD_TABLE_DATE_CELL_TYPE, BdTableDateCellComponent} from "./templates/date-cell.component";

export class BdTableCellTemplateProvider implements BdTemplateProvider{

  getTemplates(type: string): Type<BdTemplate> {
    switch (type) {
      case BD_TABLE_DATE_CELL_TYPE:
        return BdTableDateCellComponent
      case BD_TABLE_VALUE_CELL_TYPE:
      default:
        return BdTableValueCellComponent;
    }
  }
}
