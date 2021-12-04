import axios from "axios";

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/2';
axios.get(url).then(res => {
    const todo = res.data as Todo
    const { id, title, completed } = todo;
    printNicely(id, title, completed);
})

function printNicely( id: number, title: string, completed: boolean){
    console.log(`
    the title is ${title}
    the id is ${id}
    is it completed? ${completed?"Yes":"Nope"}
    `)
}