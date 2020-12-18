<template>
  <div class="container">
    <div class="card">
            <div class="card-content">
                <div class="title">{{company.name}} ({{company.id}})</div>
            </div>
            <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" v-model="name">
          </div>
        </div>
  </div>
</template>

<script>
import companyService from '@/services/CompanyService';

export default {
  name: 'Edit',
  data: () => ({
    name: '',
    company: {
      id: null,
      name: '',
      domain: '',
      numberOfEmployees: null,
      subscriptionsPerEmployee: null,
    },
  }),
  props: [
    'id',
  ],
  created: function mounted() {
    companyService.getById(this.id).then((data) => {
      this.company = data;
    });
  },
};
</script>
