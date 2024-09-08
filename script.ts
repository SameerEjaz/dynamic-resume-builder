// Get form and resume elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeSection = document.getElementById('resumeSection') as HTMLElement;

const nameField = document.getElementById('name') as HTMLElement;
const contactField = document.getElementById('contact') as HTMLElement;
const educationField = document.getElementById('education') as HTMLElement;
const skillsSection = document.getElementById('skillsSection') as HTMLElement;
const experienceField = document.getElementById('experience') as HTMLElement;

// Form submit event listener
resumeForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form from refreshing the page

    // Get form values
    const inputName = (document.getElementById('inputName') as HTMLInputElement).value;
    const inputEmail = (document.getElementById('inputEmail') as HTMLInputElement).value;
    const inputPhone = (document.getElementById('inputPhone') as HTMLInputElement).value;
    const inputEducation = (document.getElementById('inputEducation') as HTMLInputElement).value;
    const inputSkills = (document.getElementById('inputSkills') as HTMLInputElement).value.split(',');
    const inputExperience = (document.getElementById('inputExperience') as HTMLInputElement).value;

    // Set resume fields
    nameField.textContent = inputName;
    contactField.textContent = `Email: ${inputEmail} | Phone: ${inputPhone}`;
    educationField.textContent = inputEducation;
    experienceField.textContent = inputExperience;

    // Clear and add new skills to the skills section
    skillsSection.innerHTML = '';  // Clear previous skills
    inputSkills.forEach(skill => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = skill.trim();
        skillsSection.appendChild(li);
    });

    // Show resume section
    resumeSection.classList.remove('d-none');
});
