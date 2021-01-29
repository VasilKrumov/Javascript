function reverseChars(...args) {
    console.log(args.reduce((previous, current) => `${current} ${previous}`))
}
