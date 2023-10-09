import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})

export class BigCardComponent implements OnInit {
  
  @Input()
  photoCover:string = "" 
  // o photoCover é string porque passamos o link da img aqui e chamamos a propriedade no src da html
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  //o input fará com que todas as propriedades acima possam ser inputáveis em qualquer tag big-card que chamarmos

  constructor() { }

  ngOnInit(): void {
  }

}
