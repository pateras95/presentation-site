<template>
    <div>
        <v-app-bar
            color="accent-4"
            dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            
            <v-spacer />

            <a href="https://github.com/pateras95" target="_blank">
                <button class="github-button" />
            </a>

            <a href="https://www.linkedin.com/in/konstantinos-kalivas-45552018a" target="_blank">
                <button class="linkedin-button" />
            </a>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <template v-slot:prepend>
                <div class="nav-top-container">
                    <v-avatar
                        size="128"
                    >
                        <img src="@/assets/images/me.jpg">
                    </v-avatar>
                    <div class="mt-3">Konstanstinos</div>
                    <dir class="mt-n1">Kalyvas</dir>
                </div>
            </template>

            <v-divider />

            <v-list
                nav
            >
                <v-list-item-group
                    v-model="group"
                    active-class="text--accent-4 nav-bar"
                >
                    <router-link to="/" style="text-decoration: none; color: inherit;">
                        <v-list-item class="nav-bar-text">
                            <v-list-item-title><v-icon class="mr-5">mdi-folder</v-icon>Home</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/" style="text-decoration: none; color: inherit;">
                        <v-list-item class="nav-bar-text">
                            <v-list-item-title><v-icon class="mr-5">mdi-folder</v-icon>About Me</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/" style="text-decoration: none; color: inherit;">
                        <v-list-item class="nav-bar-text">
                            <v-list-item-title><v-icon class="mr-5">mdi-folder</v-icon>Resume</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/" style="text-decoration: none; color: inherit;">
                        <v-list-item class="nav-bar-text">
                            <v-list-item-title><v-icon class="mr-5">mdi-folder</v-icon>Data Visualization</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                drawer: false,
                tems: [
                    { title: 'Home', icon: 'mdi-home-city' },
                    { title: 'My Account', icon: 'mdi-account' },
                    { title: 'Users', icon: 'mdi-account-group-outline' },
                ]
            }
        }
    }
</script>

<style scoped>
.github-button{
    background: url("../assets/images/github-box.png") no-repeat scroll 0 0 transparent;
    cursor: pointer;
    font-weight: bold;
    height: 32px;
    width: 75px;
}

.linkedin-button{
    background: url("../assets/images/linkedin.png") no-repeat scroll 0 0 transparent;
    cursor: pointer;
    font-weight: bold;
    height: 32px;
    width: 75px;
}

.nav-bar-text {
    margin-left: 50px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
}

.nav-top-container{
    margin-top: 15px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    font-size: 17px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
