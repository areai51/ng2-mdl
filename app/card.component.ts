import {Component, Input} from '@angular/core';

@Component({
    selector: 'mdl-card',
    template: `
    <div class="{{card?.width}} {{card?.shadow}}">
  <div [style.backgroundColor]="card.card_background_color"  class="mdl-card__title">
    <h2 class="mdl-card__title-text">{{card?.title}}</h2>
  </div>
  <div class="mdl-card__supporting-text">
    {{card?.body}}


  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="{{card.cta_button_link}}">
      {{card.cta_button_title}}
    </a>
  </div>
  <div class="mdl-card__menu">
    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">share</i>
    </button>
  </div>
</div>

    `,

    styles:[`
      .demo-card-wide.mdl-card {

    }
    .demo-card-wide > .mdl-card__title {
      color: #ccc;
      height: 176px;
      background: url('{{card.card_background}}') center / cover;
    }
    .demo-card-wide > .mdl-card__menu {
      color: #fff;
    }
  	`]

})
export class CardComponent {
	@Input() card


  //card:string='';
}
