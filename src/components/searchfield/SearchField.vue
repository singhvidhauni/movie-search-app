<template>

<div class="row">
  <div class="col-sm-3">
    <a class="navbar-brand d-sm-block me-4 order-lg-1" href="index.html">
        <img src="./../../assets/logo-dark.png" width="142" alt="Cartzilla"></a>
  </div>
  <div class="col-sm-9">
      <form class="form-horizontal">
    <div class="form-group">
      <div class="input-group">
        <input
          id="queryField"
          v-model.trim="query"
          v-on:keypress.enter.prevent="executeNewSearch"
          type="search"
          class="form-control"
          placeholder="Search movie by a name or a title ..."
          autofocus
        />
      </div>
    </div>
  </form>
  </div>

</div>

</template>
<script>

export default {
  name: 'SearchField',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    executeNewSearch() {
      this.eventBus.emit('queryTyped', this.query);
    },
  },
};
</script>
<style scoped>
  input {
    font-size: 1rem;
    font-weight: 300;
  }
  .row {
    align-items: center;
    justify-content: center;
  }
  .row img {
    vertical-align: baseline;
  }
  .form-group {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    input {
       font-size: 1.25rem;
       font-weight: 500;
    }
  }
</style>
