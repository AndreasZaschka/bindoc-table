import {HttpClient} from '@angular/common/http';
import {Component} from "@angular/core";
import {BdTemplateData} from "@bindoc/templates";
import {map} from 'rxjs/operators';

export const SAMPLE_CELL_TYPE: string = 'SampleCell';

@Component({
  selector: '',
  template: `
    <span>
      {{ fact }}
    </span>
  `,
  styles: [`

  `]
})
export class SampleCellComponent {
  public static type: string = SAMPLE_CELL_TYPE;

  public fact: string;

  constructor(private _httpClient: HttpClient) {
    this._getRandomFact();
  }

  public init(config: BdTableDecimalCellData) {
    if(config.data.factNumber) {

    }
  }

  private _getRandomFact() {
    const url: string = 'http://numbersapi.com/random/year';

    this._httpClient.get(url, {responseType: 'text'}).subscribe((fact: string) => {
      console.log(fact)
      this.fact = fact
    });
  }
}

export class BdTableDecimalCellData implements BdTemplateData {
  public type: string = SAMPLE_CELL_TYPE;
  public data: {
    factNumber: number
  };
}
