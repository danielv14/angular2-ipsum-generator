import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

@Injectable()
export class HipsterIpsumService {

  /**
   * Creates an instance of HipsterIpsumService.
   * @param {Http} http 
   * 
   * @memberOf HipsterIpsumService
   */
  constructor(private http: Http) { }

  /**
   * Make HTTP request to API
   * 
   * @param {string} type 
   * @param {number} paragraphs 
   * @returns http get request
   * 
   * @memberOf HipsterIpsumService
   */
  getIpsum(type: string, paragraphs: number) {
    return this.http.get(`http://hipsterjesus.com/api/?paras=${paragraphs}&type=${type}&html=true`)
    .map((res:Response) => res.json());
  }


}
