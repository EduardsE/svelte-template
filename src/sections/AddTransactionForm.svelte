<script lang="ts">
  import format from "date-fns/format";
  import Button from "./../components/Button.svelte";

  import Datepicker from "svelte-calendar";
  import { Category } from "./../constants/Category";

  export let toggleUpsert;

  const currencySymbols = {
    EUR: "€",
    USD: "$",
  };

  let currency = "EUR";

  let formattedSelected: string;
  let title: string;
</script>

<div class="p-4">
  <form action="#" method="POST">
    <div class="grid grid-cols-6 gap-6">
      <div class="col-span-6">
        <label
          for="price"
          class="block text-sm leading-5 font-medium text-gray-700">Price</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span
              class="text-gray-500 sm:text-sm sm:leading-5">{currencySymbols[currency]}</span>
          </div>
          <input
            id="price"
            type="number"
            min="0"
            class="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
            placeholder="0.00" />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <select
              bind:value={currency}
              aria-label="Currency"
              class="form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5">
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-span-6">
        <label
          for="category"
          class="block text-sm font-medium leading-5 text-gray-700">Category</label>
        <select
          id="category"
          class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
          {#each Object.entries(Category) as [value, label]}
            <option {value}>{label}</option>
          {/each}
        </select>
      </div>

      <div class="col-span-6">
        <label
          for="date"
          class="block text-sm font-medium leading-5 text-gray-700">Date</label>
        <Datepicker
          style="width: 100%"
          bind:formattedSelected
          format={(date) => format(date, 'dd/MM/yyyy')}>
          <input
            id="date"
            bind:value={formattedSelected}
            class="form-input mt-1 block w-full py-2 px-3 sm:text-sm sm:leading-5" />
        </Datepicker>
      </div>

      <div class="col-span-6">
        <label
          for="title"
          class="block text-sm font-medium leading-5 text-gray-700">Title</label>
        <input
          id="title"
          bind:value={title}
          class="form-input mt-1 block w-full py-2 px-3 sm:text-sm sm:leading-5" />
      </div>
    </div>

    <div class="px-4 py-4 text-right absolute w-full bottom-0 left-0 border-t">
      <Button addClass="mr-3" variant="light" on:click={() => toggleUpsert()}>
        Cancel
      </Button>
      <Button variant="primary">Save</Button>
    </div>
  </form>
</div>
