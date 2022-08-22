const form = document.querySelector("#form");
const input = document.querySelector("#input");
const searchBtm = document.querySelector("#searchBtn");
const gifContainer = document.querySelector("#gifContainer");
const removeBtn = document.querySelector("#removeBtn");


// add gif to gifContainer
function addToGifContainer(res){
  // get random url
  let dataLength = res.data.data.length;
  let randomIndex = Math.floor(Math.random() * dataLength);
  let url = res.data.data[randomIndex].images.original.url;
  console.log(url);

  // create img element and append to gifContainer
  let newGif = document.createElement('img')
  newGif.src = url;
  gifContainer.prepend(newGif);
}


// Get request
searchBtm.addEventListener("click", async function (e) {
  e.preventDefault();

  const searchValue = input.value;
  console.log(searchValue);

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchValue,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });

  console.log(response)
  addToGifContainer(response);
});


removeBtn.addEventListener('click', function(e){
  e.preventDefault();
  gifContainer.innerHTML = "";
})



// TEST: This works. It returned the url of the first gif in the list of gifs
// async function testGetGiphy() {
//   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
//     params: {
//       q: "happy",
//       api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
//     },
//   });
//   console.log(response.data.data[0].images.original.url)
// }
