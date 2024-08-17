const getJokes = async () => {
    try{
        const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
        const data = await res.json();
        const myJoke = document.querySelector("#myJoke");
        myJoke.innerHTML = data.joke;
    } catch (error) {}
};



window.addEventListener("load",()=>{
    getJokes();
});