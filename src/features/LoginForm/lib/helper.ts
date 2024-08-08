export function checkPassword(text:string){
    let result = 0
    const test1 = /\d/g
    console.log(test1.test(text))
    test1.test(text) && result++
    text != text.toLowerCase() && result++
    console.log(result)
    return result
}