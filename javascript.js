
function linkedList(value) {
   let head = node(value)
   const append = value => {
      findNull(headNode).next = node(value)
   }
   const prepend = value => {
      let newNode = new node(value);
      newNode.next = headNode;
      headNode = newNode;
   }
   const size = () =>  {
         return countNodes(headNode)
   }
   const headOfList = () => { 
      return headNode.value
   }
   const tailOfList = () => {
      return findNull(headNode)
   }
   const indexOfList = index => {
      return returnIndex(headNode, index, 0)
   }
   const pop = () => {
      let totalLinks = countNodes(headNode)
      let lastLink = returnIndex(headNode, totalLinks, 0);
      let oneBeforeLastLink = returnIndex(headNode, totalLinks - 1, 0);
      if(oneBeforeLastLink != undefined) {
         oneBeforeLastLink.next = null
      } else if (oneBeforeLastLink === undefined) {
         lastLink.value = null
      }
   }
   const contains = value => {
      return findValue(headNode, value)
   }
   const find = value => {
      let fixIndex = returnIndexOfValue(headNode, 0, value)
      let totalIndexes = countNodes(headNode)
      if(fixIndex < totalIndexes) {
         return fixIndex
      } else {
         return null
      }
   }
   const toString = () => {
      return stringify(headNode)
   }
   return {
      head,
      append,
      prepend,
      size,
      headOfList,
      tailOfList,
      indexOfList,
      pop,
      contains,
      find,
      toString
   }
}

function node(value=null, next=null)  {
   return {
      value: value,
      next: next
   }
}

// this function finds the last link in a linked list.
let findNull = function(linkedList) {
   if(linkedList.next == null) {
      return linkedList
   }  else if (typeof linkedList.next === 'object' ) {
      return findNull(linkedList.next)
   }
}

let countNodes = function(linkedList) {
   let count = 0;
   if(typeof linkedList.next === 'object' && linkedList.next != null) {
      count++;
      return count + countNodes(linkedList.next)
   } 
   return count + 1
}

let returnIndex = function(linkedList, index, startIndex) {
   let count = startIndex;
   if(typeof linkedList.next === 'object' && linkedList.next != null) {
      count++;
      if(count === index) {
         return linkedList
      }
      return returnIndex(linkedList.next, index, count)
   } else if (linkedList.next === null) {
      count++;
      if(count === index) {
         return linkedList
      }
   }  
}

let findValue = function(linkedList, string) {
   if(linkedList.value == string) {
      return true
   }  else if (typeof linkedList.next === 'object' && linkedList.next != null) {
      return findValue(linkedList.next, string)
   } else {
      return false
   }
}

let returnIndexOfValue = function(linkedList, startIndex, string) {
   let count = startIndex; // count starts with 0
   if(linkedList.value === string && typeof count != 'string') {
      count++
      return count
   } else if (typeof linkedList.next === 'object' && linkedList.next != null) {
      count++
      return count + returnIndexOfValue(linkedList.next, startIndex, string )
   } else {
      count++
      return count
   }
}

let stringify = function(linkedList) {
   let valueVariable = '';
   if(linkedList.next != null) {
      valueVariable += (linkedList.value) + ' '
      valueVariable += stringify(linkedList.next)
   } else if(linkedList.next === null) {
      return (linkedList.value) + ' '
   }
   return valueVariable
}


let list = linkedList(1);
let headNode = list.head;

list.append(2)
list.append(3)
list.prepend('new')

console.log(list.find('new'))

console.log(headNode)
console.log(list.toString())

