import { OnInit, Component } from '@angular/core';
import { STUDENTS } from './mock-student-list';
import { Student } from './Student';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
     styles: []

  
})

export class AppComponent implements OnInit{

  studentList: Student[] = STUDENTS;
  studentSelected: Student|undefined;

  ngOnInit(): void{

    console.table(this.studentList);
    
  }

  selectOneStudent(studentId: string){
    const student: Student|undefined = this.studentList.find(
      student => student.id == +studentId
    );

    if( student ){
      console.log(`vous avez clique sur l etudiant ${student.name}`);
      this.studentSelected = student;

    } else{
      console.log("l'etudiant n'existe pas");
      this.studentSelected = student;
    }
  }


}







