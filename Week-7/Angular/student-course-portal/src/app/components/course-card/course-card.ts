import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight';
import { CourseLevelPipe } from '../../pipes/course-level-pipe';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
  CommonModule,
  HighlightDirective,
  CourseLevelPipe
],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent {

  @Input()
  course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
  };

  @Output()
  enrollRequested = new EventEmitter<number>();

  enroll(): void {
    this.enrollRequested.emit(this.course.id);
  }

  getCardClass(): string {
    return this.course.credits >= 4
      ? 'premium-course'
      : 'regular-course';
  }

  getCardStyle() {
    return {
      border: this.course.credits >= 4
        ? '2px solid green'
        : '2px solid gray',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px'
    };
  }
}