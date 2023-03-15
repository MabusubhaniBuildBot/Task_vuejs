<template>
    <div class="modal">
        <div class="modal-content">
            <span class="close" @click="$emit('close')">&times;</span>
            <h2>View Student</h2>
            <p><strong>Name:</strong> {{ viewedStudent.name }}</p>
            <p><strong>College:</strong> {{ viewedStudent.college }}</p>
            <p><strong>Percentage:</strong> {{ viewedStudent.percentage }}</p>
            <p><strong>CGPA:</strong> {{ viewedStudent.cgpa }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        viewedStudent: {
            type: Object,
            required: true,
        },
    },
};
</script>
  
<style scoped>
/* Style for the popup modal */
.modal {
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

/* Style for the content of the popup modal */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 60%;
}

/* Style for the close button in the popup modal */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>
  