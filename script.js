// Get form and resume elements
var resumeForm = document.getElementById('resumeForm');
var resumeSection = document.getElementById('resumeSection');
var nameField = document.getElementById('name');
var contactField = document.getElementById('contact');
var educationField = document.getElementById('education');
var skillsSection = document.getElementById('skillsSection');
var experienceField = document.getElementById('experience');
// Form submit event listener
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    // Get form values
    var inputName = document.getElementById('inputName').value;
    var inputEmail = document.getElementById('inputEmail').value;
    var inputPhone = document.getElementById('inputPhone').value;
    var inputEducation = document.getElementById('inputEducation').value;
    var inputSkills = document.getElementById('inputSkills').value.split(',');
    var inputExperience = document.getElementById('inputExperience').value;
    // Set resume fields
    nameField.textContent = inputName;
    contactField.textContent = "Email: ".concat(inputEmail, " | Phone: ").concat(inputPhone);
    educationField.textContent = inputEducation;
    experienceField.textContent = inputExperience;
    // Clear and add new skills to the skills section
    skillsSection.innerHTML = ''; // Clear previous skills
    inputSkills.forEach(function (skill) {
        var li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = skill.trim();
        skillsSection.appendChild(li);
    });
    // Show resume section
    resumeSection.classList.remove('d-none');
});
