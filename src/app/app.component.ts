import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  percentage = 0;
  questionList = [
    {
      id:1,
      ques: 'Which of the following is correct about Typescript ?',
      options: [
        {optionValue : 'A', optionName: 'Angular is based on Typescript'},
        {optionValue : 'B', optionName: 'This is  a superset of Javascript'},
        {optionValue : 'C', optionName: 'Typescript is maintained by Microsoft'},
        {optionValue : 'D', optionName: 'All of the above'},
      ],
      selectedOption: ''
    },
    {
      id:2,
      ques: 'What does AOT stand For ?',
      options: [
        {optionValue: 'A', optionName: 'Ahead-Of-Time Compilation'},
        {optionValue: 'B', optionName: 'Angular Object templates'},
        {optionValue: 'C', optionName: 'Both'},
        {optionValue: 'D', optionName: 'None of the above'},
      ],
      selectedOption: ''
    },
    {
      id:3,
      ques: 'Which of the following is not a hook application life cycle ?',
      options: [
        {optionValue: 'A', optionName: 'ngOnChanges'},
        {optionValue: 'B', optionName: 'ngViewStart'},
        {optionValue: 'C', optionName: 'ngOnInit'},
        {optionValue: 'D', optionName: 'None of the above'}
      ],
      selectedOption: ''
    },
    {
      id:4,
      ques: 'Router is a part of which of the following module ?',
      options: [
        {optionValue: 'A', optionName: '@angular/core'},
        {optionValue: 'B', optionName: '@angular/router'},
        {optionValue: 'C', optionName: 'Both'},
        {optionValue: 'D', optionName: 'None of the above'}
      ],
      selectedOption: ''
    },
    {
      id:5,
      ques: 'What is the decorator used for configuring your module class ?',
      options: [
        {optionValue: 'A', optionName: '@NgModule'},
        {optionValue: 'B', optionName: '@NgApp'},
        {optionValue: 'C', optionName: 'Both'},
        {optionValue: 'D', optionName: 'None of the above'}
      ],
      selectedOption: ''
    }
  ];
  correctAnswerList = [{id: 1, ans:'D'}, {id: 2, ans: 'A'}, {id:3, ans: 'B'}, {id:4, ans:'B'}, {id:5, ans:'A'}];
constructor(){

}
submitQuiz(){
let count = 0;
for(var i=0;i<this.questionList.length;i++){
 const filteredAnswerList = this.correctAnswerList.filter(x => x.id == this.questionList[i].id);
if(filteredAnswerList.length > 0){
if(filteredAnswerList[0].ans == this.questionList[i].selectedOption){
count++;
}
}
}
this.percentage =  (count/this.questionList.length)*100;
}
}
