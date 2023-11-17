let Form = {
  textInput: 'myfunction',
  counter: 'finishedRow'
};

function myFunction() {
  let project = document.getElementById("project-name").value;
  document.getElementById("name").innerHTML = project;
};

function finishedRow(click) {
  let num = document.getElementById('num');
  let value = parseInt(num.innerHTML) + click;
  console.log(value + click);
  num.innerHTML = value;
};