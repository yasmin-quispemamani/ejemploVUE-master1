<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h1 class="text-center">FICHA PERSONAL</h1>
                    <h2 class="text-center">DATOS PERSONALES</h2>
                    <div class="mb-3">
                        <label class="form-label">Nombre completo</label>
                        <input v-model="curso.nombre" type="text" class="form-control">
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-4">
                                <label class="form-label">Fecha de nacimiento:</label>
                                <input v-model="curso.Fechadenacimiento" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-4">
                                <label class="form-label">Nacionalidad:</label>
                                <input v-model="curso.nacionalidad" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-4">
                                <label class="form-label">DNI N°</label>
                                <input v-model="curso.dni" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-4">
                              <label class="form-label">Direccion:</label>
                              <input v-model="curso.direccion" type="text" class="form-control">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mb-4">
                                    <label class="form-label">Distrito:</label>
                                    <input v-model="curso.distrito" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-4">
                                    <label class="form-label">Provincia:</label>
                                    <input v-model="curso.provincia" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-4">
                                    <label class="form-label">Telefono fijo:</label>
                                    <input v-model="curso.fijo" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-6">
                                    <label class="form-label">Celular personal:</label>
                                    <input v-model="curso.personal" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-6">
                                    <label class="form-label">Celular Telral:</label>
                                    <input v-model="curso.telral" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-6">
                                    <label class="form-label">AFP/ONP:</label>
                                    <input v-model="curso.onp" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-6">
                                    <label class="form-label">indicar comision por flujo o saldo:</label>
                                    <input v-model="curso.comision" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-6">
                                    <label class="form-label">Estado civil:</label>
                                    <input v-model="curso.estado" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-6">
                                   <label class="form-label">nombre completo del conyuge:</label>
                                   <input v-model="curso.nombre" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-6">
                                    <label class="form-label">E-mail personal:</label>
                                    <input v-model="curso.email" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-6">
                                    <label class="form-label">E-mail telrad:</label>
                                    <input v-model="curso.email" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">especifique la talla:</label>
                                        <input v-model="curso.talla" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mb-3">
                                      <label class="form-label">Zapato:</label>
                                      <input v-model="curso.zapato" type="text" class="form-control">
                                    </div>                            
                               </div>
                               <div class="col-md-3">
                                   <div class="mb-3">
                                       <label class="form-label">camisa/bluza</label>
                                       <input v-model="curso.camisa" type="text" class="form-control">
                                    </div>
                               </div>
                               <div class="col-md-3">
                                    <div class="mb-3">
                                       <label class="form-label">Pantalon</label>
                                       <input v-model="curso.pantalon" type="text" class="form-control">
                                    </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">tiene hijos:</label>
                                        <input v-model="curso.hijos" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">si:</label>
                                         <input v-model="curso.si" type="text" class="form-control">
                                    </div>
                                </div>                    
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">no:</label>
                                        <input v-model="curso.no" type="text" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mb-4">
                                        <label class="form-label">Nombres y Apellido:</label>
                                        <input v-model="curso.nombre" type="text" class="form-control">
                                     </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-4">
                                        <label class="form-label">edad:</label>
                                        <input v-model="curso.edad" type="text" class="form-control">
                                     </div>
                                </div>                    
                                <div class="col-md-4">
                                    <div class="mb-4">
                                        <label class="form-label">año:</label>
                                        <input v-model="curso.año" type="text" class="form-control">
                                    </div>                                  
                                </div>   
                               </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <button @click="guardar()" type="button" class="btn btn-primary">Guardar</button>
            <RouterLink class="btn btn-light" to="/curso_listar">Cancelar</RouterLink>
        </div>
    </div>
</template>
<script>

import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    // name: 'scanner',
    data() {
        return {
            loadingDoc: false,
            curso: {
                nombrecompleto: '',
                Fechadenacimiento: '',
                Nacionalidad: '',
                dni: '',
                Direccion: '',
                Provincia: '',
                Telefonofijo: '',
                Celularpersonal: '',
                celularTelral: '',
                afponp: '',
                indicarcomisionporflujoosaldo: '',
                Estadocivil: '',
                nombrecompletodelconyuge: '',
                emailpersonal: '',
                emailtelrad: '',
                especifiquelatalla: '',
                Zapato: '',
                camisabluza: '',
                Pantalon: '',
                tienehijos: '',
                si: '',
                no: '',
                NombresyApellido: '',
                edad: '',
                año: ''
            },
        }
    },
    methods: {
        async guardar() {
            try {
                const q = query(collection(db, 'curso'));
                const docRef = await addDoc(q, this.ficha);
                this.$router.push({ name: 'curso_listar' })
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
    }
})
</script>