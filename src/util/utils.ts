export default {
    numberWithCommas: (x: number): string => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    timestampToMonth: (date: Date): string => {
        return ('0' + (date.getMonth() + 1)).slice(-2)
    },
    timestampToDay: (date: Date): string => {
        return ('0' + date.getDate()).slice(-2)
    }
}
