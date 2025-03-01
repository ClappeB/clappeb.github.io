<script setup lang="ts">
type ContactWay = { calltoaction: string; image: string; link: string }

const contactWays: ContactWay[] = [
  {
    image: '/images/linkedin.svg',
    calltoaction: 'Send me a message',
    link: 'https://www.linkedin.com/in/bruno-clappe/',
  },
  {
    image: '/images/envelope.png',
    calltoaction: 'Send me an email',
    link: encodeURI(
      'mailto:bruno.clappe@viacesi.fr?subject=I want to know more about you!&body=Hello Bruno,\n\nI found your profile on your website and I want to know more about you.\nCould we plan a video conference soon/-$\n\nBest regards,',
    ).replace('/-$', '%3F'),
  },
]
</script>

<template>
  <section id="contact">
    <h2 class="section-title title">Contact me</h2>
    <div>
      <p class="contact-intro">If you want to get in touch with me, feel free to:</p>
      <div class="contact-ways">
        <a
          v-for="(contactway, index) in contactWays"
          :key="index"
          class="contact-way"
          :href="contactway.link">
          <img v-if="contactway.image" :src="contactway.image" />
          <p>{{ contactway.calltoaction }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#contact {
  background-color: var(--blue);
  color: var(--foreground-clr-inv);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 4vh;
}

.title {
  font-size: clamp(5rem, 10vw, 6rem);
  color: var(--blue-light);
  margin: 0 20px;
}

.contact-intro {
  font-size: clamp(2rem, 5vw, 3rem);
  font-style: italic;
  margin: 8dvh clamp(20px, 10dvw, 200px);
}

.contact-ways {
  display: flex;
  justify-content: center;
  gap: clamp(20px, 10dvw, 200px);
}

.contact-way {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px transparent solid;
  cursor: pointer;
  color: var(--foreground-clr-inv);
  font-size: 1.3rem;
  gap: 10px;
  padding: 0px 20px;

  &:hover {
    border-radius: 1rem;
    border-left-color: var(--blue-green);
    border-right-color: var(--blue-green);
  }

  & > img {
    display: block;
    width: 100px;
    height: 100px;
  }
}
</style>
