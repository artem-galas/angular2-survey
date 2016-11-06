import { Component } from '@angular/core';

@Component({
  selector: 'survey-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  public features = [
    {
      title: 'Get answers fast',
      text: 'Plan your next camping trip, manage event registrations, whip up a quick poll, collect email addresses for a newsletter, create a pop quiz, and much more.',
      image: '/assets/images/laptop-with-img.png'
    },
    {
      title: 'Survey with style',
      text: 'Use your own photo or logo, and Forms will pick just the right colors to complete your own unique form, or choose from a set of curated themes to set the tone.',
      image: '/assets/images/laptop-with-img.png'
    },
    {
      title: 'Q&A, your way',
      text: 'Choose from a bunch of question options, from multiple choice to dropdowns to a linear scale. Add images and YouTube videos, or get fancy with page branching and question skip logic.',
      image: '/assets/images/laptop-with-img.png'
    }
  ]
}
