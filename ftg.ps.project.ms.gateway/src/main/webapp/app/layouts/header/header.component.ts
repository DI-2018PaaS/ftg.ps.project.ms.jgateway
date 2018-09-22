import { Component } from '@angular/core';
import { NgbModalRef, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'jhi-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.scss'],
    providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class HeaderComponent {
    images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
}
