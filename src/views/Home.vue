<template>
  <section class="container is-centered">
    <h1 class="title">Company List</h1>
    <CompanyList />
  </section>
</template>

<script>
import CompanyList from './Company/CompanyList.vue';

export default {
  name: 'home',
  components: {
    CompanyList,
  },
};
</script>
