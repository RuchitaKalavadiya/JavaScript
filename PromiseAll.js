function requiredSPIPromise(spi) {
    return new Promise((resolve, reject) => {
        if (spi >= 6) {
            resolve();
        } else {
            reject()
        }
    })
}

const promises = []
const yearWiseSpi = [7, 8, 6, 7]
yearWiseSpi.forEach(spi => {
    promises.push(requiredSPIPromise(spi))
})

Promise.all(promises).then(() => {
    console.log('Your all SPI are good! Congratulations For the degree!');
}).catch(() => {
    console.log('Sorry! You can not get the degree');
})