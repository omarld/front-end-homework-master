<template>
  <div class="container">
    <div class="card">
          <div class="card-content">
            <div class="title">{{company.name}} ({{company.id}})</div>
            <label class="label">Domain</label>
            <div class="control">
              <input class="input" type="text" v-model="company.domain">
            </div>
            <label class="label">Number of Employees</label>
            <div class="control">
              <input class="input" type="number" v-model="company.numberOfEmployees">
            </div>
            <label class="label">Subscriptions Per Employee</label>
            <div class="control">
              <input class="input" type="number" v-model="company.subscriptionsPerEmployee">
            </div>
            <div>
              <a class="button is-primary is-small" v-on:click="onSubmit">Submit</a>
            </div>
            <div class="modal" :class="[modalClass]">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">New Company Details</p>
                  <button class="delete" aria-label="close" v-on:click="closeModal"></button>
                </header>
                <section class="confirmation modal-card-body">
                  <div class="rows">
                    <div class="row">
                      <span class="title is-5">{{company.name}}</span>
                      ({{company.id}})
                    </div>
                   <div class="row">
                      Domain:
                      <span class="title is-6">{{company.domain}}</span>
                    </div>
                    <div class="row">
                      Number Of Employees:
                      <span class="title is-6">{{company.numberOfEmployees}}</span>
                    </div>
                    <div class="row">
                      Subscriptions Per Employee:
                      <span class="title is-6">{{company.subscriptionsPerEmployee}}</span>
                    </div>
                  </div>
                </section>
                <footer class="modal-card-foot">
                  <button class="button is-success" v-on:click="toggleModal">Confirm</button>
                  <button class="button" v-on:click="toggleModal">Close</button>
                </footer>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import companyService from '@/services/CompanyService';

export default {
  methods: {
    closeModal: function close() {
      this.modalClass = null;
    },
    toggleModal: function toggle() {
      this.modalClass = (this.modalClass === 'is-active') ? null : 'is-active';
    },
    onSubmit: function onSubmit() {
      this.toggleModal();
    },
  },
  data: () => ({
    modalClass: null,
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
    margin-top: 25px;
  }
}

.confirmation .rows{
    .row:first-child {
      margin-bottom: 20px;
    }
    .row {
      margin-top: 10px;
    }
}
</style>
