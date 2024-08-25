const data = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await data.json();
  setInterval(() => {
    let index = Math.floor(Math.random() * 100);
    document.getElementById(
      "display"
    ).innerHTML = `id: ${result[index].id} <br/>
  title: ${result[index].title} <br/>
  body: ${result[index].body} <br/>`;
  }, 60000);
};
data();
