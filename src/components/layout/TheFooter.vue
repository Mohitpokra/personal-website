<template>
<v-footer dark height="auto">
    <v-card class="flex" flat tile>
        <v-card-title class="blue-grey lighten-4">
            <div><strong class="subheading" style="color:black">Get connected with me on social networks!</strong></div>

            <v-spacer></v-spacer>

            <div>

                <v-btn class="mx-3" dark icon href="https://www.facebook.com/mohit.pokra" target="_blank">
                    <v-icon size="24px" color="black">fab fa-facebook</v-icon>
                </v-btn>
                <v-btn class="mx-3" dark icon href="https://www.linkedin.com/in/mohit-gupta-a8007398/" target="_blank">
                    <v-icon size="24px" color="black">fab fa-linkedin</v-icon>
                </v-btn>
                <v-btn class="mx-3" dark icon href="https://www.instagram.com/mohit_gupta__1/" target="_blank">
                    <v-icon size="24px" color="black">fab fa-instagram</v-icon>
                </v-btn>
            </div>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
            &copy;2019 — <strong>copyrights</strong>
        </v-card-actions>
    </v-card>
</v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'fab fa-facebook',
            'fab fa-twitter',
            'fab fa-google-plus',
            'fab fa-linkedin',
            'fab fa-instagram'
        ]
    })
}
</script>
