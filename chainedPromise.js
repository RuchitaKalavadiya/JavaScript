function isPRCutOffMatch(cutoff) {
    return new Promise((resolve, reject) => {
        if (cutoff >= 85) {
            resolve('Congratulations! You have enough PR for the College admission.');
        } else {
            reject('Sorry, your PR is no sufficient.')
        }
    })
}

function isEntrenceMarksMatch(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 35) {
            resolve('Congratulations! Your College admission form is accepted!.');
        } else {
            reject('Sorry, your entrance exam marks is no sufficient.')
        }
    })
}

function getAdmissionInCollege(prCutOff, entranceExamMarks) {
    const promise = isPRCutOffMatch(prCutOff).then(() => {
        return isEntrenceMarksMatch(entranceExamMarks)
    })

    promise.then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
}

function getAdmissionInCollegeWay2(prCutOff, entranceExamMarks) {
    return isPRCutOffMatch(prCutOff).then(() => {
        return isEntrenceMarksMatch(entranceExamMarks)
    })
}

getAdmissionInCollege(90, 45)

const data = getAdmissionInCollegeWay2(90, 45).then(response => {
    console.log(response);
}).catch(error => {
    console.error({ error });
})