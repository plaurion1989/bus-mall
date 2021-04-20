//Global variables
const result = document.getElementById('assetClicks');
const imageClick = document.getElementById('images');
const itemOneImg = document.getElementById('img1');
const itemTwoImg = document.getElementById('img2');
const itemThreeImg = document.getElementById('img3');
const pElemOne = document.getElementById('pElem1');
const pElemTwo = document.getElementById('pElem2');
const pElemThree = document.getElementById('pElem3');

let totalClicks = 0;
let itemOne = null;
let itemTwo = null;
let itemThree = null;

const ItemImages = function(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.clicks = 0;
  this.views = 0;
  // push instances of ItemImages into the array of all images
  ItemImages.allImages.push(this);
};
// array of all images
ItemImages.allImages = [];

function renderItems() {
  itemOneImg.src = itemOne.imagePath;
  itemTwoImg.src = itemTwo.imagePath;
  itemThreeImg.src = itemThree.imagePath;
  pElemOne.textContent = itemOne.name;
  pElemTwo.textContent = itemTwo.name;
  pElemThree.textContent = itemThree.name;
}

//Write a function that picks three different images
function itemSelection() {
  const itemOneIndex = Math.floor(Math.random() * ItemImages.allImages.length);
  console.log(ItemImages.allImages);
  console.log(itemOneIndex);
  let itemTwoIndex = Math.floor(Math.random() * ItemImages.allImages.length);
  console.log(ItemImages.allImages);
  let itemThreeIndex = Math.floor(Math.random() * ItemImages.allImages.length);
  console.log(ItemImages.allImages);
  while (itemTwoIndex === itemOneIndex) {
    itemTwoIndex = Math.floor(Math.random() * ItemImages.allImages.length);
    console.log(itemTwoIndex);
  }
  while (itemThreeIndex === itemOneIndex || itemThreeIndex === itemTwoIndex) {
    itemThreeIndex = Math.floor(Math.random() * ItemImages.allImages.length);
    console.log(itemThreeIndex);
  }
  itemOne = ItemImages.allImages[itemOneIndex];
  itemTwo = ItemImages.allImages[itemTwoIndex];
  itemThree = ItemImages.allImages[itemThreeIndex];
}

//new instances of constructor function
new ItemImages('bag', './img/bag.jpg');
new ItemImages('banana', './img/banana.jpg');
new ItemImages('bathroom', './img/bathroon.jpg');
new ItemImages('boots', './img/boots.jpg');
new ItemImages('breakfast', './img/breakfast.jpg');
new ItemImages('bubblegum', './img/bubblegum.jpg');
new ItemImages('chair', './img/chair.jpg');
new ItemImages('cthulu', './img/cthulu.jpg');
new ItemImages('dog-duck', './img/dog-duck.jpg');
new ItemImages('dragon', './img/dragon.jpg');
new ItemImages('pen', './img/pen.jpg');
new ItemImages('pet-sweep', './img/pet-sweep.jpg');
new ItemImages('scissors', './img/scissors.jpg');
new ItemImages('shark', './img/shark.jpg');
new ItemImages('sweep', './img/sweep.jpg');
new ItemImages('tauntaun', './img/tauntaun.jpg');
new ItemImages('unicorn', './img/unicorn.jpg');
new ItemImages('usb', './img/usb.jpg');
new ItemImages('water-can', './img/water-can.jpg');
new ItemImages('wine-glass', './img/wine-glass.jpg');
new ItemImages('wireframe', './img/wireframe.jpg');

//executable code
itemSelection();
console.log('item one', itemOne);
console.log('item two', itemTwo);
console.log('item three', itemThree);
renderItems();
