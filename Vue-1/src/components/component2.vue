<template>
    <div>
         <div class="regform">
<form action="">
    <label for="">Username: </label>
    <input type="text" v-model='username'><br>
    <label for="">E-mail: </label>
    <input type="email" v-model="email"><br>
    <label for="">Date of Birth: </label>
    <input type="date" v-model="dob"><br>
    <label for="">Mobile No: </label>
    <input type="tel" v-model="mobile"><br>
    <input type="submit" value="Register">
</form>
        </div>
        <component3 :name='username' :email='email' :dob='dob' :mobile='mobile'></component3>
    </div>
</template>

<script>
import component3 from '@/components/component3';

export default {
  name: 'component2',
  components: {
    component3,
  },
  data() {
    return {
      username: '',
      email: '',
      dob: '',
      mobile: '',
    };
  },
};
</script>

