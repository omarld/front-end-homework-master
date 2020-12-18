<template>
  <div class="container">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="Text input">
    </div>
  </div>
</template>

<script>
import companyService from '@/services/CompanyService';

export default {
  name: 'Edit',
  data: () => ({
    company: {},
  }),
  props: [
    'id',
  ],
  mounted: function mounted() {
    companyService.getById(this.id).then((data) => {
      this.company = data;
    });
  },
};
</script>
