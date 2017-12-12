import {IBdTableColumn} from "../column/column.interface";
import {Observable} from "rxjs/Observable";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";

export abstract class BdDataSource extends DataSource<any> {

  public entity: string;

  public abstract connect(collectionViewer: CollectionViewer): Observable<any[]>;

  public abstract disconnect(collectionViewer: CollectionViewer): void;

  public abstract getColumns(): IBdTableColumn[]
}
