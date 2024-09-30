function studentMark(score) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (score >= 50) {
                resolve("pass");
            } else {
                reject("fail");
            }
        }, 1000);
    });
}
function evaluateStudents(scores) {
    return scores.map(score => studentMark(score));
}
async function checkAllStudentsResults(scores) {
    console.log("Evaluating all student scores...");
    const results = await Promise.allSettled(evaluateStudents(scores));
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Student ${index + 1} Result: pass`);
        } else {
            console.log(`Student ${index + 1} Result: fail`);
        }
    });
}
checkAllStudentsResults([40, 60, 45, 80, 50]);
