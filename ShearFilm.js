`use strict`;
// const requestUrl='http://www.omdbapi.com/?i=tt3896198&apikey=aac5d3c2';
// let xhr=new XMLHttpRequest();
// xhr.open('GET',requestUrl);
// xhr.onload=()=>{
//     console.log(JSON.parse(xhr.response))
// }
// xhr.send();

let form = document.querySelector('form');
let inp = document.querySelector('input')
inp.addEventListener('focus', function () {

})

function searchFilms(title, ok, err) {
    const requestUrl = `http://www.omdbapi.com/?s=${title}&apikey=aac5d3c2`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    xhr.onload = () => {
        let date = JSON.parse(xhr.response)


        if (date['Response'] === 'True') {
            return ok(date["Search"])
        } if (date['Response'] === 'False') {
            return err('все плохо');
        }
    }
    xhr.send();

}
function getMovies(moviesImbdID, ok, err) {

    let arrImbdID = [];
    for (let i = 0; i < moviesImbdID.length; i++) {
        for (let key in moviesImbdID[i]) {
            if (key === "imdbID") {
                arrImbdID.push(moviesImbdID[i][key])
            }
        }
    }
    let movies = [];
    let errors = [];
    function sendRequest(i) {


        const requestUrl = `http://www.omdbapi.com/?i=${arrImbdID[i]}&apikey=aac5d3c2`;
        const xhl = new XMLHttpRequest();
        xhl.open('GET', requestUrl);
        xhl.onload = () => {
            let data = JSON.parse(xhl.response)
            if (data['Response'] === 'True') { movies.push(data) }
            if (data['Response'] === 'False') { errors.push('все плохо') }
            if (movies.length + errors.length === arrImbdID.length) {

                if (errors.length > 0) { return err(errors[0]) }

                return ok(movies)
            }
        }
        xhl.send();

    }
    for (let i = 0; i < arrImbdID.length; i++) {
        sendRequest(i)
    }
    // console.log(movies)
}

function rendering(film, temp) {
    let arr = [];
    for (let i = 0; i < film.length; i++) {
        let obj = {
            title: film[i]['Title'],
            plot: film[i]['Plot'],
            poster: film[i]['Poster']

        }
        arr.push(obj)

    }

    console.log(film)
    let dataInHtml = document.getElementById("workGrid");
    let html = "";
    for (let i = 0; i < film.length; i++) {
        html += insertHtml(film[i])
    }
    dataInHtml.innerHTML = html;
    function insertHtml(film) {
        let resStr = '';
        let str = film.Plot
        let arrStr = str.split(' ')
        for (let i = 0; i < arrStr.length; i++) {
            resStr += arrStr[i] + ' ';
            if (i === 3) { break }
        }

        let strPoster = film.Poster;
        if (strPoster === "N/A") {
            strPoster = "Нет изображения"
        } else {
            strPoster =
                `<img width="300" height="400" src="${film.Poster}"</ img>`
        }
        return `<li class="item">
        <p class="Poster">${strPoster}</p><p class="Title">${film.Title}</p>
        <p class="Plot">${resStr + '...'}</p></li>`
    }
    // let resultArrFetures = [];
    // let arrFeatures = ['Title', 'Plot', 'Poster'];
    // let obj = {};
    // for (let j = 0; j < film.length; j++) {

    //     for (let key in film[j]) {
    //         if (key === 'Title' || key === 'Plot' || key === 'Poster') {
    //             resultArrFetures.push(film[j][key])

    //         }
    //     }
    // }

    // console.log(resultArrFetures)
    // for (let i = 0; i < resultArrFetures.length; i++) {

    //     for (let j = 0; j < 3; j++) {
    //         let key = arrFeatures[i];
    //         let value = resultArrFetures[i];
    //         obj[key] = value;

    //     }
    // }
    let tempOK = document.getElementById('end')
    tempOK.innerHTML = 'Результат поиска';




    // console.log(resultArrFetures)

}

function error(err) {
    let tempErr = document.getElementById('end')
    tempErr.innerHTML = 'Произошла ошибка';
    let preparingOfDel = document.querySelector('ul');
    let child = preparingOfDel.lastElementChild;
    while (child) {
        preparingOfDel.removeChild(child)
        child = preparingOfDel.lastElementChild
    }

    // while (preparingOfDel.firstChild) {
    //     preparingOfDel.remove(preparingOfDel.firstChild)
    // }
    // let parent = preparingOfDel.parentNode;
    // parent.removeChild(preparingOfDel)






}
// 'Guardians of the Galaxy'

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(
        searchFilms(inp.value,
            (moviesImbdID) => getMovies(moviesImbdID, rendering, error), error))
})

