<template>
  <div>aaa</div>
</template>
<!-- <script setup lang="ts">
onMounted(() => {
  const words = document.getElementsByClassName("word");
  const wordArray = [];
  let currentWord = 0;

  words[currentWord].style.opacity = 1;
  for (let i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }

  function changeWord() {
    const cw = wordArray[currentWord];
    const nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (let i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for (let i = 0; i < nw.length; i++) {
      nw[i].className = "letter behind";
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
  }

  function animateLetterOut(cw, i) {
    setTimeout(() => {
      cw[i].className = "letter out";
    }, i * 80);
  }

  function animateLetterIn(nw, i) {
    setTimeout(() => {
      nw[i].className = "letter in";
    }, 340 + (i * 80));
  }

  function splitLetters(word) {
    const content = word.innerHTML;
    word.innerHTML = "";
    const letters = [];
    for (let i = 0; i < content.length; i++) {
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.innerHTML = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }

    wordArray.push(letters);
  }

  changeWord();
  setInterval(changeWord, 4000);
});
</script>

<template>
  <p class="rotating-text-container border-basic-1">
    <span class="word quiz">Quiz</span>
    <span class="word poll">Poll</span>
    <span class="word survey">Survey</span>
    <span class="word quiz">Exam</span>
  </p>
</template>

<style scoped>
.rotating-text-container {
  display: inline-block;
  vertical-align: top;
}

.word {
  position: absolute;
  opacity: 0;
}

.letter {
  display: inline-block;
  position: relative;
  transform: translateZ(25px);
  transform-origin: 50% 50% 25px;
}

.letter.out {
  transform: rotateX(90deg);
  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
  transform: rotateX(-90deg);
}

.letter.in {
  transform: rotateX(0deg);
  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style> -->
