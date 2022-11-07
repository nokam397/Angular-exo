import { OnInit, Component } from '@angular/core';
import { STUDENTS } from './mock-student-list';
import { Student } from './Student';


@Component({
  selector: 'app-root',
  template: `
    
      <h1>
        bonjour Gael!
      </h1>
    
  `,
  styles: []
})

export class AppComponent implements OnInit{

  StudentList: Student[] = STUDENTS;

  ngOnInit(): void{

    console.table(this.StudentList);
    console.log(this.StudentList[0].name)
  }

  selectStudent = (studentName: string)=> {
    console.log(`vous avez cliqué sur l'etudiant ${studentName}`)
  }
}

