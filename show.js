function openTopic(evt, topicName) {
    var i, topic, topic_link;
    topic = document.getElementsByClassName("topic");
    for (i = 0; i < topic.length; i++) {
        topic[i].style.display = "none";
    }
    topic_link = document.getElementsByClassName("topic_link");
    for (i = 0; i < topic_link.length; i++) {
        topic_link[i].className = topic_link[i].className.replace(" active", "");
    }
    document.getElementById(topicName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();