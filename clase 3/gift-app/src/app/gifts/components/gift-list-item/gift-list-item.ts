import { Component, input } from '@angular/core';

@Component({
  selector: 'gift-list-item',
  imports: [],
  templateUrl: './gift-list-item.html',
  styles: ``
})
export class GiftListItem {
  imageUrl = input.required<string>();
}
