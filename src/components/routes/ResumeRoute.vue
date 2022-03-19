<template>
    <div>
        <div class="header-text">Visualizing Women’s Economic Rights Around the World</div>
        <div class="text-center">
            <div class="simple-text">
                Στο παρακάτω διάγραμμα φαίνεται σε απεικόνιση η κατανομή των κοινωνικών δικαιωμάτων των γυναίκων σε όλο
                τον κόσμο. Μπορείτε με την χρήση της ροδέλας ή του PinchZoom να να κάνετε Zoom στον χάρτη για παρατήρηση 
                περαιτέρω πληροφοριών.
            </div>
            <pdf style="width:75%; margin: 0 auto;" src="Konstantinoss-Resume.pdf" />
        </div>
    </div>
</template>

<script>
    import pdf from 'vue-pdf'
    export default {
        name: "Resume",
        components: {
            pdf
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
    width: 75%;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
}

</style>
