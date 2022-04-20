const run = async () => {
    return new Promise<void>((res, rej) => {
        setTimeout(() => {
            res()
        }, 3000)
    })
}

run().then(() => {
    import('./server')
})