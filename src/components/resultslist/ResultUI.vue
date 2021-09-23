/* eslint-disable vue/require-v-for-key */
<template>
  <div class="col-xs-10 py-3 mx-auto">
      <p class="px-3 text-mute" v-html="noResultsMessage"></p>
  </div>

  <div class="col-sm-6 mx-auto">
    <div
      class="card-wrapper wz-25 mx-auto"
      v-for="movie in searchedMovies"
      :key="movie.id"
    >
      <div class="card" v-show="movie.poster_path">
        <img
          class="card-img-top img-fluid"
          :src="imageBaseURL + movie.poster_path"
          alt="Card image cap"
        />
        <div class="card-body p-2">
          <h5
            class="card-title"
            v-show="movie.title || movie.original_title || movie.original_name"
          >
            {{ movie.title || movie.original_title || movie.original_name }}
          </h5>
          <p class="card-text text-justify text-mute">{{ movie.overview }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-mute">
            Popularity: {{ movie.popularity.toFixed(2) }}
          </li>
          <li class="list-group-item text-mute">
            Votes: {{ movie.vote_average }}
          </li>
          <li class="list-group-item text-mute">
            Release Date: {{ movie.release_date }}
          </li>
        </ul>
        <div class="card-body py-3 px-2">
          <a href="#" class="card-link btn btn-primary">Add To Cart</a>
          <a href="#" class="card-link btn btn-secondary">Buy Now</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ResultUI',
  data() {
    return {
      baseURL: 'https://api.themoviedb.org/3/search/multi',
      imageBaseURL: 'https://image.tmdb.org/t/p/original',
      API_key: process.env.VUE_APP_API_KEY,
      query: '',
      page: '1',
      queryDuration: 0,
      searchIndex: 0,
      noResultsMessage: '',
      // eslint-disable-next-line no-undef
      searchedMovies: [
      ],
    };
  },
  created() {
    this.eventBus.on('queryTyped', this.triggerNewSearch);
  },
  methods: {
    triggerNewSearch(query) {
      this.fetchMovieByTitle(query);
    },
    fetchMovieByTitle(query) {
      // eslint-disable-next-line no-alert
      const lang = 'language=en-US';
      const queryString = encodeURIComponent(query);
      const defaultString = 'include_adult=false';
      let queryDuration = 0;
      const url = `${this.baseURL
      }?`
        + `api_key=${
          this.API_key
        }&${
          lang
        }&query=${
          queryString
        }&page=${
          this.page
        }&${
          defaultString}`;
      const options = {
        method: 'GET',
        url,
        // url: 'https://api.themoviedb.org/3/search/multi?api_key=3d4401296c8a544eeaf2a59d335e5e58&language=en-US&query=roti&page=1&include_adult=false',
      };
      const self = this;
      const startTime = new Date().getTime();
      axios
        .request(options)
        .then((response) => {
          let currentResult;
          queryDuration = (new Date().getTime() - startTime) / 1000;
          self.noResultsMessage = '';
          if (response.data.results.length <= 0) {
            self.noResultsMessage = `The above <strong class="text-uppercase error">${
              query
            }</strong> query didn't return any  significant result. Please try again with a relevent search query`;
            this.eventBus.emit('resultFetched', { queryDuration, count: self.searchedMovies.length, results: self.searchedMovies });
          }
          self.searchedMovies = [];
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < response.data.results.length; i++) {
            currentResult = response.data.results[i];
            if (
              currentResult.title !== undefined
              && (currentResult.poster_path !== null)
            ) {
              self.searchedMovies.push(currentResult);
            }
          }

          this.eventBus.emit('resultFetched', { queryDuration, count: self.searchedMovies.length, results: self.searchedMovies });
        })
        .catch((error) => {
          self.noResultsMessage = error;
        });
    },
  },
};
</script>
<style>
  .error {
    color: red;
  }
</style>
