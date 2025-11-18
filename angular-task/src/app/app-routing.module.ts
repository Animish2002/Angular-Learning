import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentDetailsComponent } from './students/edit-student-details/edit-student-details.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AddTeacherComponent } from './teachers/add-teacher/add-teacher.component';
import { EditTeacherDetailsComponent } from './teachers/edit-teacher-details/edit-teacher-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  // student list page
  // student/add and student/edit pages
  { path: 'students', component: StudentsComponent },
  { path: 'students/add-student', component: AddStudentComponent },
  { path: 'students/:id/edit-student', component: EditStudentDetailsComponent },
  // teacher list page
  // teacher/add and teacher/edit pages
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/add-teacher', component: AddTeacherComponent },
  { path: 'teachers/:id/edit-teacher', component: EditTeacherDetailsComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
