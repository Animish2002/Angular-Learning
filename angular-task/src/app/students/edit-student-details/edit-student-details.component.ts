import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student-details',
  templateUrl: './edit-student-details.component.html',
  styleUrls: ['./edit-student-details.component.css'],
})
export class EditStudentDetailsComponent implements OnInit {
  private studentService = inject(StudentService);
  private router = inject(Router);

  studentData: any;

  ngOnInit() {
    this.studentData = history.state.student;

    if (!this.studentData) {
      this.router.navigate(['/students']);
    }
  }

  onEditSubmit(form: NgForm) {
    const updated = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      age: form.value.age,
      subjects: [form.value.subject],
    };

    this.studentService
      .updateStudent(this.studentData.id, updated)
      .subscribe(() => {
        console.log('Updated successfully');
        this.router.navigate(['/students']);
      });
  }
}
