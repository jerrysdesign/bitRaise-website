<template lang="pug">
div
  transition(name='page', mode='out-in')
    router-view
  //- ServicesList
</template>

<script>
import ServicesList from '@/components/BlockServices'
export default {
  name: 'Services',
  data () {
    return {
    }
  },
  components: {ServicesList}
}
</script>
