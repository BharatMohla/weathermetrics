import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-displaycomponent',
  templateUrl: './displaycomponent.component.html',
  styleUrls: ['./displaycomponent.component.css']
})
export class DisplaycomponentComponent implements OnInit {
  @ViewChild('myform') myform:any;
  public startDate:string;
  public endDate:string;
  public location:string;
  public metric:string;
  public show:boolean;
  public disabled:boolean;
  public chartType: string = 'bar';

  public chartDatasets: Array<any>;

  public chartLabels: Array<any>;

  public chartColors: Array<any>;

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  constructor(public http:HttpClient) { 
    
  }

  ngOnInit() {
    this.show=false;
    this.disabled=false;
  }

  chartinit(){
    this.show=false;
    this.disabled=false;
    this.chartDatasets=[];
    this.chartLabels=[];
    this.chartColors=[];
  }

  onValueChange(){
    this.disabled=false;
  }
  onSubmit(){
    if(this.myform.status=="INVALID"){
      return;
    }
    
    var baseurl='https://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice/';
    
    var url=`${baseurl}${this.metric}-${this.location}.json`;
    
    var startyear= this.startDate.slice(0,4);
    var startmonth= this.startDate.slice(5);
    var endyear= this.endDate.slice(0,4);
    var endmonth= this.endDate.slice(5);
    if(startyear>endyear){
      this.disabled=true;
      return;
    }
    else if(startyear==endyear && startmonth>endmonth){
      this.disabled=true;
      return;
    }
    this.chartinit();
    this.http.get(url).subscribe(res=>{
      let response=res as Array<any>;
      let elements=[];
      let data=[];
      let chartlabels=[];
      for(let arr of response){
        if(arr.year>=startyear && arr.year<=endyear && arr.month>=startmonth && arr.month<=endmonth){
          elements.push(arr);
          data.push(arr.value);
          chartlabels.push(arr.year+'-'+arr.month);
        }
      }
      
      this.chartLabels=chartlabels;
      this.show=true;
      if(this.metric=="Tmax"){
        this.chartDatasets=[
          { data: data, label: 'Maximum Temperature for ' +this.location }
        ];
        console.log(this.chartDatasets);
      }
      else if(this.metric=="Tmin"){
        this.chartDatasets=[
          { data: data, label: 'Minimum Temperature for ' +this.location }
        ];
      }
      else{
        this.chartDatasets=[
          { data: data, label: 'Rainfall(mm) for ' +this.location }
        ];
      }
      
    });
    
    
  }

}
