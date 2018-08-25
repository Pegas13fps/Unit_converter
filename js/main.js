document.getElementById("kmInput").addEventListener('input', function(e) {
    let km = e.target.value;

    document.getElementById("metresOutput").innerHTML = km * 1000;
    console.log(km);
});