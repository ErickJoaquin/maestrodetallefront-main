import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Cliente from "../components/cliente/Formulario/index"
import ListarCliente from "../components/cliente/Listado/index"
import Producto from "../components/producto/Formulario/index"
import ListarProducto from "../components/producto/Listado/index"
import Orden from "../components/orden/index"
import ListaOrden from "../components/orden/Listado/index"



const routes = [
    {
        component: Cliente,
        name: "cliente",
        path: "/clientes"
    },
    {
        component: ListarCliente,
        name: "listarcliente",
        path: "/listarclientes"
    },
    {
        component: Producto,
        name: "producto",
        path: "/productos"
    },
    {
        component: ListarProducto,
        name: "listarproducto",
        path: "/listarproductos"
    },
    {
        component: Orden,
        name: "orden",
        path: "/orden"
    },
    {
        component: Orden,
        name: "orden",
        path: "/orden"
    },
    {
        component: ListaOrden,
        name: "listarordenes",
        path: "/listarordenes"
    },
];

export default new VueRouter({
    routes
});