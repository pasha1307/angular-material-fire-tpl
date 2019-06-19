import {Component, Injectable, OnInit} from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';
import {DashboardService} from "../dashboard.service";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public doughnutChartLabels: Label[] = ['Apps Time', 'Service Time'];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  services;
  apps;
  svs;
  constructor(public htService: DashboardService) { }

  ngOnInit() {
   this.htService.getAll().subscribe( data => {
      this.apps  = data;
      this.apps.map(x => {
        this.apps = x.application.map(el => el.time);
        this.svs = x.service.map(el => el.time);
      });
      this.doughnutChartData = [this.apps, this.svs];
      console.log('APPS', this.apps, this.svs)
      console.log('Donuts', this.doughnutChartData);
     }
   )
  }

}
