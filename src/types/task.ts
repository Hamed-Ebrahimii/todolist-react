export type TaskType = {
    id?: number,
    title: string,
    description: string,
    'user-id' : number ,
    isComplete : boolean,
    'date-start' : string,
    'date-end': string
}