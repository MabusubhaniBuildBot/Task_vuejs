<!-- <template>
    <div>
      <RouterLink to="/form"><button>Create Data</button></RouterLink>
      <br />
      <table>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>College Name</th>
            <th>Student Percentage</th>
            <th>Student CGPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.college }}</td>
            <td>{{ student.percentage }}</td>
            <td>{{ student.cgpa }}</td>
            <td>
              <button @click="editStudent(student)">Edit</button>
              <button @click="deleteStudent(student)">Delete</button>
              <button @click="viewStudent(student)">View</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="text" v-model="newStudent.name" />
            </td>
            <td>
              <input type="text" v-model="newStudent.college" />
            </td>
            <td>
              <input type="number" v-model="newStudent.percentage" />
            </td>
            <td>
              <input type="number" v-model="newStudent.cgpa" />
            </td>
            <td>
              <button @click="addNewStudent">Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router'
  
  export default {
    components: {
      RouterLink,
    },
    props: {
      students: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        students: [],
        newStudent: {
          id: null,
          name: '',
          college: '',
          percentage: null,
          cgpa: null,
        },
      }
    },
    methods: {
      editStudent(student) {
        // Open form component in edit mode
        this.$router.push({ path: '/form', query: { edit: true, id: student.id } })
      },
      deleteStudent(student) {
        // Delete student data from students array
        const index = this.students.findIndex((s) => s.id === student.id)
        if (index !== -1) {
          this.students.splice(index, 1)
        }
      },
      viewStudent(student) {
        // Open form component in view mode
        this.$router.push({ path: '/form', query: { view: true, id: student.id } })
      },
      addStudent(student) {
        // Add new student data to students array
        this.students.push(student)
      },
      addNewStudent() {
        // Set a unique ID for the new student
        this.newStudent.id = Math.max(...this.students.map((s) => s.id)) + 1
        // Call the addStudent method with the new student data
        this.addStudent(this.newStudent)
        // Reset the form data
        this.newStudent = {
          id: null,
          name: '',
          college: '',
          percentage: null,
          cgpa: null,
        }
      },
    },
  }
  </script> -->
<!-- <template>
  <div>
    <button @click="showForm = !showForm">Add Student</button>
    <div>
      <table>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>College Name</th>
            <th>Student Percentage</th>
            <th>Student CGPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.college }}</td>
            <td>{{ student.percentage }}</td>
            <td>{{ student.cgpa }}</td>
            <td>
              <button @click="editStudent(student)">Edit</button>
              <button @click="deleteStudent(student)">Delete</button>
              <button @click="viewStudent(student)">View</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Form v-if="showForm" @studentAdded="addStudent" @hideForm="showForm = false" />
      <EditForm v-if="showEditForm" :student="editedStudent" @save="saveEditedStudent" @cancel="showEditForm = false" />
      <ViewStudent v-if="showViewForm" :student="viewedStudent" @close="showViewForm = false" />
    </div>
  </div>
</template>
  
<script>
import Form from "./Form.vue";
import EditForm from "./EditForm.vue";


export default {
  components: {
    Form,
    EditForm,

  },
  data() {
    return {
      showForm: false,
      showEditForm: false,
      showViewForm: false,
      editedStudent: null,
      viewedStudent: null,
      students: [
        { id: 1, name: "John Doe", college: "ABC College", percentage: 75, cgpa: 3.2 },
        { id: 2, name: "Jane Smith", college: "XYZ College", percentage: 85, cgpa: 3.7 },
        { id: 3, name: "Bob Johnson", college: "DEF College", percentage: 80, cgpa: 3.5 },
        { id: 4, name: "Sarah Lee", college: "GHI College", percentage: 90, cgpa: 3.9 },
      ],
    };
  },
  methods: {
    addStudent(student) {
      student.id = this.students.length + 1;
      this.students.push(student);
      this.showForm = false;
    },
    deleteStudent(student) {
      const index = this.students.indexOf(student);
      this.students.splice(index, 1);
    },
    editStudent(student) {
      this.editedStudent = { ...student };
      this.showEditForm = true;
    },
    saveEditedStudent(student) {
      const index = this.students.findIndex((s) => s.id === student.id);
      this.students.splice(index, 1, student);
      this.showEditForm = false;
    },
    viewStudent(student) {
      alert(`Name: ${student.name}\nCollege: ${student.college}\nPercentage: ${student.percentage}\nCGPA: ${student.cgpa}`);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border: 1px solid black;
}

th {
  padding-bottom: 20px;

}

td {
  text-align: center;
  padding-bottom: 15px;
}
</style> -->
<template>
  <div>
    <button @click="showForm = !showForm">Add Student</button>
    <div>
      <table>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>College Name</th>
            <th>Student Percentage</th>
            <th>Student CGPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.college }}</td>
            <td>{{ student.percentage }}</td>
            <td>{{ student.cgpa }}</td>
            <td>
              <button @click="editStudent(student)">Edit</button>
              <button @click="deleteStudent(student)">Delete</button>
              <button @click="viewStudent(student)">View</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Form v-if="showForm" @studentAdded="addStudent" @hideForm="showForm = false" />
      <EditForm v-if="showEditForm" :student="editedStudent" @save="saveEditedStudent" @cancel="showEditForm = false" />
      <ViewStudent v-if="showViewForm" :student="viewedStudent" @close="showViewForm = false" />
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";
import EditForm from "./EditForm.vue";
import ViewStudent from "./ViewStudent.vue";

export default {
  components: {
    Form,
    EditForm,
    ViewStudent,
  },
  data() {
    return {
      showForm: false,
      showEditForm: false,
      showViewForm: false,
      editedStudent: null,
      viewedStudent: null,
      students: [
        { id: 1, name: "John Doe", college: "ABC College", percentage: 75, cgpa: 3.2 },
        { id: 2, name: "Jane Smith", college: "XYZ College", percentage: 85, cgpa: 3.7 },
        { id: 3, name: "Bob Johnson", college: "DEF College", percentage: 80, cgpa: 3.5 },
        { id: 4, name: "Sarah Lee", college: "GHI College", percentage: 90, cgpa: 3.9 },
      ],
    };
  },
  methods: {
    addStudent(student) {
      student.id = this.students.length + 1;
      this.students.push(student);
      this.showForm = false;
    },
    deleteStudent(student) {
      const index = this.students.indexOf(student);
      if (confirm("Are you sure you want to delete this student?")) {
        this.students.splice(index, 1);
      }
    },
    editStudent(student) {
      this.editedStudent = { ...student };
      this.showEditForm = true;
    },

    saveEditedStudent(student) {
      const index = this.students.findIndex((s) => s.id === student.id);
      this.students.splice(index, 1, student);
      this.showEditForm = false;
    },
    viewStudent(student) {
      this.viewedStudent = student;
      this.showViewForm =
        true;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border: 1px solid black;
}

th {
  padding-bottom: 20px;

}

td {
  text-align: center;
  padding-bottom: 15px;
}
</style>