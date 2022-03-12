<template>
    <div>
        <v-app-bar
            color="accent-4"
            dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            
            <v-spacer />

            <a href="https://github.com/pateras95" target="_blank" >
                <button class="github-button"/>
            </a>

            <v-btn icon>
                <v-icon>mdi-filter</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
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

        <v-card-text>
            The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                drawer: null,
            }
        },
        watch: {
            drawer: function(val) {
                this.$vuetify.goTo(val ? 'top' : 'bottom')
            }
        },
    }
</script>

<style scoped>
.github-button{
    background: url("../assets/images/github-box.png") no-repeat scroll 0 0 transparent;
    cursor: pointer;
    font-weight: bold;
    height: 32px;
    padding-bottom: 2px;
    width: 75px;
}

</style>
