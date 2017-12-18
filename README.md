# @bindoc/table

A wrapper around `@angular/material` MatTable to generate tables with dynamic input.

```bash
npm install --save @bindoc/table 
```

## BdTable

The `BdTable` takes a DataSource, the columns to render and a template provider to 
generate a table dynamically with the given cell specifications.

- `dataSource: BdDataSource<any>`: Wrapped DataSource with additional `getColumns()`  
- `displayedColumns: string[]`: names of the columns to render
- `cellTemplateProvider?: BdTemplateProvider`: a template provider for custom cell templates

### BdDataSource 

Extends [@angular/material's DataSource<T>](https://material.angular.io/components/table/overview) and adds a function to retrieve the columns for the given data.

```typescript
import {BD_TABLE_DATE_CELL_TYPE, BD_TABLE_VALUE_CELL_TYPE, BdDataSource, IBdTableColumn} from "@bindoc/table";
import {CollectionViewer} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

export class SampleDataSource extends BdDataSource<any> {
  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return Observable.of([
      {
         "startDate": {
            date: "2017-06-17",
            format: 'shortDate' 
         }
       }
    ]);
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  getColumns(): IBdTableColumn[] {
    return [
      {
          name: "startDate",
          displayName: "Date",
          type: BD_TABLE_DATE_CELL_TYPE
       }
    ];
  }
}
```

### BdTableColumn

The table is generated through columns and their specification. 

- `name`: name of the corresponding field in the row object
- `displayName`: used in header row as title for the column
- `type`: defines the cell template to use in columns cells


### BdTableCell

The table cell can render a custom template given by the `BdTemplateProvider`
passed to the table.

Also there are several integrated templates.

#### BdTableValueCell

The most basic cell template just prints the given data value.

```typescript
import {BdTemplateData} from "@bindoc/templates";

export const BD_TABLE_VALUE_CELL_TYPE: string = 'BdTableValueCell';

export class BdTableValueCellData implements BdTemplateData {
  public type: string = BD_TABLE_VALUE_CELL_TYPE;
  public data: any;
}
```

#### BdTableValueCell

The cell for printing formatted decimal values.

- `date: Date`: the date value
- `format: string`: the format to pass to angulars [DatePipe](https://angular.io/api/common/DatePipe), default is 'short'
```typescript
import {BdTemplateData} from "@bindoc/templates";

export const BD_TABLE_DATE_CELL_TYPE: string = 'BdTableDateCell';

export class BdTableDateCellData implements BdTemplateData {
  public type: string = BD_TABLE_DATE_CELL_TYPE;
  public data: {
    date: Date,
    format: string
  };
}
```

#### BdTableDateCell

The cell for printing formatted date values.

- `date: Date`: the date value
- `format: string`: the format to pass to angulars [DatePipe](https://angular.io/api/common/DatePipe), default is 'short'
```typescript
import {BdTemplateData} from "@bindoc/templates";

export const BD_TABLE_DATE_CELL_TYPE: string = 'BdTableDateCell';

export class BdTableDateCellData implements BdTemplateData {
  public type: string = BD_TABLE_DATE_CELL_TYPE;
  public data: {
    date: Date,
    format: string
  };
}
```


 
