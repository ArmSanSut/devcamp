class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList{
    //Creates a linkedlist with passed value.
    constructor(value, next){
        //Creates a head node
            this.head = {
            value: value,
            next : null
        };
            this.movie1 = {
            moviename: "Top Gun",
            have: 4,
            want: 8,
            waitingList: 4,
        };
        this.next = next;
            this.movie3 = {
            moviename: "Timeless",
            have: 6,
            want: 8,
            waitingList: 2
        };
            this.movie4 = {
            moviename: "Simon Says",
            have: 15,
            want: 19,
            waitingList: 4
        };
            this.movie5 = {
            moviename: "Iron Man",
            have: 3,
            want: 5,
            waitingList: 2
        };
            this.movie6 = {
            moviename: "The Curious Case of Benjamin Button",
            have: 12,
            want: 5,
            waitingList: 7
        };
            this.movie7 = {
            moviename: "Crimson Tide",
            have: 5,
            want: 19,
            waitingList: 14
        };
            this.movie8 = {
            moviename: "The Shawshank Redemption",
            have: 5,
            want: 19,
            waitingList: 14
        };
            this.movie9 = {
            moviename: "Sunset Boulevard",
            have: 8,
            want: 5,
            waitingList: 0
        };
            this.movie10 = {
            moviename: "Schindler's List",
            have: 15,
            want: 19,
            waitingList: 4
        };
            this.movie11 = {
            moviename: "The Dark Knight",
            have: 12,
            want: 10,
            waitingList: 2
        }; 
            this.movie12 = {
            moviename: "The Sting",
            have: 15,
            want: 19,
            waitingList: 4
        };
            this.movie13 = {
            moviename: "Saving Private",
            have: 13,
            want: 19,
            waitingList: 6
        };
            this.movie14 = {
            moviename: "The Usual Suspects",
            have: 14,
            want: 5,
            waitingList: 9
        };
            this.movie15 = {
            moviename: "Jaws",
            have: 16,
            want: 19,
            waitingList: 3
        };
            this.movie16 = {
            moviename: "The Bourne Ultimatum",
            have: 9,
            want: 19,
            waitingList: 10
        };
            this.movie17 = {
            moviename: "Wall-E",
            have: 7,
            want: 14,
            waitingList: 7
        };
            this.movie18 = {
            moviename: "Psycho",
            have: 4,
            want: 5,
            waitingList: 1
        };
            this.movie19 = {
            moviename: "Harry Potter and the Prisoner of Azkaban",
            have: 3,
            want: 4,
            waitingList: 1
        };
            this.movie20 = {
            moviename: "A Separation",
            have: 15,
            want: 19,
            waitingList: 4
        };
        //As there is only one element in the list, head is also a tail
        this.tail = this.head;
        //Length would be 1
        //this.length = 1;
    }
}

let movie1 = new Node({
            moviename: "Top Gun",
            have: 4,
            want: 8,
            waitingList: 4,
})

let movie2 = new Node({
    moviename: "Top Gun",
    have: 4,
    want: 8,
    waitingList: 4,
})

movie1.next = movie2;

console.log('Creating a LinkList at constant time O(1): 20:');
const myLinkedList = new LinkedList(10);
console.log(myLinkedList);