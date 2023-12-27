<script setup lang="ts">
const coreValues = reactive([
  {
    name: "User-Friendly Interface",
    icon: "face-wink",
    description: "The website should have an intuitive and easy-to-use interface for creating, editing, and managing quizzes and questions.",
  },
  {
    name: "Variety of Question Types",
    icon: "data",
    description: "The website should support various question types, such as multiple-choice, true/false, open-ended, and more, to cater to different quiz needs.",
  },
  {
    name: "Security and Privacy",
    icon: "shield",
    description: "The platform should prioritize the security and privacy of user data, ensuring that quizzes and questions are safe from unauthorized access.",
  },
  {
    name: "Real-Time Results",
    icon: "clock",
    description: "The platform should provide real-time tracking of quiz responses and results, allowing creators to monitor participant engagement.",
  },
  {
    name: "Analytics and Insights",
    icon: "bar-chart",
    description: "The website should offer analytics and insights into quiz performance, including participant engagement and responses, to help creators make informed decisions.",
  },
  {
    name: "Mobile Compatibility",
    icon: "phone",
    description: "The website should be fully responsive and compatible with mobile devices, allowing participants to engage with quizzes and questions on various devices.",
  },
  {
    name: "Customization Options",
    icon: "settings",
    description: "The platform should offer a range of customization options for creating quizzes and questions, including various question types, design elements, and branding options.",
  },
  {
    name: "Share ability",
    icon: "share",
    description: "The website should allow users to easily share their quizzes and questions on social media, embed them on websites, or distribute them via email.",
  },
  {
    name: "Security and Privacy",
    icon: "shield",
    description: "The platform should prioritize the security and privacy of user data, ensuring that quizzes and questions are safe from unauthorized access.",
  },
]);
</script>

<template>
  <section class="main-container py-section-common">
    <div class="section-heading mb-10 sm:mb-12 2xl:mb-16">
      Our Core Values
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 2xl:gap-12">
      <div v-for="(core, i) in coreValues" :key="i" class="text-center">
        <div class="h-12 w-12 rounded-full bg-main-blue-1 flex items-center justify-center mx-auto">
          <NuxtIcon :name="core.icon" class="text-2xl text-basic-1" />
        </div>
        <h6 class="my-3 font-semibold text-xl text-basic-12">
          {{ core.name }}
        </h6>
        <p class="text-basic-9">
          {{ core.description }}
        </p>
      </div>
    </div>
  </section>
</template>
