export function dateParser(date:string):Date{
    //25/08/2018
    date
    .split('/')
    .map ( (element:string):number => parseInt(element))
    
    return new Date(date[2], date[1], date[0] );
}