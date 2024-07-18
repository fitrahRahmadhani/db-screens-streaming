const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
};

export async function getNowPlaying() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function genreMapping() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {}
}
