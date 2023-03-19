const hindiText = document.getElementById('addHindiText');
const learnMore = document.getElementById('learnmore');
const lineTwo = document.getElementById('line');

learnMore.addEventListener('click', () => {
    learnMore.classList.add('hidden');
    hindiText.innerHTML = 'Google reCAPTCHA से इकट्ठा की गई जानकारी Google की <span class="text-indigo-700">  प्रायवेसी पॉलिसी </span> औरd <span class="text-indigo-700">सेवा की शर्तों</span> के अधीन है. इसे reCAPTCHA सेवा देने, उसे बनाए रखने और सुधारने के लिए और सामान्य सुरक्षा उद्देश्य के लिए इस्तेमाल किया जाता है (Google इसका इस्तेमाल करके पर्सनलाईज़ किए गए विज्ञापन नहीं दिखाता).';
    lineTwo.classList.add('-mt-2');
})