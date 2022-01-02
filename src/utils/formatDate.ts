import { format, parseISO } from 'date-fns'


export function handleFormatDate(date: string | number, type: string) {
    return format(new Date(date), type)
}


export function handleFormatDateFile(date: string | number) {
    console.log(date)
    return format(new Date(date), 'yyyy_MM_dd')
}

export function prepareOnformat(value: string) {
    const splitDate = value.split(' ')
    return format(new Date(splitDate[0]), 'yyyy-mm-dd')
    return `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
}
