// Select all the buttons in the menuContainer section
const buttons = document.querySelectorAll('.menuContainer .menuButton');

// Add a click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Reset the background color of all buttons
    buttons.forEach(function(btn) {
      btn.style.backgroundColor = '#02594d';
    });

    // Change the background color of the clicked button
    button.style.backgroundColor = '#ff5338';

    // Prepend the Bento menu to the menuContainer
   
  });
});

// Add individual event listeners for each button
document.getElementById('ramenButton').addEventListener('click', function() {
  var menuContainer = document.querySelector('.menuItem');
  var ramenMenu = document.getElementById('ramenMenu');
  menuContainer.prepend(ramenMenu);
  ramenMenu.classList.add('slideIn');
  var children = ramenMenu.children;
  for(var i = 0; i < children.length; i++) {
    var child = children[i];
    child.classList.add('animated-item');
    
    // Remove the class after the animation ends
    child.addEventListener('animationend', function() {
      this.classList.remove('animated-item');
    });
  }
});

document.getElementById('bentoButton').addEventListener('click', function() {
  var menuContainer = document.querySelector('.menuItem');
  var bentoMenu = document.getElementById('bentoMenu');
  menuContainer.prepend(bentoMenu);
  bentoMenu.classList.add('slideIn');
  var children = bentoMenu.children;
  for(var i = 0; i < children.length; i++) {
    var child = children[i];
    child.classList.add('animated-item');
    
    // Remove the class after the animation ends
    child.addEventListener('animationend', function() {
      this.classList.remove('animated-item');
    });
  }
});

document.getElementById('brunchButton').addEventListener('click', function() {
  var menuContainer = document.querySelector('.menuItem');
  var brunchMenu = document.getElementById('brunchMenu');
  menuContainer.prepend(brunchMenu);
  brunchMenu.classList.add('slideIn');
  var children = brunchMenu.children;
  for(var i = 0; i < children.length; i++) {
    var child = children[i];
    child.classList.add('animated-item');
    
    // Remove the class after the animation ends
    child.addEventListener('animationend', function() {
      this.classList.remove('animated-item');
    });
  }
});

document.getElementById('drinkButton').addEventListener('click', function() {
  var menuContainer = document.querySelector('.menuItem');
  var drinkMenu = document.getElementById('drinkMenu');
  menuContainer.prepend(drinkMenu);
  drinkMenu.classList.add('slideIn');
  var children = drinkMenu.children;
  for(var i = 0; i < children.length; i++) {
    var child = children[i];
    child.classList.add('animated-item');
    
    // Remove the class after the animation ends
    child.addEventListener('animationend', function() {
      this.classList.remove('animated-item');
    });
  }
});

// Repeat for other buttons...
const input = document.querySelector('#birthday');
input.value = '2023-09-11'; // Set the value
input.addEventListener('input', () => {
  console.log(input.value); // Log the value when it changes
});