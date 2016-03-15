import {Component} from 'angular2/core';
import {CardComponent} from './card.component'
import {TooltipComponent} from './tooltip.component'
import {MenuComponent} from './menu.component'
import {PaperDirective} from './paper.directive'

@Component({
    selector: 'my-app',
    directives:[CardComponent,TooltipComponent,MenuComponent,PaperDirective],
    template: `
    <h1> MD Lite components for Angular 2</h1>


    <h2>Card</h2>
<mdl-card [card]="card"> Loading...</mdl-card>

<hr/>

<h2>Tool Tip</h2>
<mdl-tooltip [tooltip]="cloudtip"></mdl-tooltip>   |  <mdl-tooltip [tooltip]="printtip"></mdl-tooltip>

<hr/>
<h2>Menu</h2>
<div class="container mdl-cell mdl-cell--4-col mdl-shadow--2dp" style="position:relative; height:350px">
<div class="bar" style="position:absolute; right:5px;">
<mdl-menu [menu]="menu"></mdl-menu>
</div>
</div>
<hr/>


<hr/>

    `
})
export class AppComponent {

card:Object={
  "title":"Hello",
  "body":"The greatest thing on earth was peace",
  "width":"mdl-cell mdl-cell--6-col mdl-cell--6-col-phone mdl-cell--6-col-tablet mdl-card",
"shadow":"mdl-shadow--2dp",
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

menu:Object={

  "links":[
    {"name":"Yahoo","url":"http://www.yahoo.com"},
    {"name":"Google","url":"http://www.google.com"},
    {"name":"Medium","url":"http://www.medium.com"}
  ]
}


}
