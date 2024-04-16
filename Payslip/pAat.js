let currentStep = 1;
const maxStep = 3;

function showStep(step) {
    document.querySelectorAll('.form-step').forEach((element) => {
        element.style.display = 'none';
    });
    document.querySelector('#step-' + step).style.display = 'block';
}

function nextStep() {
    if (currentStep < maxStep) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep); // Show the first step initially
});
