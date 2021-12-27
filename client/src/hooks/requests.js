const API_URL = 'v1'

  // TODO: Once API is ready.
  // Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`) //fetch method returns a promise
  return await response.json() //.json method returns a promise
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URL}/launches`)
  const fetchedLaunches = await response.json()
  return fetchedLaunches.sort((a, b) => { //returning the response in ascending order
    return a.flightNumber - b.flightNumber
  })
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: { 
      "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    })
  }
  catch(err) {
    return {
      ok: false,
    }
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try {
    console.log(id);
    await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    })
  }
  catch (err) {
    console.log(err);
    return {
      ok: false,
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};