console.log('***** Music Collection *****')

let collection = [];

function addTooCollection(title, artist, yearPublished){
    console.log('In addTooCollection')
    let music = [
        {title:'To Pimp A Butterfly', artist: 'Kendrick Lamar', yearPublished: 2015}, 
        {title: 'Astroworld', artist: 'Travis Scott', yearPublished: 2018}
    ]
    collection.push(music)
    return music;
}
console.log('testing music object',  addTooCollection());

console.log('Testing collection array', collection);

function showCollection(){
   console.log('In showCollection')
   for(let i = 0; i < collection.length; i++)
   for(let i = 0; i < collection.length; i++){
       console.log(collection[i][i].title, 'by', collection[i][i].artist, 'published in', collection[i][i].yearPublished)
   }
}

console.log('In showCollection', showCollection())


