function generateResume() {
    var _a;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    var profilePicture = (_a = document.getElementById("profile-picture").files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureUrl = "";
    if (profilePicture) {
        profilePictureUrl = URL.createObjectURL(profilePicture);
    }
    var resumePreview = document.getElementById("resume-preview");
    if (resumePreview) {
        resumePreview.innerHTML = "\n            ".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\">") : "", "\n            <h3>").concat(name, "</h3>\n<p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n        ");
    }
}
generateResume();
