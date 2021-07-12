import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mana-manat-tu-page',
  templateUrl: './mana-manat-tu-page.component.html',
  styleUrls: ['./mana-manat-tu-page.component.scss']
})
export class ManaManatTuPageComponent implements OnInit {
  public userArray: parList[] = [];
  constructor(private http: HttpClient) {
    this.http.get('assets/parti_list/final_list.csv', {responseType: 'text'})
        .subscribe(data => {
              const csvToRowArray = data.split('\n');
              for (let index = 1; index < csvToRowArray.length - 1; index++) {
                const row = csvToRowArray[index].split(',');
                this.userArray.push(new parList( parseInt( row[0], 10), row[1], row[2].trim()));
              }
              console.log(this.userArray);
            },
            error => {
              console.log(error);
            }
        );
  }

  ngOnInit(): void {
  }

    // tslint:disable-next-line:typedef
  replacereString(targetString){
    const lenn = targetString.length;
    for (let i = 0; i < lenn; i++){
        targetString = targetString.replace(' ', '_');
        targetString = targetString.toLowerCase();
    }
    return targetString;
  }

  sayHI(theName) {
    alert('Say Hi ' + theName);
    theName = this.replacereString(theName);
    alert(' after >> ' + theName);
    window.open('localhost:4200/assets/certi/' + theName + '.pdf', '_blank');
  }

}

// tslint:disable-next-line:class-name
export class parList {
  id: number;
  name: string;
  city: string;

  constructor(id: number, name: string, city: string) {
    this.id = id;
    this.name = name;
    this.city = city;
  }

}
