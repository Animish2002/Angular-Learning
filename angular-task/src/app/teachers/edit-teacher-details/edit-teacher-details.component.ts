  import { Component, inject, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { Router } from '@angular/router';
  import { TeacherService } from '../teacher.service';

  @Component({
    selector: 'app-edit-teacher-details',
    templateUrl: './edit-teacher-details.component.html',
    styleUrls: ['./edit-teacher-details.component.css'],
  })
  export class EditTeacherDetailsComponent implements OnInit {
    constructor(private teacherService: TeacherService) {}
    private router = inject(Router);
    teacherData: any;

    ngOnInit() {
      this.teacherData = history.state.teacher;

      if (!this.teacherData) {
        this.router.navigate(['/teachers']);
      }
    }
    onEditSubmit(form: NgForm) {
      const updated = {
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        age: form.value.age,
        subject: form.value.subject,
      };

      this.teacherService
        .updateTeacher(this.teacherData.id, updated)
        .subscribe(() => {
          console.log('Updated successfully');
          this.router.navigate(['/teachers']);
        });
    }
  }
