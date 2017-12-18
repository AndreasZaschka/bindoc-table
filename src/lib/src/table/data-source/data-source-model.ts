import {IBdTableColumn} from "../column/column.interface";
import {Observable} from "rxjs/Observable";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";

export abstract class BdDataSource<T> extends DataSource<T> {

  public abstract connect(collectionViewer: CollectionViewer): Observable<T[]>;

  public abstract disconnect(collectionViewer: CollectionViewer): void;

  public abstract getColumns(): IBdTableColumn[]
}
