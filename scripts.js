//////////////////////prueba tex 
/* const wordWrapper = document.getElementById('word');
if (!wordWrapper) {
    console.error('El elemento con ID "word" no existe en el DOM.');
} else {
    // Tu código actual aquí
    var words = ['','SanchezDv'],
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }
///ASINCRONISMO
}, 300);
}
 */


document.querySelectorAll('.video-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const videoId = wrapper.dataset.id;
    const iframe = document.createElement('iframe');

    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

    // Forzamos el tamaño por JS también si fuera necesario
    iframe.style.width = "100%";
    iframe.style.height = "100%";

    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);
  });
});