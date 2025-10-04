import { Component, inject, signal } from '@angular/core';
import { GiftList } from '../../components/gift-list/gift-list';
import { Gifs } from '../../services/gifs';

@Component({
  selector: 'app-trending-page',
  imports: [
    GiftList
  ],
  templateUrl: './trending-page.html',
  styles: ``
})
export default class TrendingPage {
  gifService = inject(Gifs);
}
