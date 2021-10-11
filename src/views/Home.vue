<!-- This component contains the homepage -->

<template>
  <div class="home">
    <FilterNav :current="current" @filterChange="current = $event" />
    <div v-for="person in filterPersons" :key="person.id">
      <SinglePerson :person="person" @delete="deletePerson" @addPerson="addPerson" />
    </div>
  </div>
</template>

<script>
import SinglePerson from "../components/SinglePerson.vue";
import FilterNav from "../components/FilterNav.vue";
export default {
  name: "Home",
  components: { SinglePerson, FilterNav },

  data() {
    return {
      persons: [],
      current: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/persons")
      .then((res) => res.json())
      .then((data) => (this.persons = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    deletePerson(id) {
      this.persons = this.persons.filter((el) => {
        return el.id !== id;
      });
    },
    addPerson(person) {
      this.persons.push(person);
    },
  },
  computed: {
    filterPersons() {
      if (this.current === "byId") {
        return this.persons.sort((a, b) => a.id - b.id);
      }
      if (this.current === "firstname") {
        return this.persons.sort((a, b) =>
          a.firstname.toLowerCase() > b.firstname.toLowerCase()
            ? 1
            : b.firstname.toLowerCase() > a.firstname.toLowerCase()
            ? -1
            : 0
        );
      }
      if (this.current === "lastname") {
        return this.persons.sort((a, b) =>
          a.lastname.toLowerCase() > b.lastname.toLowerCase()
            ? 1
            : b.lastname.toLowerCase() > a.lastname.toLowerCase()
            ? -1
            : 0
        );
      }
      if (this.current === "email") {
        return this.persons.sort((a, b) =>
          a.email.toLowerCase() > b.email.toLowerCase()
            ? 1
            : b.email.toLowerCase() > a.email.toLowerCase()
            ? -1
            : 0
        );
      }
      return this.persons;
    },
  },
};
</script>
