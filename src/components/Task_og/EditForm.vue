<template>
    <div>
        <div v-if="showPopup" class="popup">
            <div class="popup-content">
                <button class="close-btn" @click="showPopup = false">X</button>
                <h2>Update Student Data</h2>
                <form @submit.prevent="submitForm">
                    <label>
                        Student Name:<br />
                        <input type="text" v-model="editedStudent.name" required />
                    </label><br /><br />
                    <label>
                        College Name:<br />
                        <input type="text" v-model="editedStudent.college" required />
                    </label><br /><br />
                    <label>
                        Percentage:<br />
                        <input type="number" v-model="editedStudent.percentage" required />
                    </label><br /><br />
                    <label>
                        CGPA:<br />
                        <input type="number" step="0.01" v-model="editedStudent.cgpa" required />
                    </label><br /><br />
                    <button type="submit">Save</button>
                </form>
            </div>
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
    data() {
        return {
            editedStudent: { ...this.student },
            showPopup: true,
        };
    },
    methods: {
        submitForm() {
            this.$emit("save", this.editedStudent);
            this.showPopup = false;
        },
        cancelEdit() {
            this.showPopup = false;
            this.$emit("cancel");
        },
    },
};
</script>

<style>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: white;
    padding: 20px;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>