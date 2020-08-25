window.addEventListener('load', function() {
    document.getElementById("moon").setAttribute('display', 'none');
})

var sun = document.getElementById('sun');
sun.addEventListener('mouseover', function() {
    document.getElementById("moon").removeAttribute('display', 'none');
})
sun.addEventListener('mouseleave', function() {
    document.getElementById("moon").setAttribute('display', 'none');
})