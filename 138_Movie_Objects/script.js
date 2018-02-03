var movies = [
  {
    watched: true,
    title: "Inception",
    rating: 5.0
  },
  {
    watched: false,
    title: "My Big Fat Ugly Greek Wedding",
    rating: 0.0
  },
  {
    watched: true,
    title: "Ben Hur",
    rating: 3.0
  }
];

function print_movies() {
  var s = "";

  for (i in movies) {
    if (movies[i].watched)
      s = "You watched ";
    else
      s = "You didn't watch ";
    
    console.log(s + movies[i].title + " - " + movies[i].rating);
  }
}

print_movies();
