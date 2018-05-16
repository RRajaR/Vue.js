<template>
    <div>
        <h1>{{title}}</h1>
        <component2></component2>
    </div>
</template>
<script>
import component2 from './component2';

export default {
  name: 'component1',
  components: {
    component2,
  },
  data() {
    return {
      title: 'Registration Form',
    };
  },
};
</script>
