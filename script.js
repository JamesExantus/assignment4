// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
     const randomizeButton = document.getElementById("randomize"); 
     console.log(randomizeButton);

// Array of predefined poster objects
const posters = [
    {
      image: 'https://www.usatoday.com/gcdn/-mm-/18e6d69e5da630ce37a497514798a97de656c210/c=0-60-2998-1754/local/-/media/USATODAY/USATODAY/2014/03/19//1395256555000-Rocky-2.jpg?width=1320&height=746&fit=crop&format=pjpg&auto=webp',
      title: 'rocky',
      quote: 'push forward',
    },
    {
      image: 'https://www.usatoday.com/gcdn/presto/2023/02/23/USAT/499c49d9-d4c1-420c-98cd-4205a378648c-USATSI_20062601.jpg?crop=3494,3494,x843,y0&width=240&height=240&format=pjpg&auto=webp',
      title: 'sports',
      quote: 'never quit',
    },
    {
      image: 'https://www.usatoday.com/gcdn/presto/2023/06/21/USAT/b91b7a7d-04ad-41e2-be59-294fac524e77-USP_NCAA_Baseball__College_World_Series-Florida_vs_1.jpg?crop=3301,3301,x742,y0&width=240&height=240&format=pjpg&auto=webp',
      title: 'success',
      quote: 'hard work pays off',
    },
    // Add more poster objects as needed
  ];
  
  // Event listener for randomize button
  // TODO: Add an event listener to the randomizeButton that calls a function when clicked
    randomizeButton.addEventListener("click", generateRandomPoster());
  // Event listener for submit button
  // TODO: Add an event listener to the submitButton that calls a function when clicked
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", generateCustomPoster);

  
  // Function to generate a random poster
  function generateRandomPoster() {
    // TODO: Generate a random index within the range of the posters array length
    let randIndex = posters[Math.floor(Math.random() * posters.length)];
    const { image, title, quote } = posters[randIndex];
    document.getElementById('poster-image').src = image;
    document.getElementById('poster-form-title').textContent = title;
    document.getElementById('poster-form-quote').textContent = quote;
    
    // TODO: Retrieve the random poster object from the posters array
  
    // TODO: Call the function to update the DOM with the values from the random poster object
  }
  
  // Function to generate a custom poster
  function generateCustomPoster(event) {
    event.preventDefault();
  
    // TODO: Retrieve the entered quote and author from the input fields
  
    // TODO: Create a custom poster object with the entered values
  
    // TODO: Call the function to update the DOM with the values from the custom poster object
  }
  
  // Function to update the poster content in the DOM
  function updatePoster(imageUrl, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
  }