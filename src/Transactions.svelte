<script>
  import AddTransaction from "./sections/AddTransaction.svelte";
  import Expenses from "./sections/Expenses.svelte";
  import Income from "./sections/Income.svelte";

  let open = true;

  const toggleUpsert = () => {
    open = !open;
  };
</script>

<div class="grid lg:grid-cols-2">
  <Expenses {toggleUpsert} />
  <Income />
  <AddTransaction {open} {toggleUpsert} />
</div>
