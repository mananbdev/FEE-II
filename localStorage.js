localStorage.setItem('name', 'Manan Bansal');
localStorage.setItem('age', 18);

const name = localStorage.getItem('age');
console.log(age);
const details = {
  name: 'manan',
  lastname: 'bansal',
};
localStorage.setItem('d', JSON.stringify('details'));

const getob = JSON.parse(localStorage.getItem('d'));
console.log(getob);
