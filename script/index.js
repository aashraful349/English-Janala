const loadLessons=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(json=>displayLesson(json.data))
}

const displayLesson=(lessons)=>{
    console.log(lessons);
}

loadLessons();