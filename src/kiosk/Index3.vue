<template>

    <q-page>


        <q-card class="my-card" style="margin:20px 20%;height:500px">
            <q-card-section class="bg-green text-white" style="height:100px">

                <div class="text-h6"> <q-input  @change="this.haha" v-model="rfid" placeholder="SCAN RFID" autofocus/></div>



            </q-card-section>

            <q-card-actions align="around">
                <q-item style="margin-top:20px;font-size:35px">
                    <!--<q-item-section avatar top>-->
                    <!--<q-icon name="account_tree" color="black" size="34px" />-->
                    <!--</q-item-section>-->
                    




                    <q-item-section top>
                        <q-item-label lines="1" style="font-weight:bold">
                            <span >
                                    Client :
                                {{user_detail.user.first_name}} {{user_detail.user.middle_name}} {{user_detail.user.last_name}}
                            </span>
                            <br/>
                            <span >
                                    Plate no : {{user_detail.plate_no}}
                            </span>
                            <br/>
                            <span >
                                    Vehicle type : {{user_detail.type.type}}
                            </span>
                            <br/>
                            <span >
                                    Vehicle brand : {{user_detail.brand_id}}
                            </span>
                            </br>
                            <span >
                                    Color : {{user_detail.color}}
                            </span>


                            <span class="text-grey-8"></span>
                        </q-item-label>
                        <q-item-label caption lines="1">

                        </q-item-label>
                        <!--<q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">-->
                        <!--<span class="cursor-pointer"> f  </span>-->
                                            <!--</q-item-label>-->
                                            <span style="color:red;font-weight:bold">
                            Available Spot  : {{this.count}}/6 <br/>
                            Vehicle Inside  : {{this.count2}}

                            </span>
                    </q-item-section>

                </q-item>

            </q-card-actions>
        </q-card>

    </q-page>

</template>

<script>

    // import {mapState} from 'vuex'
    import Notif from "./Notif";
    import Plot from "./Plot";
    // import axios from 'axios'
    import axios from 'axios';

    let api = '//damp-gorge-98609.herokuapp.com' + '/api/';
    // let api = 'http://127.0.0.1:8000' + '/api/';
    // let api = 'https://2525afa1.ngrok.io'+'/api/';
    export default {
        components: {Plot, Notif},

        mounted: function () {
            // window.setInterval(() => {
            //     this.get_data(),
            //         this.remove_1hour_reserved_no_show_up()
            // },1000);
            // this.get_data()
        },

        methods: {
            haha(){
                // alert('hahaha'),

                axios.get(api+'rfid/'+this.rfid)
                    .then((response)=>{
                        console.log(response.data)
                        this.user_detail = response.data[0]
                        this.showNotif('center',response.data[1])
                        // console.log(response.data.booking[0].user)
                        // this.user_detail = response.data

                        axios.get(api+ 'plot_count').then( (r)=> {
                            this.count = r.data[0]
                            this.count2 = r.data[1]
                        })


                    }).catch( (e)=>{
                       this.showNotif('center','Not Registered')
                    })
                this.rfid = ''
                // this.rfid = ''
            },
            showNotif (position ,$message) {
                this.$q.notify({
                    position:position,
                    // message: $message,
                    timeout:8000,
                    classes:'my-notif-class',
                    color: 'green',

                    message:  $message,
                    multiLine: true,
                    avatar: require('./htc.png'),
                    actions: [
                        { label: '', color: 'yellow', handler: () => { /* ... */ } }
                    ]
                })

            },
            get_data(){
                axios.get(api+'latest')
                    .then((response)=>{
                        // console.log(response.data.booking[0].user)
                        this.user_detail = response.data
                    })
            },


        },
        data() {
            return {
                user_detail:{
                    id: 1,
                    owner_id: '',
                    plate_no: "",
                    brand_id: '',
                    vehicle_type_id: '',
                    encoded_by: 3,
                    color: "",
                    rfid: "",
                    created_at: "",
                    updated_at: "",
                    user:{
                        id: 1,
                        first_name: "",
                        middle_name: "",
                        last_name: "",
                        id_no: "",
                        type_id: "",
                        role_id: 0,
                        email: "",
                        email_verified_at: null,
                        created_at: null,
                        updated_at: null
                    },
                    brand:{
                        id: 1,
                        brand: "",
                        created_at: null,
                        updated_at: null
                    },
                    type:{
                        id:1,
                        type: "",
                        created_at: null,
                        updated_at: null
                    }
                },

                count:'5',
                count2:'0',

                rfid:''

            }
        },


    }
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        align-items: start;
        justify-items: center;
        margin:2% 2px;
    }
    .grid img {
        border: 1px solid rgba(0,0,0,0.3);
        box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
        max-width: 30%;
    }
    .grid-item {

        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 67px;
        text-align: center;
        text-align: center;
        line-height: 80px;
        height: 350px;
        width: 400px;
    }
    #taken{
        background-color:red;

    }
    .span{
        font-size: 25px;
        margin-top: -200px !important;
    }
    #my-notif-class{
        background-color:blue;
        height:500px;
    }
    .test{
        max-height:500px;
    }
    #test{
        max-height:500px;
        color:violet;
    }
    #my-notif-class{
    font-size:50px !important;
    }

</style>


<!--ssh -R 80:localhost:8500 ssh.localhost.run-->