class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}



class LinkedList {
    constructor (head = null) {
        this.head = head;
        this.items = []
    }
    size () {
        let node = this.head;
        while (node) {
            let first = node.data;
            //node = node.next
            console.log(node.data + "to"  + node.next.data);

            for(let i = first.have; i> 0 ; i--) {
                first.have --;
                console.log(first.moviename + " Left " + first.have)
            }
            node = node.next;
        }
        
    }
    // pop () {
    //     let popItems = node.data;
    //     forEach(popItems.have)
    // }

}

let movie1 = new Node({
    moviename: "Top Gun",
    have: 4,
    want: 8,
    waitingList: 4
});

let movie2 = new Node({
    moviename: "Timeless",
    have: 6,
    want: 8,
    waitingList: 2
});

let movie3 = new Node({
    moviename: "Timeless",
    have: 6,
    want: 8,
    waitingList: 2
});

let movie4 = new Node({
    moviename: "Iron Man",
    have: 3,
    want: 5,
    waitingList: 2
});

let movie5 = new Node({
    moviename: "The Curious Case of Benjamin Button",
    have: 12,
    want: 5,
    waitingList: 7
});

let movie6 = new Node({
    moviename: "Crimson Tide",
    have: 5,
    want: 19,
    waitingList: 14
});

let movie7 = new Node({
    moviename: "The Shawshank Redemption",
    have: 5,
    want: 19,
    waitingList: 14
});

let movie8 = new Node({
    moviename: "Sunset Boulevard",
    have: 8,
    want: 5,
    waitingList: 0
});

let movie9 = new Node({
    moviename: "Schindler's List",
    have: 15,
    want: 19,
    waitingList: 4
});

let movie10 = new Node({
    moviename: "The Dark Knight",
    have: 12,
    want: 10,
    waitingList: 2
});

let movie11 = new Node({
    moviename: "The Sting",
    have: 15,
    want: 19,
    waitingList: 4
});

let movie12 = new Node({
    moviename: "Saving Private",
    have: 13,
    want: 19,
    waitingList: 6
});

let movie13 = new Node({
    moviename: "The Usual Suspects",
    have: 14,
    want: 5,
    waitingList: 9
});

let movie14 = new Node({
    moviename: "Jaws",
    have: 16,
    want: 19,
    waitingList: 3
});

let movie15 = new Node({
    moviename: "The Bourne Ultimatum",
    have: 9,
    want: 19,
    waitingList: 10
});

let movie16 = new Node({
    moviename: "Wall-E",
    have: 7,
    want: 14,
    waitingList: 7
});

let movie17 = new Node({
    moviename: "Psycho",
    have: 4,
    want: 5,
    waitingList: 1
});

let movie18 = new Node({
    moviename: "Harry Potter and the Prisoner of Azkaban",
    have: 3,
    want: 4,
    waitingList: 1
});

let movie19 = new Node({
    moviename: "A Separation",
    have: 15,
    want: 19,
    waitingList: 4
});

let movie20 = new Node({
    moviename: "Gladiator",
    have: 12,
    want: 19,
    waitingList: 7
});

let list = new LinkedList(movie1);
let stack = new LinkedList(movie1);

movie1.next = movie2;
movie2.next = movie3;
movie3.next = movie4;
movie4.next = movie5;
movie5.next = movie6;
movie6.next = movie7;
movie7.next = movie8;
movie8.next = movie9;
movie9.next = movie10;
movie10.next = movie11;
movie11.next = movie12;
movie12.next = movie13;
movie13.next = movie14;
movie14.next = movie15;
movie15.next = movie16;
movie16.next = movie17;
movie17.next = movie18;
movie18.next = movie19;
movie19.next = movie20;

list.size();

