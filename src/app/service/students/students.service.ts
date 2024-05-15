import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  addStudent(student: any) {
    return this.http.post('http://localhost:8000/endpoint/add-student', student);
  }

  listStudent() {
    return this.http.get('http://localhost:8000/endpoint/');
  }
  
  deleteStudent(id: any) {
    return this.http.delete('http://localhost:8000/endpoint/del-student/'+id);
  }

  singleStudent(id: any) {
    return this.http.get('http://localhost:8000/endpoint/student/'+id);
  }

  updateStudent(id:any, student: any) {
    return this.http.put('http://localhost:8000/endpoint/update-student/'+id, student);
  }
}
