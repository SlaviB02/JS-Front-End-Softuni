function movies(array) {
    let movieArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith("addMovie") == true) {
            let movie = { name: array[i].substring(9) };
            movieArray.push(movie);
        }
        if (array[i].includes("directedBy") == true) {

            let index = array[i].indexOf("directedBy");
            let movieName = array[i].substring(0, index - 1)
            for (let j = 0; j < movieArray.length; j++) {
                if (movieArray[j].name == movieName) {
                    movieArray[j].director = array[i].substring(index + 11);

                }
            }

        }
        if (array[i].includes("onDate") == true) {
            let index = array[i].indexOf("onDate");
            let movieName = array[i].substring(0, index - 1)
            for (let j = 0; j < movieArray.length; j++) {
                if (movieArray[j].name == movieName) {
                    movieArray[j].date = array[i].substring(index +7);

                }
            }
        }


    }
    for(let i=0;i<movieArray.length;i++)
    {
        if(movieArray[i].director!=null && movieArray[i].date!=null)
        {
            console.log(JSON.stringify(movieArray[i]));

        }
    }

}
