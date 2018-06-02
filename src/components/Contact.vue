<template lang="pug">
  section#contact.contact
    .cont
      .col-md-12.text-center.wow.fadeInUp
        h2.section-title.bottom_15 Let&apos;s Talk
        p
          | We are always looking for new exciting projects and collaborations.
          br
          | Feel free to contact us.
      .col-md-12.top_60.wow.fadeInUp(data-wow-delay='0.3s')
        form.col-md-8.offset-md-2.contact-form(method='POST', action='mail.php')
          .row
            // Name
            .col-md-6
              input#con_name.form-inp.requie(name='con_name', type='text', placeholder='Name')
            // Email
            .col-md-6
              input#con_email.form-inp.requie(name='con_email', type='text', placeholder='Email')
            .col-md-12
              // Message
              textarea#con_message.requie(name='con_message', placeholder='How can we help you?', rows='8')
              button#con_submit.site-btn.top_45.text-center(type='submit') Submit
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Welcome to bitRaise'
    }
  }
}
</script>

<style lang="scss" scoped>
//colors
$white_35: rgba(255, 255, 255, 0.35);

//fonts
$font_0: Poppins;
$font_1: sans-serif;

.contact {
  padding: 120px 0 60px;
}
.form-inp {
  width: 100%;
  height: 45px;
  border: 0;
  border-bottom: solid 1px $white_35;
  font-size: 13px;
  padding-left: 10px;
  margin-bottom: 15px;
  font-family: $font_0, $font_1;
  background: none;
  &:focus {
    outline: 0;
    border-bottom: solid 1px #dfdfdf91;
  }
}
.contact-form {
  textarea {
    width: 100%;
    border: 0;
    border-bottom: solid 1px $white_35;
    font-size: 13px;
    padding: 20px 0 0 10px;
    height: 119px;
    color: #dfdfdf91;
    margin-bottom: 15px;
    font-family: $font_0, $font_1;
    background: none;
    &:focus {
      outline: 0;
      border-bottom: solid 1px #dfdfdf91;
    }
  }
  .site-btn {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}
</style>
