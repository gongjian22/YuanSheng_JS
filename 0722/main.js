let filterInput = document.getElementById('filterInput')
let ul = document.getElementById('names')
let li = ul.querySelectorAll('li.collection-item')
console.log(li);

filterInput.addEventListener('keyup', filterInputs)

function filterInputs() {
  // console.log(1);
  let value = filterInput.value.toUpperCase()
    // console.log(value);
  for (let i = 0; i < li.length; i++) {
    let a = li[i].querySelector('a').innerHTML.toUpperCase()
    if (a.indexOf(value) > -1) {
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
  console.log(li[0].querySelector('a').innerHTML.toUpperCase())
}
