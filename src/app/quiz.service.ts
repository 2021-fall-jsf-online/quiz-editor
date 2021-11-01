import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators'

export type QuizFromWeb = {
  name: string;
  questions: {
    name: string;
  }[];
}

export interface QuizDisplay {
  quizName: string;
  quizQuestions: QuestionDisplay[];
}

export interface QuestionDisplay {
  questionName: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private angularHttpService: HttpClient
  ) { }

  loadQuizzes = (): Observable<QuizFromWeb[]> => {

    // const quizzesFromWeb: any[] = [
    //   {
    //     name: 'Quiz 1'
    //     , questions: [
    //       {
    //         name: 'Question 1'
    //       }
    //       , {
    //         name: 'Question 2'
    //       }
    //     ]
    //   }
    //   , {
    //     name: 'Quiz 2'
    //     , questions: []
    //   }
    // ];

    const quizzesFromWeb = this.angularHttpService.get<QuizFromWeb[]>(
      "https://modern-js.azurewebsites.net/api/HttpTriggerJS1?code=8XD3vN3ehHLdZacBQJQhgUnNst9202gdd5VM3kWCytDkz2nXhia6kA==&name=Mystery%20Quiz"
    );

    // console.log("here");
    // const foo = quizzesFromWeb.pipe(
    //   tap(x => console.log("tap"))
    //   , tap(x=> console.log(x))
    //   , map(x => ({
    //     quizName: x.name
    //     , quizQuestions: x.questions.map(y => ({
    //       questionName: y.name
    //     }))
    //   }))
    //   , tap(x=> console.log(x))
    // );

    // console.log("foo", foo);
    // return from([]);

    return quizzesFromWeb;
  };
}
