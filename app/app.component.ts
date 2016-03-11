import {Component} from 'angular2/core';
import {CardComponent} from './card.component'
import {TooltipComponent} from './tooltip.component'

@Component({
    selector: 'my-app',
    directives:[CardComponent,TooltipComponent],
    template: `
    <h1> MD Lite components for Angular 2</h1>

    <h2>Card</h2>
<mdl-card [card]="card"> Loading...</mdl-card>

<hr/>

<h2>Tool Tip</h2>
<mdl-tooltip [tooltip]="cloudtip"></mdl-tooltip>   |  <mdl-tooltip [tooltip]="printtip"></mdl-tooltip>


    `
})
export class AppComponent {

card:Object={
  "title":"Hello",
  "body":"The greatest thing on earth was peace",
  "card_width":"550px",
  "card_height":"350px",
  "card_background_image":"img/welcome_card.jpg",
  "card_background_color":"#ff6600",
  "cta_button_title":"start",
  "cta_button_link":"http://www.yahoo.com"
}

cloudtip:Object={
"icon":"cloud_upload",
"message":" Upload your files here"
}

printtip:Object={
"icon":"print",
"message":" Click here to Print"
}

}
