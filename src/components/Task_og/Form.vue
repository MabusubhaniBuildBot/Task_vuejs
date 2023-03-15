<template>
  <div>
    <h1>Add Student</h1>
    <form @submit.prevent="handleSubmit">
      <div id="fields">
        <label for="name">Name:</label><br />
        <input type="text" id="name" v-model="name"><br /><br />
        <label for="college">College:</label><br />
        <input type="text" id="college" v-model="college"><br /><br />
        <label for="percentage">Percentage:</label><br />
        <input type="number" id="percentage" v-model="percentage"><br /><br />
        <label for="cgpa">CGPA:</label><br />
        <input type="number" id="cgpa" v-model="cgpa"><br /><br />
        <button type="submit">Add</button><br />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      college: "",
      percentage: null,
      cgpa: null,
    };
  },
  methods: {
    handleSubmit() {
      const student = {
        name: this.name,
        college: this.college,
        percentage: this.percentage,
        cgpa: this.cgpa,
      };
      // Emit the student data to the parent component
      this.$emit("studentAdded", student);
      this.name = "";
      this.college = "";
      this.percentage = null;
      this.cgpa = null;
      this.$router.push('/');
    },
  }
};
</script>
<style scoped>
form {
  border: 1px solid black;
  width: 40%;
  padding: 30px;
  margin-left: 30%;
}

#fields {
  padding: 30px;
  margin-left: 20%;
}
</style>



