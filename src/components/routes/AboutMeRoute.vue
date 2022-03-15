<template>
    <div>
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
            <div class="badges-container">
                <div class="badge-base LI-profile-badge " data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="konstantinos-kalivas-45552018a" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://gr.linkedin.com/in/konstantinos-kalivas-45552018a?trk=profile-badge" /></div>
                <div class="mr-14"><a target="_blank" href="https://stackoverflow.com/users/9570494/konstantinos-kalivas"><img src="https://stackoverflow.com/users/flair/9570494.png?theme=dark" width="208" height="58" alt="profile for Konstantinos Kalivas at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for Konstantinos Kalivas at Stack Overflow, Q&amp;A for professional and enthusiast programmers"></a></div>
            </div>
        </div>
        <v-card
            class="mx-auto my-5"
            max-width="1150"
            outlined
            shaped
        >
            <v-card-title class="header-text">Programming Skills</v-card-title>
            <div class="skills-container">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Vue.js & Nuxt.js</v-list-item-title>
                        <v-list-item-subtitle><v-progress-linear
                            color="black"
                            height="10"
                            value="85"
                            striped
                        /></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>React Native</v-list-item-title>
                        <v-list-item-subtitle><v-progress-linear
                            color="black"
                            height="10"
                            value="60"
                            striped
                        /></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <div class="skills-container">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Javascript</v-list-item-title>
                        <v-list-item-subtitle><v-progress-linear
                            color="black"
                            height="10"
                            value="60"
                            striped
                        /></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Java Spring for Rest APIs</v-list-item-title>
                        <v-list-item-subtitle><v-progress-linear
                            color="black"
                            height="10"
                            value="35"
                            striped
                        /></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <div class="skills-container">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Android Studio ( Java & Kotlin )</v-list-item-title>
                        <v-list-item-subtitle><v-progress-linear
                            color="black"
                            height="10"
                            value="75"
                            striped
                        /></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>MySQL</v-list-item-title>
                        <v-list-item-subtitle><v-progress-linear
                            color="black"
                            height="10"
                            value="55"
                            striped
                        /></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <div class="skills-container">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Node.js</v-list-item-title>
                        <v-list-item-subtitle><v-progress-linear
                            color="black"
                            height="10"
                            value="65"
                            striped
                        /></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>HTML5 & HTML</v-list-item-title>
                        <v-list-item-subtitle><v-progress-linear
                            color="black"
                            height="10"
                            value="90"
                            striped
                        /></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <div class="skills-container">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Bootstrap & Vuetify & Tailwind</v-list-item-title>
                        <v-list-item-subtitle><v-progress-linear
                            color="black"
                            height="10"
                            value="95"
                            striped
                        /></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Blockchain Technologies</v-list-item-title>
                        <v-list-item-subtitle><v-progress-linear
                            color="black"
                            height="10"
                            value="50"
                            striped
                        /></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </div>
        </v-card>
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
    flex-wrap: wrap;
    row-gap: 20px;
}

.badges-container{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
}
 
.about-me-container{
    width: 500px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
}

.skills-container {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-text{
    font-size: 25px;
    font-weight: 700;
}

@media only screen and (max-width: 700px) {
    .skills-container {
        flex-wrap: wrap;
    }
}


</style>
