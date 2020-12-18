<template>
  <div class="list">
    <ul>
      <div class="list-item">
        <li v-for="company in companies" :key="company.id">
          <CompanyItem :company="company"/>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import companyService from '@/services/CompanyService';
import CompanyItem from './CompanyItem/CompanyItem.vue';

export default {
  name: 'Company',
  components: {
    CompanyItem,
  },
  data: () => ({
    companies: [],
  }),
  mounted: function mounted() {
    companyService.getAll().then((data) => {
      this.companies = data;
    });
  },
};
</script>
