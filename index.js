// Select the div where the menu text will be displayed
const menuText = document.querySelector('#menuText');

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

    // Remove all menu-related classes from menuText
    menuText.classList.remove('dinnerClass', 'lunchClass','brunchClass','drinkClass');

    // Change the text in the menuText div based on the button clicked
    if (button.textContent === 'DINNER') {
      menuText.textContent = 'DINNER MENU';
      menuText.classList.add('dinnerClass');
    } else if (button.textContent === 'LUNCH') {
      menuText.textContent = 'LUNCH MENU';
      menuText.classList.add('lunchClass');
    } else if (button.textContent === 'BRUNCH')
    {
      menuText.textContent = 'BRUNCH MENU';
      menuText.classList.add('brunchClass');
    } else if (button.textContent === 'DRINKS')
    {
      menuText.textContent = 'DRINK MENU';
      menuText.classList.add('drinkClass');
    }
  });
});