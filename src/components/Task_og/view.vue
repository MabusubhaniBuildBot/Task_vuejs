<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Student Details</h2>
        <p><strong>Student Id: </strong>{{ student.id }}</p>
        <p><strong>Student Name: </strong>{{ student.name }}</p>
        <p><strong>College Name: </strong>{{ student.college }}</p>
        <p><strong>Student Percentage: </strong>{{ student.percentage }}</p>
        <p><strong>Student CGPA: </strong>{{ student.cgpa }}</p>
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: {
      student: {
        type: Object,
        required: true,
      },
    },
  };
  </script> 
  <style scoped>
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 50%;
    max-width: 500px;
  }
  
  .modal h2 {
    margin-top: 0;
  }
  
  .modal p {
    margin-bottom: 10px;
  }
  
  .modal button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007aff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .modal button:hover {
    background-color: #0066d9;
  }
  </style>