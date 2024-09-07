function generateResume() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const profilePicture = (document.getElementById("profile-picture") as HTMLInputElement).files?.[0];

    let profilePictureUrl = "";
    if (profilePicture) {
        profilePictureUrl = URL.createObjectURL(profilePicture);
    }

    const resumePreview = document.getElementById("resume-preview");
    if (resumePreview) {
        resumePreview.innerHTML = `
            ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture">` : ""}
            <h3>${name}</h3>
<p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Education:</strong> ${education}</p>
        `;
    }
}

generateResume()