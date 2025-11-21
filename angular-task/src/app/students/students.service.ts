import { Injectable } from '@angular/core';
import { students } from './student.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
    private apiUrl = 'https://691abfca2d8d7855756ffe7e.mockapi.io/api/students';

  getStudents() {
    return this.http.get<students[]>(this.apiUrl);
  }

  addStudent(student: students) {
    return this.http.post<students>(this.apiUrl, student);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateStudent(id: number, updatedStudent: students) {
    return this.http.put(`${this.apiUrl}/${id}`, updatedStudent);
  }
}
