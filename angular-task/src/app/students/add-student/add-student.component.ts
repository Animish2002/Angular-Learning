import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  private studentService = inject(StudentService);

  message = '';
  isError = false;

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.studentService.addStudent(form.value).subscribe({
      next: () => {
        this.message = 'Student added successfully!';
        this.isError = false;
      },
      error: () => {
        this.message = 'Failed to add student.';
        this.isError = true;
      },
    });
  }

  onDelete(id: number) {
    this.studentService.deleteStudent(id).subscribe();
  }

  onReset(form: NgForm) {
    form.reset();
  }
}
