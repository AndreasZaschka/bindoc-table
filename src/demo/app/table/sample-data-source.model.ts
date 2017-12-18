import {
  BD_TABLE_DATE_CELL_TYPE,
  BD_TABLE_DECIMAL_CELL_TYPE,
  BD_TABLE_VALUE_CELL_TYPE,
  BdDataSource,
  IBdTableColumn
} from "table";
import {CollectionViewer} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

export class SampleDataSource extends BdDataSource<any> {

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return Observable.of(TEST_DATA);
  }

  disconnect(collectionViewer: CollectionViewer): void {

  }

  getColumns(): IBdTableColumn[] {
    return TEST_DATA_COLUMNS;
  }
}

export const TEST_DATA_COLUMNS: IBdTableColumn[] = [
  {
    name: "id",
    displayName: "ID",
    type: BD_TABLE_VALUE_CELL_TYPE
  },
  {
    name: "displayName",
    displayName: "Fall-Nummer",
    type: "String"
  },
  {
    name: "randomNumber",
    displayName: "Random number",
    type: BD_TABLE_DECIMAL_CELL_TYPE
  },
  {
    name: "startDate",
    displayName: "Datum",
    type: BD_TABLE_DATE_CELL_TYPE
  }
];

export const TEST_DATA: any[] = [
  {
    "id": "59919d67719c2e00012e04fa",
    "displayName": "2017-029102",
    "randomNumber": {
      value: 1000,
      format: '1.2-2'
    },
    "startDate": {
      date: "2017-06-17",
      format: 'shortDate'
    }
  },
  {
    "id": "59919d67719c2e00012e04fb",
    "displayName": "2017-029103",
    "randomNumber": {
      value: 1000,
      format: '1.2-2'
    },
    "startDate": {
      date: "2017-06-17"
    }
  },
  {
    "id": "59919d67719c2e00012e04fc",
    "displayName": "2017-029104",
    "randomNumber": {
      value: 1000,
      format: '1.2-2'
    },
    "startDate": {
      date: "2017-06-17"
    }
  },
  {
    "id": "59919d67719c2e00012e04fd",
    "displayName": "2017-029105",
    "randomNumber": {
      value: 1000,
      format: '1.2-2'
    },
    "startDate": {
      date: "2017-06-17"
    }
  },
  {
    "id": "59919d67719c2e00012e04fe",
    "displayName": "2017-029106",
    "randomNumber": {
      value: 1000,
      format: '1.2-2'
    },
    "startDate": {
      date: "2017-06-17"
    }
  },
  {
    "id": "59919d67719c2e00012e04ff",
    "displayName": "2017-029107",
    "randomNumber": {
      value: 1000,
      format: '1.2-2'
    },
    "startDate": {
      date: "2017-06-17"
    }
  },
  {
    "id": "59919d67719c2e00012e0500",
    "displayName": "2017-029108",
    "randomNumber": {
      value: 1000,
      format: '1.2-2'
    },
    "startDate": {
      date: "2017-06-17"
    }
  },
  {
    "id": "59919d67719c2e00012e0501",
    "displayName": "2017-029109",
    "randomNumber": {
      value: 1000,
      format: '1.2-2'
    },
    "startDate": {
      date: "2017-06-17"
    }
  },
  {
    "id": "59919d67719c2e00012e0502",
    "displayName": "2017-029110",
    "randomNumber": {
      value: 1000,
      format: '1.2-2'
    },
    "startDate": {
      date: "2017-06-17"
    }
  },
  {
    "id": "59919d67719c2e00012e0503",
    "displayName": "2017-029111",
    "randomNumber": {
      value: 1000,
      format: '1.2-2'
    },
    "startDate": {
      date: "2017-06-17"
    }
  }
];
