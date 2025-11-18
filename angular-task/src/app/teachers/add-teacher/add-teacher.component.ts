import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css'],
})
export class AddTeacherComponent {
  private teacherService = inject(TeacherService);
  onAdd(form: NgForm) {
    if (form.invalid) return;

    this.teacherService.addTeacher(form.value).subscribe((res) => {
      console.log('Teacher added:', res);
    });
  }
}
