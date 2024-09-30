function studentMark(score){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(score>=50){
                resolve("pass");
            }
            else{
                reject("fail");
            }
        }, 1000);
    });
}
async function studentResult(score) {
    try{
        console.log("Evaluating student score");
        const result=await studentMark(score);
        console.log(`Student Result:${result}`);
    }
    catch(error){
        console.log("Error",error);
    }
}
studentResult(40);