import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { HipsterIpsumService } from '../hipster-ipsum.service';

@Component({
  selector: 'app-generate-ipsum',
  templateUrl: './generate-ipsum.component.html',
  styleUrls: ['./generate-ipsum.component.scss'],
  animations: [
    // Trigger to make md-card with generated lorem fly in
    trigger('flyIn', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('500ms ease-in-out')
      ])
    ]),
    // Trigger for the genrated lorem paragraphs
    trigger('generatedIpsum', [
      state('spawn' , style({ opacity: 1 })), 
      state('de-spawn', style({ opacity: 0 })),
      transition('* => *', animate('500ms'))
    ])
  ]
})

export class GenerateIpsumComponent implements OnInit {

  constructor(private hipsteripsumService: HipsterIpsumService) { }

  ngOnInit() { }

  // Generated ipsum content
  content: string;
  // types of hipter ipsum to be generated from API
  types = [
    {value: 'hipster-latin', viewValue: 'Hipster Latin'},
    {value: 'hipster-centric', viewValue: 'Hipster Centric'}
  ];
  // Set default selected text type to same as API default
  selectedType: string = this.types[0].value;
  // Set paragraphs count to same as API default
  paragraphs: number = 4;
  // Handle generated animation state for lorem text
  lorem_state: string = 'de-spawn';

  // Click event to generate Hipster Ipsum paragraphs
  generate() {
    this.lorem_state = 'de-spawn'
    this.hipsteripsumService.getIpsum(this.selectedType, this.paragraphs)
      .subscribe(data => {
        this.content = data.text;
        this.lorem_state = 'spawn';
      })
      
  }

}
