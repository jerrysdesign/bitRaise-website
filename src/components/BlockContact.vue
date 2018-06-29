<template lang="pug">
  section#contact.contact
    .cont
      .col-md-12.text-center(v-scroll-reveal.reset={ delay: 250 })
        h2.section-title.bottom_15 Let&apos;s Talk
        p
          | We are always looking for new exciting projects and collaborations.
          br
          | Feel free to contact us.
      .col-md-12.top_60(v-scroll-reveal.reset={ delay: 350 })
        form.col-md-8.offset-md-2.contact-form(method='POST', action='')
          .row
            // Name
            .col-md-6
              input#con_name.form-inp.requie(name='con_name', type='text', placeholder='Name', disabled)
            // Email
            .col-md-6
              input#con_email.form-inp.requie(name='con_email', type='text', placeholder='Email', disabled)
            .col-md-12
              // Message
              textarea#con_message.requie(name='con_message', placeholder='How can we help you?', rows='8', disabled)
              button#con_submit.site-btn.top_45.text-center.disabled(type='submit', disabled) Coming soon
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
$white_35: rgba(#8C99B8,.35);

//fonts
$font_0: Poppins;
$font_1: sans-serif;

.contact {
  padding: 100px 0;
  background: rgba(#000829, .95);
  position: relative;
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  @media (max-width: 481px) {
    padding: 60px 0;
  }
  p {
    text-align: center;
  }
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
  color: #D7DDED;
  &:focus {
    outline: 0;
    border-bottom: solid 1px #D7DDED;
  }
  &::placeholder {
    color: rgba(#8C99B8,.5);
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
    color: #D7DDED;
    margin-bottom: 15px;
    font-family: $font_0, $font_1;
    background: none;
    &:focus {
      outline: 0;
      border-bottom: solid 1px #D7DDED;
    }
    &::placeholder {
      color: rgba(#8C99B8,.5);
    }
  }
  .site-btn {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}
</style>
