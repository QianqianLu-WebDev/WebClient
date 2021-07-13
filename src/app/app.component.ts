import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebClient';
  items = [
    {
        label: 'File',
        items: [{
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {label: 'Project'},
                    {label: 'Other'},
                ]
            },
            {label: 'Open'},
            {label: 'Quit'}
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // 是不是以斜杠起头无所谓，但是一定要以api/起头
    this.http.get('/api/user').subscribe(res => {
      console.log(res);
    })
  }
}
