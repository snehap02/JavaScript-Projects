const reviewList = [
    {
        id: 1,
        author: 'Justin Wright',
        job: 'AI-ML Developer',
        image: 'person2',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum doloremque iure recusandae, suscipit dolor minima inventore in excepturi voluptatibus odio?'
    },
    {
        id: 2,
        author: 'Natalie Robinson',
        job: 'UI/UX Designer',
        image: 'person3',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum doloremque iure recusandae, suscipit dolor minima inventore in excepturi voluptatibus odio?'
    },
    {
        id: 3,
        author: 'Michael Hensley',
        job: 'Web Developer',
        image: 'person4',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum doloremque iure recusandae, suscipit dolor minima inventore in excepturi voluptatibus odio? Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        id: 4,
        author: 'Jasmine James',
        job: 'Full Stack Developer',
        image: 'person5',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum doloremque iure recusandae, suscipit dolor minima inventore in excepturi voluptatibus odio?'
    }
];

//Grab the elements
const image = document.getElementById('person-img');
const auth = document.getElementById('author');
const job = document.getElementById('job');
const description = document.getElementById('info');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const random = document.querySelector('.random-btn');

//Starting element based on ids
let currentEl = 0;

//show person list based on their ids
function showPerson(){
    const item = reviewList[currentEl];
    image.src = `./images/${item.image}.jpg`
    auth.innerText = item.author;
    job.innerText = item.job;
    description.innerText = item.text;
}

//loading current item
window.addEventListener('DOMContentLoaded', function(){
    showPerson();
})

//show next item
nextBtn.addEventListener('click', function(){
    currentEl++;
    if(currentEl > reviewList.length - 1){
        currentEl = 0;
    }
    showPerson();
})

//show prev item
prevBtn.addEventListener('click', function(){
    currentEl--;
    if(currentEl < 0){
        currentEl = reviewList.length- 1;
    }
    showPerson();
})

//show random reviews
random.addEventListener('click', function(){
    currentEl = Math.floor(Math.random() * reviewList.length);
    showPerson();
})


