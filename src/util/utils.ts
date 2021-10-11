export default {
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    timestampToMonth(date: Date) {
        return ('0' + (date.getMonth() + 1)).slice(-2);
    },
    timestampToDay(date: Date) {
        return ('0' + date.getDate()).slice(-2);
    }
}
