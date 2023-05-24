const post = [{ title: "Post1" }]


function updateLastActivity() {
    return new Promise((resolve, reject) => {
        let time = Date.now()
        resolve(time)
    })
}


function createpost2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post.push({ title: "Post2" })
            resolve(Object.values(post))
        }, 2000)

    })
}



Promise.all([updateLastActivity(), createpost2()]).then((values) => {
    console.log(values)
})



