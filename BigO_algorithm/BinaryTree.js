let tree = {
    head: {
      value: 12,
      left: null,
      right: {
        value: 99,
        left: {
          value: 37,
          left: null,
          right: null
        },
        right: null
      }
    }
   }

const input = [88, 100,3, 27];

function insertTree (tree, num) {

    //if num is lower than tree.value
    if(num < tree.value) {
        //if lower -> check left is null or not
        if(tree.left === null) {
            //if null -> assign tree.left = new node.object
            let obj = {
                value: num,
                left: null,
                right: null
            }
            tree.left = obj;
        } else {
            //if not null -> call itself & continue to other node
            insertTree(tree.left, num);
        }
     } else {
        //else higher -> check right id null or not
        if(tree.right === null) {
            let obj = {
                value: num,
                left: null,
                right: null
            }
            //if null -> assign tree.right = new node.object (หยุดเรียกตัวเอง)
            tree.right = obj;
        }else {
            //if not null -> call itself(เรียกตัวเอง) & continue to other node
            insertTree(tree.right, num);
        }
     }
}



for (let i=0; i < input.length; i++) {
    insertTree(tree.head, input[i]);
}

console.log(JSON.stringify(tree));




