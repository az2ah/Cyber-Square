
function randomScore() {
    return Math.floor(Math.random() * 101);
}
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
async function evaluateRandomStudent() {
    const score = randomScore(); // Get a random score
    console.log(`Score: ${score}`);
    try {
        const result = await studentMark(score);
        console.log(`Student result: ${result}`);
    } catch (error) {
        console.log(`Student result: ${error}`);
    }
}
evaluateRandomStudent();
