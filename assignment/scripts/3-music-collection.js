console.log('***** Music Collection *****')

let collection = [];

function addTooCollection(title, artist, yearPublished){
    console.log('In addTooCollection')
    let album = [
        {title:'To Pimp A Butterfly', artist: 'Kendrick Lamar', yearPublished: 2015}, 
        {title: 'Astroworld', artist: 'Travis Scott', yearPublished: 2018},
        {title: 'Die Lit', artist: 'Playboi Carti', yearPublished: 2018},
        {title: 'good kid m.A.A.d city', artist: 'Kendrick Lamar', yearPublished: 2012},
        {title: 'My Turn', artist: 'Lil Baby', yearPublished: 2020},
        {title: 'My Beautiful Dark Twisted Fantasy', artist: 'Kanye West', yearPublished: 2010}
    ]
    collection = collection.concat(album)
    return album;
}
console.log('testing music object',  addTooCollection());

console.log('Testing collection array', collection);

function showCollection(){
   for(let i = 0; i < collection.length; i++){
       console.log(collection[i].title, 'by', collection[i].artist, 'published in', collection[i].yearPublished)
   }
}
console.log('In showCollection', showCollection());

function findByArtist(artist){
    let results = []
    for(let i = 0; i < collection.length; i++){
        if(collection[i].artist === artist){
            results.push(artist)
        } 
    }
    return results;
}
console.log('In findByArtist', findByArtist('Kendrick Lamar'));
console.log('In findByArtist', findByArtist('Lil Wayne'));

