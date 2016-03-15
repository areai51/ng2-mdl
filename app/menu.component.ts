import {Component, Input} from 'angular2/core';

@Component({
    selector: 'mdl-menu',
    template: `
    <button id="demo-menu-lower-right"
            class="mdl-button mdl-js-button mdl-button--icon">
      <i class="material-icons">more_vert</i>
    </button>

    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        for="demo-menu-lower-right">

        <li *ngFor="#item of menu.links" class="mdl-menu__item">
        <a href="{{item.url}}" >{{item.name}}</a></li>


    </ul>

    `,

    styles:[`

  	`]

})
export class MenuComponent {
	@Input() menu

}
