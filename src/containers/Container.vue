<template>
    <div>
        <div>
          <router-view/>
        </div>
    </div>
</template>
<style lang="scss">
  // Import custom SASS variable overrides, or alternatively
  // define your variable overrides here instead
  @import '../assets/custom-vars.scss';

  // Import Bootstrap and BootstrapVue source SCSS files
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

  // General style overrides and custom classes
  body {
    margin: 0;
  }

  .my-widget {
    color: var(--danger);
  }
  /* Absolute Center Spinner */
</style>
<script>
import { serverBus } from '../main'

export default { 
    components: {
    },
    data () {
      return {
        load: false,
      }
    },
    created() {
        serverBus.$on('isVisibleBar', (isBarVisible) => {
            if (isBarVisible==true) {
                this.defaultNavbarClass='navigationBar-open'
            } else {
                this.defaultNavbarClass='navigationBar-close'
            }
        })
        serverBus.$on('loading', (load) => {
           this.load=load
        })

    }
}
</script>