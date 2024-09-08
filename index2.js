const data = async () => {
  let index = Math.floor(Math.random() * 100);
  const data = await fetch(
    `https://via.assets.so/movie.png?id=${index}&q=95&w=360&h=360&fit=fill`
  );
  const result = await data.url;
  console.log(result)
  setInterval(() => {
    document.getElementById(
      "display"
    ).innerHTML += `<img  id="display" src="${result}" alt="">`;
  }, 6000);
};
data();
