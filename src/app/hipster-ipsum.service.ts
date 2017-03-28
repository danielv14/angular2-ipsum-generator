import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

@Injectable()
export class HipsterIpsumService {

  constructor(private http: Http) { }

  /*
    Make http get request to API endpoint
    @param {string} type - The text type to be generated
    @param {int} paragraphs - The nr of paragraphs to be generated

    @return response of json format
  */
  getIpsum(type, paragraphs) {
    return this.http.get(`http://hipsterjesus.com/api/?paras=${paragraphs}&type=${type}&html=true`)
    .map((res:Response) => res.json());
  }


}
