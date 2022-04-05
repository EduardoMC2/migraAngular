import { Component, OnInit } from '@angular/core';
import { DataPortfolioService } from 'src/app/servicios/data-portfolio.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  constructor(private data: DataPortfolioService) { }

  ngOnInit(): void {
    this.data.obtenerDatos();
  }

}
