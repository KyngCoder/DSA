const urLify = (string) => {
    string = string.trim()
    const pattern = /\s/g
    console.log(string.replace((pattern),'%20'))
}
urLify('my john smith ')