<template>
  <div class="container">
    <div class="card">
          <div class="card-content">
            <div class="title">{{company.name}} ({{company.id}})</div>
            <label class="label">Domain</label>
            <div class="control">
              <input class="input" type="text" v-model="company.domain">
            </div>
            <label class="label">Number of Employes</label>
            <div class="control">
              <input class="input" type="number" v-model="company.numberOfEmployees">
            </div>
            <label class="label">Subscriptions Per Employee</label>
            <div class="control">
              <input class="input" type="number" v-model="company.subscriptionsPerEmployee">
            </div>
            <div>
              <a class="button is-primary is-small">Submit</a>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import companyService from '@/services/CompanyService';

export default {
  data: () => ({
    domain: null,
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
  created: function created() {
    companyService.getById(this.id).then((data) => {
      this.company = data;
    });
  },
};
</script>

<style lang="scss">
.card-content {
  a.button, label {
    margin-top: 15px;
  }
}
</style>
