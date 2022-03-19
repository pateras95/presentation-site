<template>
    <div>
        <div class="header-text">Visualizing Women’s Economic Rights Around the World</div>
        <div class="text-center">
            <div class="simple-text">
                Στο παρακάτω διάγραμμα φαίνεται σε απεικόνιση η κατανομή των κοινωνικών δικαιωμάτων των γυναίκων σε όλο
                τον κόσμο. Μπορείτε με την χρήση της ροδέλας ή του PinchZoom να να κάνετε Zoom στον χάρτη για παρατήρηση 
                περαιτέρω πληροφοριών.
            </div>
            <v-zoomer style="width: 75%; height: auto; border: solid 1px silver; margin: 0 auto;">
                <img
                    src="@/assets/images/data-visual.jpg"
                    style="object-fit: contain; width: 100%; height: 100%;"
                >
            </v-zoomer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataVisualization"
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
    width: 75%;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
}

</style>
