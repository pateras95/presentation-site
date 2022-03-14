<template>
    <div class="container">
        <div class="about-me-container">
            <div class="header-text">Senior Front End Developer</div>
            <div class="mt-5">Hi There 👋</div>
            <div class="mt-5">I’m Konstantinos Kalyvas and currently i am leaving in Athens.</div>
            <div class="mt-5">
                I have a Master degree form the Departemnt of Information nad Communication Systems Enginnering
                from University of the Aegean (2014-2019) and currently I am in my Second Master degree on National &
                Kapodistrian University of Athens in Computer And Telecommunications technologies. I've been working since 2019
                as a professional Frontend Developer and occasionally as a Full Stack with Rest Full APIs intergrations. </div>
            <div class="mt-5">My motivation is to be challenged with projects that require me to work outside my comfort and
                knowledge set, as continuing to learn new Js frameworks and development techniques & architectures, are important to me.
                Feel free to continue in the Resume section 🎉</div>
        </div>
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="konstantinos-kalivas-45552018a" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://gr.linkedin.com/in/konstantinos-kalivas-45552018a?trk=profile-badge" /></div>
    </div>
</template>

<script>
    export default {
        name: "AboutMe",
        metaInfo: {
            script: [
                { src: 'https://platform.linkedin.com/badges/js/profile.js', async: true, defer: true }
            ],
        }
    }
</script>

<style scoped>
.container{
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
 
.about-me-container{
    width: 500px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
}

.header-text{
    font-size: 25px;
    font-weight: 700;
}


</style>
