import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MediumBlogService {

  BLOG_URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40faisalahmedador`;
  constructor(private http: HttpClient) {
  }

  fetchAllBlogPosts() {
    return this.http.get(this.BLOG_URL)
  }
}
