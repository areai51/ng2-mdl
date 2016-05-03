import {Component, Input} from '@angular/core';

@Component({
    selector: 'mdl-tooltip',
    template: `
    <div id="{{tooltip.icon}}" class="icon material-icons">{{tooltip.icon}}</div>
    <label class="mdl-tooltip" htmlFor= "{{tooltip.icon}}">
    {{tooltip.message}}
    </label>


    `,

    styles:[`

  	`]

})
export class TooltipComponent {
	@Input() tooltip

  //card:string='';
}
