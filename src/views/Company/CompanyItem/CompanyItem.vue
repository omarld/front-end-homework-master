<template>
    <div>
        <div class="card">
            <div class="card-content">
                <div class="columns">
                    <div class="column">{{company.id}}</div>
                    <div class="column">{{company.name}}</div>
                    <div class="column">
                        <a class="button is-primary is-small is-outlined"
                        v-on:click="onClick(company.id)">
                            Edit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../../../router';

export default {
  name: 'CompanyItem',
  props: [
    'company',
  ],
  methods: {
    onClick: (id) => {
      router.push({ name: 'edit', params: { id } });
    },
  },
};
</script>
