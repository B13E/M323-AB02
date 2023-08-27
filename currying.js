// 3a
function getFeedback(grade) {
    if (grade >= 90) {
        return 'a';
    } else if (grade >= 80) {
        return 'b';
    } else if (grade >= 70) {
        return 'c';
    } else if (grade >= 60) {
        return 'd';
    } else {
        return 'f';
    }
}

function transformGradesToFeedback(studentGrades) {
    return studentGrades.map(function (student) {
        const feedbackGrade = getFeedback(student.grade);

        let feedbackMessage = '';
        if (feedbackGrade === 'a') {
            feedbackMessage = `Excellent Job ${student.name}, you got an ${feedbackGrade}`;
        } else if (feedbackGrade === 'b') {
            feedbackMessage = `Nice Job ${student.name}, you got an ${feedbackGrade}`;
        } else if (feedbackGrade === 'c') {
            feedbackMessage = `Well done ${student.name}, you got an ${feedbackGrade}`;
        } else if (feedbackGrade === 'd') {
            feedbackMessage = `What happened ${student.name}, you got an ${feedbackGrade}`;
        } else {
            feedbackMessage = `Not good ${student.name}, you got an ${feedbackGrade}`;
        }

        return feedbackMessage;
    });
}

const studentGrades = [
    { name: 'Joe', grade: 88 },
    { name: 'Jen', grade: 94 },
    { name: 'Steph', grade: 77 },
    { name: 'Allen', grade: 60 },
    { name: 'Gina', grade: 54 },
];

const studentFeedback = transformGradesToFeedback(studentGrades);

studentFeedback.forEach(function (feedback) {
    console.log(feedback);
});


// 3b



// 3c
//Impure
let count = 0;

function impureGetArrayLength(array) {
    count += 1;
    return array.length;
}

const myimpureArray = [1, 2, 3, 4, 5];
console.log(impureGetArrayLength(myArray));
console.log(count);

// Pure
function pureGetArrayLength(array) {
    return array.length;
}

const mypureArray = [1, 2, 3, 4, 5];
console.log(pureGetArrayLength(myArray));
