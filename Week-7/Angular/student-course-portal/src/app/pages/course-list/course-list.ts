import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { DatePipe, CurrencyPipe, UpperCasePipe, TitleCasePipe } from '@angular/common';



@Component({
  selector: 'app-course-list',
  standalone: true,
 imports: [
  CommonModule,
  CourseCardComponent,
  DatePipe,
  CurrencyPipe,
  UpperCasePipe,
  TitleCasePipe,
 
],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {

  selectedCourseId = 0;
  today = new Date();

courseFee = 4999;
  showCourses = true;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3
    },
    {
      id: 3,
      name: 'Spring Boot',
      code: 'SPR301',
      credits: 4
    },
    {
      id: 4,
      name: 'SQL',
      code: 'SQL101',
      credits: 2
    },
    {
      id: 5,
      name: 'Microservices',
      code: 'MS401',
      credits: 5
    }
  ];

  onEnroll(courseId: number): void {
    console.log('Enrolled Course:', courseId);
    this.selectedCourseId = courseId;
  }

}