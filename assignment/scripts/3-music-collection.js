console.log('***** Music Collection *****')

let collection=[];

function addTooCollection(title, artist, yearPublished){
    let music = {
        title: ['To Pimp A Butterfly', 'Astroworld', 'Die Lit', 'good kid m.A.A.d city', 'My Turn', 'My Beautiful Dark Twisted Fantasy'],
        artist:['Kendrick Lamar', 'Travis Scott', 'Playboi Carti', 'Lil Baby', 'Kanye West'],
        yearPublished:[2015, 2018, 2018, 2012, 2020, 2010],
    }
    collection.push(music);
    return music;
}
console.log('testing music object',  addTooCollection());
console.log('Testing collection array', collection);

function showCollection () {
    console.log('Checking the number of items in collection', collection.length);
}

console.log('Testing Show function', showCollection());