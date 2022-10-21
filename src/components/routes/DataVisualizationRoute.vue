<template>
    <div class="hello">
        <div v-if="errorStr">
            Sorry, but the following error
            occurred: {{ errorStr }}
        </div>
    
        <div v-if="gettingLocation">
            <i>Getting your location...</i>
        </div>
    
        <div v-if="location">
            Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataVisualization",
        data(){
            return{
                location:null,
                gettingLocation: false,
                errorStr:null
            }
        },
        created(){
            if(!("geolocation" in navigator)) {
                this.errorStr = 'Geolocation is not available.'
                return
            }

            this.gettingLocation = true
            // get position
            navigator.geolocation.getCurrentPosition(pos => {
                this.gettingLocation = false
                this.location = pos
            }, err => {
                this.gettingLocation = false
                this.errorStr = err.message
            })
        }
    }
</script>

<style scoped>

.header-text{
    margin-top: 30px;
    font-size: 25px;
    text-align: center;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
}

.simple-text{
    margin: 0 auto;
    width: 65%;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
}

</style>
