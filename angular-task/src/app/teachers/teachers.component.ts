import { Component, inject, OnInit } from '@angular/core';
import { teachers } from './teacher.model';
import { TeacherService } from './teacher.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})

export class TeachersComponent implements OnInit {
  teachers: teachers[] = [];
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'age',
    'subject',
    'actions',
  ];
  dataSource = new MatTableDataSource<teachers>();

  private teacherService = inject(TeacherService);

  constructor(private router: Router) {}

  applyFilter(event: any) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe((data) => {
      this.teachers = data;
      this.dataSource.data = data;
    });
  }

  onAdd() {
    this.router.navigate(['/teachers', 'add-teacher']);
  }

  onEdit(teacher: teachers) {
    this.router.navigate(['/teachers', teacher.id, 'edit-teacher'], {
      state: { teacher },
    });
  }

  onDelete(id: number) {
    this.teacherService.deleteTeacher(id).subscribe(() => {
      this.teachers = this.teachers?.filter((t) => t.id !== id);
      this.dataSource.data = this.teachers;
    });
  }
}
