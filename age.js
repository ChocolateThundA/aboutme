
function trips(x, y, z) {
    return x * y * z
}
document.getElementById("width").innerHTML = window.localStorage.getItem('stor1');
document.getElementById("length").innerHTML = window.localStorage.getItem('stor2');
document.getElementById("height").innerHTML = window.localStorage.getItem('stor3');

document.getElementById('clickit').addEventListener('click', function () {
    const x = parseInt(document.getElementById('width').value)
    const y = parseInt(document.getElementById('length').value)
    const z = parseInt(document.getElementById('height').value)
    const ans = 'The volume of your box is ' + trips(x, y, z) + '.'
    document.getElementById('ret').innerHTML = ans
    window.localStorage.setItem('stor1', x);
    window.localStorage.setItem('stor2', y);
    window.localStorage.setItem('stor3', z);
})
