<template>
    <div class="modal" :class="[modalClass]">
        <div class="modal-background"></div>
        <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Edit Number of employees</p>
            <button class="delete" aria-label="close" v-on:click="closeModal"></button>
        </header>
        <section class="confirmation modal-card-body">
            <label class="label">Number of Employees</label>
            <div class="control">
                <input class="input" type="number" v-model="inputEmployees">
            </div>
        </section>
        <footer class="modal-card-foot">
            <button class="button is-success" v-on:click="confirm">Confirm</button>
            <button class="button" v-on:click="toggleModal">Close</button>
        </footer>
        </div>
    </div>
</template>

<script>
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
    confirm: function confirm() {
      this.updateEmployee(this.inputEmployees);
      this.toggleModal();
    },
  },
  data: () => ({
    modalClass: null,
    inputEmployees: null,
  }),
  props: [
    'openEditEmployee',
    'numEmployees',
    'updateEmployee',
  ],
  watch: {
    openEditEmployee: function open(newVal) {
      if (newVal) {
        this.modalClass = 'is-active';
      } else {
        this.modalClass = null;
      }
    },
    numEmployees: function num(newVal) {
      this.inputEmployees = newVal;
    },
  },
};
</script>

<style lang="scss">

</style>
