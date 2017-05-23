for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].addEventListener('click', function (event){
    event.preventDefault();
    var topic_name = this.attr('class');
    var topics = document.querySelectorAll('.topic');
    for (var j = 0; j < topics.length; j++) {
      topics[j].classList.remove('topic-active');
    }
    var topic_active = document.getElementById(topic_name);
    topic_active.classList.add('topic-active');
  });
}