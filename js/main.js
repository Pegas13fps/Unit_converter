
// Спрячем output пока не активны
document.getElementById('output').style.visibility = 'hidden';

// Конвертер Км - м, см, мл.
document.getElementById('kmInput').addEventListener('input', function(e) {
    // При активном input отобразим поля.
    document.getElementById('output').style.visibility = 'visible';

    let km = e.target.value;
    document.getElementById("metresOutput").innerHTML = km * 1000;
    document.getElementById("smOutput").innerHTML = km * 100000;
    document.getElementById("milimetersOutput").innerHTML = km * 1000000;
});
