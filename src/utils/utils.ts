export class Utils {
    static itoa(num: number, minDigitals: number = 2): string {
        const abs = Math.abs(num)
        let res = `${abs}`

        for(;res.length < minDigitals;){
            res = `0${res}`
        }

        // while(res.length < minDigitals){
        //     res = `0${res}`
        // }

        // res = (new Array(minDigitals = res.length)).fill('0').join('') + `${Math.abs(num)}`

        return (num < 0 ? '-' : '') + res
        // return (num < 0 ? '-' : '') + (res < 10 ? `0${res}` : `${res}`) // с проверкой на отрицательные значения
    }
}