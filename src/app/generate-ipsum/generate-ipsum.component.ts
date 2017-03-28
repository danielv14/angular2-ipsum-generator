import { Component, OnInit } from '@angular/core';

import { HipsterIpsumService } from '../hipster-ipsum.service';

@Component({
  selector: 'app-generate-ipsum',
  templateUrl: './generate-ipsum.component.html',
  styleUrls: ['./generate-ipsum.component.scss']
})
export class GenerateIpsumComponent implements OnInit {

  constructor(private hipsteripsumService: HipsterIpsumService) { }

  ngOnInit() { }

  // Generated ipsum content
  content = '';
  // types of hipter ipsum to be generated from API
  types = [
    {value: 'hipster-latin', viewValue: 'Hipster Latin'},
    {value: 'hipster-centric', viewValue: 'Hipster Centric'}
  ];
  // Set default selected text type to same as API default
  selectedType: string = this.types[0].value;
  // Set paragraphs count to same as API default
  paragraphs = 4;

  // Click event to generate Hipster Ipsum paragraphs
  generate() {
    this.hipsteripsumService.getIpsum(this.selectedType, this.paragraphs)
      .subscribe(data => this.content = data.text);
  }

}
