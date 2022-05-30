import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alerts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string = '';
  password: string = '';

  constructor(
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
  }

  

  showAlert(){
    this.alertService.lanzarAlerta("Error", "Debes estar logueado para ingresar al Dashboard")
  }
}
