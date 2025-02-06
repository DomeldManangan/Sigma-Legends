document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach(member => {
        member.addEventListener("click", function () {
            const githubUrl = this.dataset.github;
            if (githubUrl) {
                window.open(githubUrl, "_blank");
            }
        });
    });
});
