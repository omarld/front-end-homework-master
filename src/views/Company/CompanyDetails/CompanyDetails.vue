<template>
    <div class="container">
        <header>
            <h1 id="company-name" class="title is-1">{{company.name}}</h1>
            <a :href="company.domain">{{company.domain}}</a>
        </header>
        <div class="columns">
            <div class="column">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            Number of Employess
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <span class="title is-2">{{company.numberOfEmployees}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            Subscriptions Per Employee
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                         <span class="title is-2">{{company.subscriptionsPerEmployee}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import companyService from '@/services/CompanyService';

export default {
  name: 'CompanyDetails',
  data: () => ({
    company: {},
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
.container {
    header {
        margin-bottom: 20px;
    }
    #company-name.title {
        margin-bottom: 0;
    }
}

</style>
