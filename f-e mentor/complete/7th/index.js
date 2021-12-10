

var team_member = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.", maximum_upadte_size = "No more than 2GB. All files in your account must fit your allotted storage space.", reset_password = "Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.", cancel_sub = "Yes! Send us a message and we’ll process your request no questions asked.", provide_support = "Chat and email support is available 24/7. Phone lines are open during normal business hours.";

// var btn_1 = document.getElementsByClassName("team-member");
document.getElementByClassName("team-member").addEventListener('click', alert("Clicked"));

function showContent(content, button = btn_1) {
    let t = document.createTextNode(content),
        t2 = document.createElement('p');
    t2.appendChild(t);
    button.parentNode.appendChild(t2);
}