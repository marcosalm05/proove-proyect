const btn_maps = document.querySelector ("ov-btn-slide-left");
const caja_div = document.createElement ('div');
/*Para poder crear un elemento dentro del body*/
const body = document.querySelector ('body');
const mapa_iframe = document.createElement('iframe');
/*Event en funsion de algo*/ 
function Caja_mapas(){

ov_btn_slide_left.addEventListener ('click', (e) => {
body.appendChild (caja_div);
      caja_div.className = 'caja_div';
 caja_div.appendChild = (iframe);
      mapa_iframe.className = 'iframe';
})
}
/*<iframe class="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28806.470923833218!2d-54.64254896850517!3d-25.511420260041575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68559438e2c1b%3A0x71cd92672abd8f42!2sFarmacia%20Virgen%20Del%20Lujan!5e0!3m2!1sen!2spy!4v1641592377782!5m2!1sen!2spy" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */
