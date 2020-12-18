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
                            Number of Employees
                            <button id="edit-button" class="is-small" v-on:click="editOnClick">
                                <font-awesome-icon icon="edit" />
                            </button>
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
                            Number of Subscriptions
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                         <span class="title is-2">{{numberOfSubs}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <EditEmployee
        v-bind:openEditEmployee="openEditEmployee"
        v-bind:numEmployees="company.numberOfEmployees"
        v-bind:updateEmployee="updateEmployee"/>
    </div>
</template>

<script>
import companyService from '@/services/CompanyService';
import EditEmployee from '../../Shared/EditEmployee/EditEmployee.vue';

export default {
  name: 'CompanyDetails',
  components: {
    EditEmployee,
  },
  methods: {
    editOnClick: function edit() {
      this.openEditEmployee = !this.openEditEmployee;
    },
    updateEmployee: function update(count) {
      this.company.numberOfEmployees = count;
    },
  },
  data: () => ({
    company: {},
    numberOfSubs: 'Not Available',
    openEditEmployee: false,
  }),
  props: [
    'id',
  ],
  created: function created() {
    companyService.getById(this.id).then((data) => {
      this.company = data;
      if (data.numberOfEmployees && data.subscriptionsPerEmployee) {
        this.numberOfSubs = this.company.numberOfEmployees * this.company.subscriptionsPerEmployee;
      }
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

    .card-header-title button#edit-button {
        margin-left: 10px;
    }
}

</style>
