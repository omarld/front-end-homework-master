<template>
    <div class="modal" :class="[modalClass]">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">New Company Details</p>
                <button class="delete" aria-label="close" v-on:click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <h1>Test</h1>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button" v-on:click="toggleModal">Cancel</button>
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
  },
  data: () => ({
    modalClass: null,
  }),
};
</script>
