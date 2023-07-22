function isPass(marks) {
    const promise = new Promise((resolve, reject) => {
        if (marks >= 33) {
            resolve('Congratulations! You pass the exam!.');
        } else {
            reject('Sorry, you are fail.')
        }
    })

    promise.then(result => {
        console.log(result);
    }).catch(error => {
        console.error({ error });
    })
}
isPass(92)