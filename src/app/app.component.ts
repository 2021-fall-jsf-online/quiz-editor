import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

interface QuizDisplay {
  quizName: string;
  quizQuestions: QuestionDisplay[];
  markedForDelete:boolean;
}
interface QuestionDisplay{
  questionName: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quiz-editor';
  constructor(
    public quizSvc: QuizService 
  ) {
  }

  ngOnInit(){
    const quizzes = this.quizSvc.loadQuizzes();
    console.log(quizzes);

    this.quizzes = quizzes.map(x => ( {
      quizName: x.name
      , quizQuestions: x.questions.map((y:any) => ({
        questionName: y.name
      }))
      ,markedForDelete:false
    }));
    console.log(this.quizzes);
    
  }
   

  quizzes: QuizDisplay[]=[];

  selectedQuiz: QuizDisplay | undefined = undefined;

  selectQuiz = (q: QuizDisplay) => {
    this.selectedQuiz = q;
    console.log(this.selectedQuiz);   
  };

   addNewQuiz = () => {
    //  como fazer esse prompt ser o conteudo da propriedade quizName
    // let x=prompt("enter");
    const newQuiz = {
      quizName:"Week#10-n-tell"
      , quizQuestions: []
      , markedForDelete:false 
    };

    this.quizzes = [
      ...this.quizzes
      , newQuiz 
    ];

    this.selectedQuiz = newQuiz;
    // this.selectedQuiz = (this.quizzes[this.quizzes.length]);

  };
    addNewQuestions = () => {
    if (this.selectedQuiz) {
      this.selectedQuiz.quizQuestions=[
        ...this.selectedQuiz.quizQuestions
        ,{
          questionName: "Untitle Question"
        }
      ];
    }
    };
    removeQuestions (questionToremove: QuestionDisplay) {
      if(this.selectedQuiz){
      this.selectedQuiz.quizQuestions= this.selectedQuiz.quizQuestions.filter(x=>x!==questionToremove);
      }

    };
}
