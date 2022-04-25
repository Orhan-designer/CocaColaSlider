import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  activeSlideIndex = 0;

  slides = [ //массив объектов, для наших слайдов
    {
      textColor: '#000',
      title: "CUSTOM MOTHER'S DAY GIFTS",
      description: 'Show the mom, grandma, godmother, or mom-like figure in your life some love with a customized bottle.',
      secondTitle: "ORDER BY 4/26 FOR DELIVERY BY MOTHER'S DAY",
      /* передаём backgroundExpended в html разметку в [style.backgroundImage]  */
      backgroundExpended: `url('https://us.coca-cola.com/store/media/wysiwyg/COKE-732_mothers-day-bottles-shipping_slider_Desktop-Expanded.png')`,
      backgroundCollapsed: `url('https://us.coca-cola.com/store/media/wysiwyg/COKE-732_mothers-day-bottles-shipping_slider_Desktop-Collapsed.png')`,
      ctaText: 'SHOP NOW',
      ctaLink: 'https://google.com'
    },
    {
      textColor: '#fff',
      title: "MOTHER'S DAY BUNDLES",
      description: "Whether your mom's a wiz in the kitchen, an avid collector or a weekend adventurer, we've gotjust the bundle.",
      secondTitle: "ORDER BY 5/1 FOR DELIVERY BY MOTHER'S DAY",
      backgroundExpended: `url('https://us.coca-cola.com/store/media/wysiwyg/COKE-733_mothers-day-merch-gifts-shipping_slider_Desktop-Expanded.png')`,
      backgroundCollapsed: `url('https://us.coca-cola.com/store/media/wysiwyg/COKE-733_mothers-day-merch-gifts-shipping_slider_Desktop-Collapsed.png')`,
      ctaText: 'SHOP NOW',
      ctaLink: ''
    },
    {
      textColor: '#fff',
      title: 'PERFECT FOR THE NEW GRAD',
      description: 'Say congratulations and well done with customized gifts and best sellers that make dorm life the best life.',
      backgroundExpended: `url('https://us.coca-cola.com/store/media/wysiwyg/COKE-734_graduation_slider_Desktop-Expanded.png')`,
      backgroundCollapsed: `url('https://us.coca-cola.com/store/media/wysiwyg/COKE-734_graduation_slider_Desktop-Collapsed.png')`,
      ctaText: 'SHOP NOW',
      ctaLink: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
