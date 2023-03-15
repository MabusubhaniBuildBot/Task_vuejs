import { createWebHistory, createRouter } from "vue-router";
import Table from '../src/components/Task_og/Table.vue'
import Form from '../src/components/Task_og/Form.vue'
import View from '../src/components/Task_og/view.vue'
import EditForm from '../src/components/Task_og/EditForm.vue'
import ViewData from '../src/components/Task_og/viewpopup.vue'
import Viewstudent from '../src/components/Task_og/ViewStudent.vue'
const routers = [
    {
        path: '/',
        name: 'table',
        component: Table
    },
    {
        path: '/Form',
        name: 'Form',
        component: Form
    },
    {
        path: '/table',
        component: Table,
        props: route => ({ newStudent: route.params.newStudent }),
    },
    {
        path: '/view',
        name: 'View',
        component: View,
    },
    { path: '/edit/:id', component: EditForm, name: 'edit' },
    {
        path: '/ViewData/:id',
        name: 'ViewData',
        component: ViewData,
    },
    {
        path: '/ViewStudent',
        name: 'ViewStudent',
        component: Viewstudent,
    }



];
const router = createRouter({
    history: createWebHistory(),
    routes: routers // add the `routes` property here
})

export default router


