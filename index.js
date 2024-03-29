function speak() {
    let voiceInput = document.getElementById("voice").value;
    
    let text = new SpeechSynthesisUtterance(voiceInput);
    text.voice = speechSynthesis.getVoices()[0];
    speechSynthesis.speak(text);

}