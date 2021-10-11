<!-- This component allows me to be able to filter columns by any attribute -->

<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: current === 'all' }">View all</button>
    <button @click="updateFilter('byId')" :class="{ active: current === 'byId' }">ID person</button>
    <button @click="updateFilter('firstname')" :class="{ active: current === 'firstname' }">
      First Name
    </button>
    <button @click="updateFilter('lastname')" :class="{ active: current === 'lastname' }">
      Last Name
    </button>
    <button @click="updateFilter('email')" :class="{ active: current === 'email' }">Email</button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>
