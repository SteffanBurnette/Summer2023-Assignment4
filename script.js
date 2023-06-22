// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
//Creating the js elements that will correspond with the html elements
//user inputs
const form = document.getElementById("poster-form");
//image of poster
const img = document.getElementById("poster-image");
//poster title
const title = document.getElementById("poster-title");
//poster quote
const quote = document.getElementById("poster-quote");
//random poster button
const buttonrand = document.getElementById("randomize");
const buttonsub = document.getElementById("submit");
const inputquote = document.getElementById("poster-form-quote");
const inputtitle = document.getElementById("poster-form-title");
const inputimage = document.getElementById("poster-form-image");
console.log(buttonrand);
console.log(form);
console.log(img);
console.log(title);
console.log(quote);
console.log(buttonrand);


// Array of predefined poster objects
const posters = [
    {
      image: 'https://i5.walmartimages.com/asr/b7ef2cef-2084-4a1c-87a6-4a540fd57522.0b3d8ee4f88465d291210574a7723aec.jpeg',
      title: 'Conquer the mind then conquer the world',
      quote: 'Quote 1',
    },
    {
      image: 'https://www.edensprings.co.uk/sites/default/files/blog_migrate/10-motivational-posters-make-happen.jpg',
      title: 'Poster 2',
      quote: 'Quote 2',
    },
    {
      image: 'https://th.bing.com/th/id/OIP.EMw0_cfa8Sy_ZKiKTTE1DgHaLH?pid=ImgDet&rs=1',
      title: 'Dont fear faliure, embrace it and move forward.',
      quote: 'Henry Fords',
    },
    // Add more poster objects as needed
  ];
  
  // Event listener for randomize button
  // TODO: Add an event listener to the randomizeButton that calls a function when clicked
  
  // Event listener for submit button
  // TODO: Add an event listener to the submitButton that calls a function when clicked
  
  // Function to generate a random poster
  
  //Creating the section object
  const selec= document.createElement("section");
    selec.className="poster";

  function generateRandomPoster() {
    //Just to make sure that the function is being invoked
    console.log("IM working");
   
        //Giving the html elements their values
        img.setAttribute("src", posters[ Math.floor(Math.random() * posters.length)].image);
        img.setAttribute("Alt", "Motivation Poster");
        title.textContent=posters[ Math.floor(Math.random() * posters.length)].title;
        quote.textContent=posters[ Math.floor(Math.random() * posters.length)].quote;
      //Adding the elements to the section 
       console.log(selec);
        selec.appendChild(img);
        selec.appendChild(quote);
        selec.appendChild(title);
        
      
          

            //appends the poster to the webpage 
            document.getElementsByClassName("poster")[0].appendChild(selec);
  
           console.log("IM working");
        
    // TODO: Generate a random index within the range of the posters array length
  
    // TODO: Retrieve the random poster object from the posters array
  
    // TODO: Call the function to update the DOM with the values from the random poster object
    //Would call UpdatePoster() here but changed the way it functions.(Was a bit of an experiment)
  }
  buttonrand.addEventListener("click", generateRandomPoster);

  
  
  // Function to generate a custom poster
  function generateCustomPoster(event) {
    event.preventDefault();

    //Getting the values from the users inputs for the html <input> method and changing it.
    title.textContent=inputtitle.value;
    quote.textContent=inputquote.value;
  
    //buttonrand.onclick=generateRandomPoster();
    // TODO: Retrieve the entered quote and author from the input fields
  
    // TODO: Create a custom poster object with the entered values
  
    // TODO: Call the function to update the DOM with the values from the custom poster object
  }
  //Makes the button invoke the function when clicked
  buttonsub.addEventListener("click",generateCustomPoster)
  
  // Function to update the poster content in the DOM
  //For this function i added another input box for the user to input the url of the 
  //image that they wanted to use along with their title and quote which allowed them to
  //create their own poster. I did  not make use of the parameters but if i was to use this function
  //to update the poster instead of doing it in the generateRadomPoster() function i would just
  //call the function in the generateRandomPoster() and  pass in the respective objects as
  //parameters and put lines 62-81 in the function.
  function updatePoster(imageUrl, atitle, aquote) {

    //Getting the values from the users inputs for the html <input> method and changing it.
    title.textContent=inputtitle.value;
    quote.textContent=inputquote.value;
    img.setAttribute("src", inputimage.value);
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
  }

//Invoking the function when the button is clicked
  buttonsub.addEventListener("click",updatePoster)

  //Due to my added code, if the user does not add in an image the poster will  not have one.
  //to correct this i could add a seperate button so that buttonsub is not invoking updatePoster().
  