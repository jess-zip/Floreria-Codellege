import { Flores } from './../../models/flores';
import { Component, OnInit } from '@angular/core';
import { FloresService } from 'src/app/services/flores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listOfFlowers: Flores[] = [];

  constructor( private serviceFlower: FloresService) {
    
  }

  ngOnInit(): void {
    this.gettingFlowers();
  }

  gettingFlowers(){
    this.serviceFlower.getFlores().subscribe(data => {
      console.log(data);
      this.listOfFlowers = data;
    }, error => {
      console.log(error);
    });
  }

  deleteFl(id: any){
    this.serviceFlower.deleteFlower(id).subscribe(data => {
      Swal.fire(
        'Great!',
        'You have deleted a flower!',
        'error'
      );
      this.gettingFlowers();
    }, error => {
      console.log(error);
    });
  }

  /*findFlowers(){
    this.serviceFlower.searchFlowers(id).subscribe(data => {
      console.log(data);
      this.listOfFlowers = data;
    }, error => {
      console.log(error);
    });
  }*/
}
