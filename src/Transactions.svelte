<script>
  import AddTransaction from "./sections/AddTransaction.svelte";
  import Expenses from "./sections/Expenses.svelte";
  import Income from "./sections/Income.svelte";
</script>

<div class="grid lg:grid-cols-2">
  <Expenses />
  <Income />
  <AddTransaction />
</div>
