//made an object to hold the ranges of values for grades

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
};


for(i = 0; i < scores.length; i++){
    if(scores[i] >= 90){
        grades.A++;
    }else if(scores[i] >= 80 && < 91){
        grades.B++;
    }else if(scores[i] >= 70 && < 81){
        grades.C++;
    }else if(scores[i] >= 60 && < 71){
        grades.D++;
    }else {
        grades.F++;
    }

}


console.log(grades.A);
console.log(grades.B);


// console.log("the highest grade is: ", Math.max.apply(null, scores));
// console.log("the lowest grade is: ", Math.min.apply(null, scores));

// // what is the lowest score?
// // what is the highest score?
// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// console.log(scores.sort());


// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A


// function returnScores() {
    
//     }
    
    
    
// const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]

// const grades = {};
       



// if(scores > 90) {
//     console.log()

// }




    

