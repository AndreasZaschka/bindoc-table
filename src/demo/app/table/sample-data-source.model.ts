import {BdDataSource, IBdTableColumn} from "table";
import {CollectionViewer} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

export class SampleDataSource extends BdDataSource {

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
    type: "String"
  },
  {
    name: "displayName",
    displayName: "Fall-Nummer",
    type: "String"
  },
  {
    name: "caseStatus",
    displayName: "Status",
    type: "String"
  },
  {
    name: "startDate",
    displayName: "Datum",
    type: "Date"
  }
];

export const TEST_DATA: any[] = [
  {
    "id": "59919d67719c2e00012e04fa",
    "link": ["/cases", "59919d67719c2e00012e04fa"],
    "displayName": "2017-029102",
    "caseStatus": "DONE",
    "startDate": "2017-06-17"
  },
  {
    "id": "59919d67719c2e00012e04fb",
    "link": ["/cases", "59919d67719c2e00012e04fb"],
    "displayName": "2017-029103",
    "caseStatus": "DONE",
    "startDate": "2017-06-17"
  },
  {
    "id": "59919d67719c2e00012e04fc",
    "link": ["/cases", "59919d67719c2e00012e04fc"],
    "displayName": "2017-029104",
    "caseStatus": "DONE",
    "startDate": "2017-06-17"
  },
  {
    "id": "59919d67719c2e00012e04fd",
    "link": ["/cases", "59919d67719c2e00012e04fd"],
    "displayName": "2017-029105",
    "caseStatus": "DONE",
    "startDate": "2017-06-17"
  },
  {
    "id": "59919d67719c2e00012e04fe",
    "link": ["/cases", "59919d67719c2e00012e04fe"],
    "displayName": "2017-029106",
    "caseStatus": "DONE",
    "startDate": "2017-06-17"
  },
  {
    "id": "59919d67719c2e00012e04ff",
    "link": ["/cases", "59919d67719c2e00012e04ff"],
    "displayName": "2017-029107",
    "caseStatus": "DONE",
    "startDate": "2017-06-17"
  },
  {
    "id": "59919d67719c2e00012e0500",
    "link": ["/cases", "59919d67719c2e00012e0500"],
    "displayName": "2017-029108",
    "caseStatus": "DONE",
    "startDate": "2017-06-17"
  },
  {
    "id": "59919d67719c2e00012e0501",
    "link": ["/cases", "59919d67719c2e00012e0501"],
    "displayName": "2017-029109",
    "caseStatus": "DONE",
    "startDate": "2017-06-17"
  },
  {
    "id": "59919d67719c2e00012e0502",
    "link": ["/cases", "59919d67719c2e00012e0502"],
    "displayName": "2017-029110",
    "caseStatus": "DONE",
    "startDate": "2017-06-17"
  },
  {
    "id": "59919d67719c2e00012e0503",
    "link": ["/cases", "59919d67719c2e00012e0503"],
    "displayName": "2017-029111",
    "caseStatus": "DONE",
    "startDate": "2017-06-17"
  }
];
