export { }
// interface Projects { id: number, name: string, image: string, link: string, status: boolean }
// const projects: Projects = {
//     id: 1,
//     name: "ngoc",
//     image: "123",
//     link: '23',
//     status: true,
// }

// function showpro(pro: Projects) {
//     console.log(pro);

//     return pro;
// }

// showpro(projects);

interface projectList {
    id: number;
    name: string;
}
const projectsList: projectList[] = [
    {
        id: 1,
        name: "ngoc",
    },
    {
        id: 12,
        name: "nga",
    }
]

function showproj(data: projectList[]) {
    // console.log(data);

    data.map(pr => {
        console.log(pr);
        return `${pr.name}`;
    })


    return data;
}
showproj(projectsList);

// Array
type ProductList = number[];
const productList:ProductList =[12,232,32];


// function
