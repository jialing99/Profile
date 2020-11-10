const profileUID = location.search.split('=')[1];
fb.getUserProfile(profileUID);

const prof_Username = js.getEl("profile-name");
const prof_Bio = js.getEl("profile-bio");
const prof_button = js.getEl("update-button");

function displayProfile(userName, userInfo){
	prof_username.value = userName;
	if(userInfo.bio){
		prof_Bio.value = userInfo.bio;
	}
}
prof_button.onclick = function(){
	fb.updateProfile(profileUID, 'displayName',  prof_Username.value);
	fb.updateProfile(profileUID, 'bio',  prof_Bio.value);
}