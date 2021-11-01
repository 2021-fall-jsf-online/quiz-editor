import { Component, OnInit } from '@angular/core';
import { QuizService, QuizFromWeb, QuizDisplay } from './quiz.service';

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

  ngOnInit() {
    const quizzes = this.quizSvc.loadQuizzes();
    console.log(quizzes);

    quizzes.subscribe(
      (data: QuizFromWeb[]) =>  this.quizzes = data.map(x => ({
        quizName: x.name
        , quizQuestions: x.questions.map(y => ({
          questionName: y.name
        }))
      }))
      
      // (data: QuizDisplay[]) => this.quizzes = data
      
      , err => {
        console.error(err);
        this.errorLoadingQuizzes = true;
      }
    );

    console.log(this.quizzes);
  }

  quizzes: QuizDisplay[] = [];

  selectedQuiz: QuizDisplay | undefined = undefined;

  selectQuiz = (q: QuizDisplay) => {
    this.selectedQuiz = q;
    console.log(this.selectedQuiz);
  };

  addNewQuiz = () => {
    const newQuiz = {
      quizName: "Untitled Quiz"
      , quizQuestions: []
    };

    this.quizzes = [
      ...this.quizzes
      , newQuiz 
    ];

    this.selectedQuiz = newQuiz;
  };

  errorLoadingQuizzes = false;
}
