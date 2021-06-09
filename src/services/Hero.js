
export async function getHero(url) {          
    return new Promise((resolve, reject) => { 
        fetch(url)
        .then(res => res.json())
        .then(data => ( 
                resolve(data))
            )
           
    });
}

export async function getAllHeros(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
    });
}
