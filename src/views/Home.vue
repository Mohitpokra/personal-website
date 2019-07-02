<template>
<v-flex>
    <Parallax />
    <Experience />
    <Project />
    <Family />
</v-flex>
</template>

<script>
import Parallax from '../components/home/parallax';
import Experience from '../components/home/experience';
import Project from '../components/home/project';
import Family from '../components/home/family';
export default {
    components: {
        Parallax,
        Experience,
        Project,
        Family
    },
    data: () => ({})
}
</script>
