
export async function getHero(url) {          
    return new Promise((resolve, reject) => { 
        fetch(url)
        .then(res => res.json())
        .then(data => ( 
                resolve(data))
            )
           
    });
}

// export async function getAllHeros(url, agregarHero) {

//          return new Promise((resolve, reject) => {
//             fetch(url + '/1')
//             .then(res => res.json())
//             .then(data => resolve(data))
//         });

// }

export async function getAllHeros(url, agregarHero) {

    for (let index = 1; index <= 8; index++) {
         new Promise((resolve, reject) => {
            fetch(url + '/' + index)
            .then(res => res.json())
            .then(data => agregarHero(data))
            .then(data => resolve(data))
        });
    }

}
