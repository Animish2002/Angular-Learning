import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { teachers } from './teacher.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiUrl = 'https://691abfca2d8d7855756ffe7e.mockapi.io/api/teachers';

  constructor(private http: HttpClient) {}

  // GET all teachers
  getTeachers() {
    return this.http.get<teachers[]>(this.apiUrl);
  }

  addTeacher(teacher: teachers) {
    return this.http.post<teachers>(this.apiUrl, teacher);
  }

  deleteTeacher(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateTeacher(id: number, teacher: Partial<teachers>) {
    return this.http.put(`${this.apiUrl}/${id}`, teacher);
  }
}
