<script setup lang="ts">
interface IFeature {
  id: string
  title: string
  description: string
  content: string[]
}

const selectFeature = ref("quiz");
const features = reactive<Record<string, IFeature>>({
  poll: {
    id: "poll",
    title: "Poll",
    description: "Create and share polls with ease",
    content: [
      "Allowing you to create polls in a few simple steps",
      "You can create different types of polls, including multiple-choice, yes/no, and open-ended questions",
      "Polls can be easily shared on social media, websites",
    ],
  },
  quiz: {
    id: "quiz",
    title: "Quiz",
    description: "Create educational tests, rigorous examinations, quizzes, or fun challenges with friends.",
    content: [
      "Providing a user-friendly interface for easy creation of quizzes, exams, or tests.",
      "Add questions, set answer choices, and customize the quiz to suit your needs.",
      "Create quizzes with multiple-choice questions, true/false questions, open-ended questions, and more.",
    ],
  },
  survey: {
    id: "survey",
    title: "Survey",
    description: "Conducting market research, gathering customer feedback, or collecting data for academic purposes.",
    content: [
      "Create quizzes with multiple-choice questions, true/false questions, open-ended questions, and more.",
      "Customize the design and branding of your surveys to match your organization's identity or personal preferences, creating a professional and cohesive look.",
      "Our website offers robust analytics and reporting tools, allowing you to gain valuable insights from survey responses and create visually engaging reports.",
    ],
  },
});

const currentFeature = computed(() => {
  return features[selectFeature.value];
});
</script>

<template>
  <section class="py-section-common">
    <h1 class="text-feature">
      Features
    </h1>
    <div class="main-container bg-blur -mt-6 lg:-mt-14 xl:-mt-24 py-10 xl:py-14">
      <div class="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16">
        <div class="flex-1">
          <!-- tabs -->
          <div class="qbutton-group w-full sm:w-fit">
            <button
              v-for="tab in features"
              :key="tab.id"
              class="flex-1 transition-all"
              :class="tab.id === selectFeature ? 'bg-main-blue-1 text-white' : 'text-main-blue-1'"
              @click="selectFeature = tab.id"
            >
              {{ tab.title }}
            </button>
          </div>
          <!-- content -->
          <template v-if="currentFeature">
            <h2 class="font-semibold text-2xl sm:text-3xl text-basic-12 py-6">
              {{ currentFeature.description }}
            </h2>
            <div class="flex flex-col space-y-4">
              <div v-for="(content, i) in currentFeature.content" :key="i" class="flex items-start space-x-3">
                <NuxtIcon name="check-blue" class="text-xl text-main-blue-1" />
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </template>
        </div>
        <div class="w-full md:w-3/5 lg:w-1/2 xl:w-2/5 mx-auto">
          <img v-if="currentFeature.id === 'poll'" src="~/assets/images/home/demo-poll.png" class="w-full h-auto object-cover">
          <img v-if="currentFeature.id === 'quiz'" src="~/assets/images/home/demo-quiz.png" class="w-full h-auto object-cover">
          <img v-if="currentFeature.id === 'survey'" src="~/assets/images/home/demo-survey.png" class="w-full h-auto object-cover">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-feature {
  @apply font-bold text-center text-main-blue-1 text-6xl sm:text-8xl md:text-9xl xl:text-[180px] 2xl:text-[240px] italic;
}

.bg-blur {
  background: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(6px);
}

.qbutton-group button {
  @apply min-w-fit sm:min-w-[130px]
}
</style>
