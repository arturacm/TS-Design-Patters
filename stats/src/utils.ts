export function dateStringToDate(date:string):Date{
    //25/08/2018
    const dateParts = date
    .split('/')
    .map ( (element:string):number => parseInt(element))

    return new Date(dateParts[2], dateParts[1] -1, dateParts[0] );
}