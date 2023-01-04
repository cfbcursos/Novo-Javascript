const cursos=["Javascript","HTML","CSS","Arduino","Raspberry","C++","Python","Java","C#"]

// const getTodosCursos=()=>{
//     return cursos
// }

export default function getTodosCursos(){
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}

// export default getTodosCursos
// export {cursos,getCurso}
export {getCurso}



