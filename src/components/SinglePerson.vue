<!-- This component shows person's details (Email, firstname lastname) -->

<template>
  <div class="person">
    <div class="actions">
      <h3 @click="showDetails">{{ person.firstname }} {{ person.lastname }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditPeron', params: { id: person.id } }">
          <span class="material-icons">edit</span>
        </router-link>
        <span @click="deletePerson" class="material-icons">delete</span>
      </div>
    </div>
    <div>
      <p v-if="detailsMode">{{ person.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["person"],
  data() {
    return {
      detailsMode: false,
      uri: "http://localhost:3000/persons/" + this.person.id,
    };
  },
  methods: {
    showDetails() {
      this.detailsMode = !this.detailsMode;
    },
    deletePerson() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.person.id))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
.person {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #00ce89;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>
