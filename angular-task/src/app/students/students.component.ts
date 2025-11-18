import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from './students.service';
import { students } from './student.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  private studentService = inject(StudentService);

  student: students[] = [];
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'age',
    'subject',
    'actions',
  ];
  dataSource = new MatTableDataSource<students>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.student = data;
      this.dataSource.data = data;
    });
  }

  onEdit(student: students) {
    this.router.navigate(['/students', student.id, 'edit-student'], {
      state: { student },
    });
  }

  applyFilter(event: any) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  filterByAge(age: string) {
    if (age === 'all') {
      this.dataSource.data = this.student;
    } else {
      this.dataSource.data = this.student.filter((s) => s.age == +age);
    }
  }

  onDelete(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.student = this.student.filter((s) => s.id !== id);
      this.dataSource.data = this.student;
    });
  }

  onAdd() {
    this.router.navigate(['/students', 'add-student']);
  }
}
