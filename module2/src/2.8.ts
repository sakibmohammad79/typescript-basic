{
//
type Something = {something: string}

const createPromise = () : Promise<Something> => {
    return  new Promise<Something>((resolve, reject) => {
        const data: Something = {something: 'something'}
        if(data) {
            resolve(data)
        }
        else{
            reject('data load to failed')
        }
    })
}

//calling createPromis Function
const getData = async(): Promise<Something>  => {
    const data: Something = await createPromise();
    // console.log(data);
    return data;
}

getData();


//data get in fetch

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const getTodoData = async(): Promise<Todo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    //console.log(data);
    return data;
}
getTodoData();

//
}