const textMessage = document.getElementById('message');
const publish = document.getElementById('submit');


textMessage.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		publishPost();
	}
});

publish.addEventListener('click', publishPost);

function publishPost() {
	const uid = fb.getUID();
	fb.publishPost(uid, textMessage.value);
	textMessage.value = "";
}