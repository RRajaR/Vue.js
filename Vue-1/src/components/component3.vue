<template>
    <div>
        <label for="">Username: </label>
        <label for="">{{name}}</label>
        <br>
        <label for="">Email: {{email}}</label>
        <br>
        <label for="">Date of Birth: {{dob}}</label>
        <br>
        <label for="">Mobile No: {{mobile}}</label>
    </div>
</template>

<script>
export default {
  name: 'component3',
  props: ['name', 'email', 'dob', 'mobile'],
};
</script>
