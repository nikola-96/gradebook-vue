<template>
  <div>{{ prof.name }} shshsh</div>
</template>
<script>
export default {
  name: "single",
  props: {
    prof: {
      type: Object,
      required: true
    }
  }
};
</script>