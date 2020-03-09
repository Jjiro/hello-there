import { CoursesService } from "./course/courses.service";
import { Component } from "@angular/core";
import { Template } from "@angular/compiler/src/render3/r3_ast";
//import { Http2SecureServer } from "http2";

@Component({
  selector: "courses", //<div class="courses"> ".courses", <div is="courses"> "#courses", <"courses"> "courses" for elements-- basically CSS
  //template: `<h2>{{ title }}</h2>`
  //template: "<h2>{{ getTitle() }}</h2>"
  //template: "<h2>{{ "Title: " + title }}</h2>"
  /* Using Directives */
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses"></li>
      {{
        courses
      }}
    </ul>
  `
})
export class CoursesComponent {
  title = "List of courses";
  /**getTitle(){
    return this.title;
  } **/
  courses;

  //logic for call http sevice

  //Add CoursesService to the constructor or as a dependency and call in in app.module/@NgModule/providers
  //Dependecy Injection
  construtor(service: CoursesService) {
    //let service = new CoursesService(); --- not a good aproach coz its tied only to this constructor
    this.courses = service.getCourses();
  }
}
