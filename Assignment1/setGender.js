const genderRadios = document.querySelectorAll('input[name="gender"]');
const genderOthers = document.getElementById('gender_others');
const genderText = document.getElementById('gender_text');

genderRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (genderOthers.checked) genderText.style.display = 'flex';
        else genderText.style.display = 'none';
    });
});