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

            <a href="https://github.com/pateras95" target="_blank">
                <button class="linkedin-button" />
            </a>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            bottom
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-title>Foo</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Bar</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Fizz</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Buzz</v-list-item-title>
                    </v-list-item>
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

</style>
