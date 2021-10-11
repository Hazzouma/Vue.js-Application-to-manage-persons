<!-- This component allows me to ADD new person -->

<template>
  <form @submit.prevent="handleSubmit">
    <label>First name :</label>
    <input type="text" v-model="firstname" required />
    <label>Last name :</label>
    <input type="text" v-model="lastname" required />
    <label>Email :</label>
    <input type="text" v-model="email" required />
    <button>Add Person</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
    };
  },
  methods: {
    handleSubmit() {
      let person = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
      };
      fetch("http://localhost:3000/persons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(person),
      })
        .then(() => this.$emit("addPerson", person))
        .then((window.location.href = "/"));
    },
  },
};
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
