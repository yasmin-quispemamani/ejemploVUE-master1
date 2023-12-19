<template>
    <div class="row">
        <div class="col-md-12">
            <RouterLink class="btn btn-primary" to="/ficha_crear"> Agregar ficha</RouterLink>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">fechadenacimiento</th>
                                <th scope="col">nacionalidad</th> 
                                <th scope="col">dni</th>
                                <th scope="col">direccion</th>
                                <th scope="col">distrito</th> 
                                <th scope="col">provincia</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in ficha">
                                <td>{{ data.nombre }}</td>                                
                                <td>{{ data.fechadenacimiento }}</td> 
                                <td>{{ data.nacionalidad }}</td> 
                                <td>{{ data.dni }}</td>                                
                                <td>{{ data.direccion}}</td>
                                <td>{{ data.distrito }}</td> 
                                <td>{{ data.provincia }}</td>                               
                                <td>
                                    <RouterLink class="btn btn-success" :to="'/ficha_editar/' + data.id">Editar</RouterLink>
                                    <button class="btn btn-danger" @click="eliminar(data.id)">Eliminar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { collection, getDocs, query, where,deleteDoc,doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            loadingDoc: false,
            ficha: []
        }
    },

    methods: {
        async getUrls() {
            try {
                this.ficha= []
                const q = query(
                    collection(db, "ficha")
                );
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id);
                    this.ficha.push({
                        nombre: doc.data().nombre,
                        dni: doc.data().dni,
                        fechadenacimiento: doc.data().fechadenacimiento,                        
                        id: doc.id,
                        // ...doc.data()
                    });
                });
                // console.log(this.curso);
            } catch (error) {
                console.log(error);
            }
        },
        async eliminar(id) {
            try {
                const q = doc(db, "ficha", id);
                const docRef = await deleteDoc(q);
                this.getUrls()
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getUrls()
    }
})
</script>