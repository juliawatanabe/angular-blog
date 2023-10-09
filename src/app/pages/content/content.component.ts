import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataMoomin } from 'src/app/data/dataMoomin';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTopic:string = ""
  contentTitle:string = ""
  contentDescription = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("Id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataMoomin.filter(article => article.id == id)[0]

    this.photoCover = result.photo
    this.contentTopic = result.topic
    this.contentTitle = result.title
    this.contentDescription = result.description
    
  }

}
