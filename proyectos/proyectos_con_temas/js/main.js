$(document).ready(function(){
  // SLIDER
  if (window.location.href.indexOf("proyectojavascript2") > -1){

  $('.bxslider').bxSlider({
    auto: true,
    mode: 'fade',
    captions: false,
    slideWidth: 1200,
    pager: false,
    controls: false,
  });
  }

// posts
// esto es un arrays de json por eso la llaves
  if (window.location.href.indexOf("proyectojavascript2") > -1){
    var posts = [
    {
    title: "prueba de titulo 1",
    date: "Publicado el dia "+ moment().date() + " de "+ moment().format("MMMM ")+ "del "+ moment().format("YYYY"),
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
      title: "prueba de titulo 2",
      date: "Publicado el dia "+ moment().date() + " de "+ moment().format("MMMM ")+ "del "+ moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "prueba de titulo 3",
      date: "Publicado el dia "+ moment().date() + " de "+ moment().format("MMMM ")+ "del "+ moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
      title: "prueba de titulo 4",
      date: "Publicado el dia "+ moment().date() + " de "+ moment().format("MMMM ")+ "del "+ moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },

    {
      title: "prueba de titulo 5",
      date: "Publicado el dia "+ moment().date() + " de "+ moment().format("MMMM ")+ "del "+ moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    }

];
console.log(posts)
posts.forEach((item, index) => {
  var post = `
  <article class="post">
    <h2>${item.title}</h2>
    <span class="date">${item.date}</span>
    <p>
    ${item.content}

     </p>
     <a href="#" class="button-more">Leer mas</a>
  </article>
  `
  console.log(post)
  $("#posts").append(post)
  })
}
// selector de temas
var theme = $("#theme")
$("#to-green").click(function(){
  theme.attr("href", "css/green.css")
})

$("#to-blue").click(function(){
  theme.attr("href", "css/blue.css")
})

$("#to-red").click(function(){
  theme.attr("href", "css/red.css")
})
// scroll hacia arriba
$(".subir").click(function(e){
    e.preventDefault()
  $("html, body").animate({
    scrollTop: 0
  }, 600)
  return false
})

// login falso
$("#login form").submit(function(){
  var form_name = $("#form_name").val()

  localStorage.setItem("form_name", form_name)
})

var form_name = localStorage.getItem("form_name")

if (form_name != null && form_name !="undefined") {
  var about_parrafo = $("#about p")
  about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>")
  about_parrafo.append("<a href='#' id='logout'><br><br> Cerrar sesion</a> ")
  $("#login").hide()

  $("#logout").click(function(){
    localStorage.clear()
    location.reload()
  })
}
  // acordeon
if (window.location.href.indexOf("about") > -1){
  $("#acordeon").accordion();
}

if (window.location.href.indexOf("reloj") > -1){
  setInterval(function(){
    var reloj = moment().format("hh:mm:ss")
    $("#reloj").html(reloj)
},1000)

}

// validacion
if (window.location.href.indexOf("contact") > -1){

  $("form input[name='date']").datepicker({
    dateFormat:"dd/mm/yy"
  })

  $.validate({
      lang: "es",
      errorMessagePosition:"top",
      scrollToToPOnError:"true"
  });
}
});
