//helper function to fetch the data from an external source and return it in JSON format
function getJSON(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // model code...it is a bit redundant in this case...we could just call getJSON directly...but if our model became more complex this sets us up to accomodate that.
  function getPeople(url) {
    return getJSON(url);
  }
  //  View code
  function renderPeopleList(people, peopleListElement) {
    // I decided to use a table to display my list of ships. The shipList Element is that table and it has 2 children: thead and tbody...we need to put our ships into tbody...so I reference the second child.
    const list = peopleListElement.children[1];
    list.innerHTML = "";
    //loop through the people
    people.forEach(function (people) {
      //console.log(ship);
      //create elements for list...tr
      let listItem = document.createElement("tr");
      listItem.innerHTML = `
          <td><a href="${people.url}">${people.name}</a></td>
          <td><a href="https://swapi.dev/api/planets/">${homeworld.name}</a></td>
          <td><a href="${people.url}">${people.films}</></td>
          `;
  
      listItem.addEventListener("click", function (event) {
        //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in
        event.preventDefault();
        getPeopleDetails(people.url);
      });
  
      //add the list item to the list
      list.appendChild(listItem);
    });
  }
  // need to write the code to render the details to HTML
  function renderPeopleDetails(peopleData) {
    console.log(peopleData);
  }
  
  // controller code
  function showPeople(url = "https://swapi.dev/api/people/") {
    getPeople(url).then(function (data) {
      console.log(data);
      const results = data.results;

//   function showHomeWorld(url = "https://swapi.dev/api/planets/") {
//     getName(url).then(function (data){
//         console.log(data);
//         const results = data.results;
//     })
//   }
  
      //get the list element
      const peopleListElement = document.getElementById("peoplelist");
      renderPeopleList(results, peopleListElement);
  
      // enable the next and prev buttons.
      if (data.next) {
        const next = document.getElementById("next");
        // normally we would prefer the addEventListener method of adding a listener. Using something like 'element.onEvent = event_function' has the limitation of only being able to hold one listener of the type we choose. In this case that is a good thing however. Because we are not re-creating the buttons each time we load a new batch of data we could end up with several listeners attached to each button by the last page. We won't have that issue here.
        next.ontouchend = () => {
          // notice to show the next page we just re-call the showShips function with a new URL
          showPeople(data.next);
        };
      }
      if (data.previous) {
        const prev = document.getElementById("prev");
  
        prev.ontouchend = () => {
          showPeople(data.previous);
        };
      }
    });
  }
  
  function getPeopleDetails(url) {
    //call getJSON functions for the provided url
    getPeople(url).then(function (data) {
      renderPeopleDetails(data);
      //with the results populate the elements in the #detailsbox
    });
  }
  showPeople();