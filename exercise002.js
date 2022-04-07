import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchData(apiEndPoint)
{
  try
  {
    let nextStep = await fetch(apiEndPoint)
    let response = await nextStep.json()
    console.log(response)
  }
  catch (error)
  {
    console.log(error)
  }
}

fetchData(jsonTypicode)

//Your task is to convert this function so that instead of using .then() and .catch()
// it uses the more modern async/await keywords and try{} catch{} syntax.
//result
//{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }

const fetchData1 = (apiEndPoint) => {
  fetch(apiEndPoint)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
};

fetchData1(jsonTypicode);
