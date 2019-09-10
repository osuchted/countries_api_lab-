import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      countries: "",
      capital: ""
    },
    mounted() {
    this.fetchCountry()},

    methods: {
      fetchCountry: function(){
        fetch("https://restcountries.eu/rest/v2/all")
          .then(response => response.json())
          .then(data => this.countries = data)
          .catch(console.error);
      }
    }
  })
})
