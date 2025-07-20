<template>
  <div class="homepage">
    <!-- Fixed Logo -->
    <header class="logo-header">
      <img src="/logo.svg" alt="Logo" class="logo" />
    </header>

    <!-- Scrollable Sections -->
    <div class="scroll-container">
      <section
        v-for="(item, index) in videoCards"
        :key="index"
        class="content-wrapper"
      >
        <!-- Card on Top -->
        <div class="feature-card">
          <img :src="item.image" alt="Card Image" />
          <div class="card-content">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <router-link class="button" :to="item.link">Explore</router-link>
          </div>
        </div>

        <!-- YouTube Video -->
        <div class="video-box" ref="el => videoRefs.push(el)">
          <iframe
            :src="item.video"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const videoRefs = ref([])

const videoCards = [
  {
    video: 'https://www.youtube.com/embed/8Qn_spdM5Zg?autoplay=1&mute=1&loop=1&playlist=8Qn_spdM5Zg&controls=0&modestbranding=1',
    image: 'https://images.unsplash.com/photo-1590080876850-67f1c641b6c6',
    title: 'Timeless Elegance',
    description: 'Discover our exclusive collection crafted for luxury and refinement.',
    link: '/la-maison',
  },
  {
    video: 'https://www.youtube.com/embed/bTqVqk7FSmY?autoplay=1&mute=1&loop=1&playlist=bTqVqk7FSmY&controls=0&modestbranding=1',
    image: 'https://images.unsplash.com/photo-1600180758890-6d3ef49755c6',
    title: 'Radiant Designs',
    description: 'A celebration of light, design, and personal expression.',
    link: '/radiant',
  },
  {
    video: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&loop=1&playlist=ScMzIvxBSi4&controls=0&modestbranding=1',
    image: 'https://images.unsplash.com/photo-1612392061783-b14c66d0ff56',
    title: 'Modern Craft',
    description: 'Where contemporary taste meets timeless craftsmanship.',
    link: '/modern-craft',
  },
  {
    video: 'https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&mute=1&loop=1&playlist=ysz5S6PUM-U&controls=0&modestbranding=1',
    image: 'https://images.unsplash.com/photo-1622737130400-62a7f5cbba44',
    title: 'Luxury Lifestyle',
    description: 'Style, sophistication, and substance in every piece.',
    link: '/lifestyle',
  },
  {
    video: 'https://www.youtube.com/embed/K4TOrB7at0Y?autoplay=1&mute=1&loop=1&playlist=K4TOrB7at0Y&controls=0&modestbranding=1',
    image: 'https://images.unsplash.com/photo-1511381939415-c1d7c8bfc05b',
    title: 'Bold Statement',
    description: 'Unleash your confidence with bold, defining pieces.',
    link: '/statement',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    },
    { threshold: 0.4 }
  )

  videoRefs.value.forEach((el) => observer.observe(el))
})
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

.homepage {
  font-family: 'Georgia', serif;
  background: #fff;
  color: #222;
  height: 100vh;
  overflow: hidden;
}

/* Fixed logo */
.logo-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  text-align: center;
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.logo {
  height: 60px;
}

/* Scrollable full screen container */
.scroll-container {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  padding-top: 100px;
}

/* Full-page section */
.content-wrapper {
  scroll-snap-align: start;
  height: 100vh;
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

/* Card */
.feature-card {
  position: sticky;
  top: 100px;
  z-index: 3;
  width: 80%;
  max-width: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: fadeInCard 0.8s ease;
}
.feature-card img {
  width: 100%;
  height: auto;
}
.card-content {
  padding: 1.5rem;
  text-align: center;
}
.card-content h2 {
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
}
.card-content p {
  font-size: 1rem;
  margin-bottom: 1.2rem;
}
.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: black;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s ease;
}
.button:hover {
  background-color: #333;
}

/* Video */
.video-box {
  margin-top: auto;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.8s ease;
}
.video-box.show {
  transform: translateY(0);
  opacity: 1;
}
.video-box iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Card fade in */
@keyframes fadeInCard {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
