<script>
  import Card from '../card/card.svelte';
</script>

<article class="Form">
<!---text box--->
  <section class="name">
  <h2>Project Name:</h2>
  <label for = "project-name">Project Name</label>: 
  <input type = "text" id= "project-name">
<!---name button--->
  <button onclick="myFunction()">submit</button>
</section>
<!---counter button--->
<section class="counter">
  <h3>Rows Completed:</h3>
  <span id="num">0</span>
  <button onclick="finishedRow(+1)">finished row</button>
</section>

</article>
