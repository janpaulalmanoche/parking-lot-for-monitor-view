<template>

    <q-page>


        <q-card class="my-card" style="margin:20px 20%;height:350px">
            <q-card-section class="bg-purple text-white" style="height:150px">
                <div class="text-h6">User Details</div>
                <div class="text-subtitle2"></div>
            </q-card-section>

            <q-card-actions align="around">
                <q-item style="margin-top:20px;font-size:20px">
                    <q-item-section avatar top>
                        <q-icon name="account_tree" color="black" size="34px" />
                    </q-item-section>

                    <q-item-section top class="col-2 gt-sm">
                        <q-item-label class="q-mt-sm">Client</q-item-label>
                    </q-item-section>

                    <q-item-section top>
                        <q-item-label lines="1">
                            <span class="text-weight-medium">{{user_detail.user.first_name}}
                                {{user_detail.user.middle_name}}
                                {{user_detail.user.last_name}}
                            </span>
                            <span class="text-grey-8"> -</span>
                        </q-item-label>
                        <q-item-label caption lines="1">
                            {{user_detail.user.email}}
                        </q-item-label>
                        <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                            <span class="cursor-pointer">   {{user_detail.user.type.type}}</span>
                        </q-item-label>
                    </q-item-section>

                    <q-item-section top side>
                        <!--<div class="text-grey-8 q-gutter-xs">-->
                            <!--<q-btn class="gt-xs" size="12px" flat dense round icon="delete" />-->
                            <!--<q-btn class="gt-xs" size="12px" flat dense round icon="done" />-->
                            <!--<q-btn size="12px" flat dense round icon="more_vert" />-->
                        <!--</div>-->
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

    let api = 'http://127.0.0.1:8000' + '/api/';
    // let api = 'https://2525afa1.ngrok.io'+'/api/';
    export default {
        components: {Plot, Notif},

        mounted: function () {
            // window.setInterval(() => {
            //     this.get_data(),
            //         this.remove_1hour_reserved_no_show_up()
            // },5000);
            this.get_data()
        },

        methods: {
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
              user_detail:[]

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

</style>


<!--ssh -R 80:localhost:8500 ssh.localhost.run-->