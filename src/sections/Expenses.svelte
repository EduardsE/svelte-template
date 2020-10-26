<script lang="ts">
  import { format } from "date-fns";

  import Button from "./../components/Button.svelte";

  import { open } from "./../stores/addTransaction";
  import { transactions } from "./../stores/transactions";

  // https://tailwindcomponents.com/component/table-responsive-with-filters
  const columns = ["Date", "Amount", "Title", "Category"];
</script>

<div class="container mx-auto px-4">
  <div class="py-8">
    <div class="flex justify-between">
      <h2 class="text-2xl font-semibold leading-tight">Expenses</h2>
      <Button on:click={() => open.set(true)}>Add</Button>
    </div>
    <div class="mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              {#each columns as column}
                <th
                  class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {column}
                </th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each $transactions as expense}
              <tr>
                <td class="p-3 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {format(expense.date, 'dd.MM.yyyy')}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="p-3 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                </td>
                <td class="p-3 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {expense.title}
                  </p>
                </td>
                <td class="p-3 bg-white text-sm">
                  <span
                    class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-red-200 opacity-50 rounded-full" />
                    <span class="relative">{expense.category}</span>
                  </span>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
