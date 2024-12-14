document.addEventListener('DOMContentLoaded', () => {
    const studentList = document.getElementById('studentList');
    const editStudentModal = new bootstrap.Modal(document.getElementById('editStudentModal'));
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmActionBtn = document.getElementById('confirmActionBtn');
    const editStudentForm = document.getElementById('editStudentForm');
    let currentEditingCard = null;
    let currentAction = null;

    studentList.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('edit-btn')) {
            const card = target.closest('.card');
            currentEditingCard = card;

            const name = card.querySelector('.card-title').textContent;
            const id = target.getAttribute('data-id');
            const age = card.querySelector('.card-text:nth-child(3)').textContent.replace('Age: ', '');
            const grade = card.querySelector('.card-text:nth-child(4)').textContent.replace('Grade: ', '');

            document.getElementById('editStudentId').value = id;
            document.getElementById('editStudentName').value = name;
            document.getElementById('editStudentAge').value = age;
            document.getElementById('editStudentGrade').value = grade;

            confirmationMessage.textContent = 'Do you want to edit this student?';
            currentAction = 'edit';
            confirmationModal.show();
        }

        if (target.classList.contains('delete-btn')) {
            currentEditingCard = target.closest('.col-md-4');
            confirmationMessage.textContent = 'Are you sure you want to delete this student?';
            currentAction = 'delete';
            confirmationModal.show();
        }
    });

    confirmActionBtn.addEventListener('click', () => {
        if (currentAction === 'edit') {
            editStudentModal.show();
        } else if (currentAction === 'delete' && currentEditingCard) {
            currentEditingCard.remove();
        }
        confirmationModal.hide();
    });

    editStudentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (currentEditingCard) {
            const name = document.getElementById('editStudentName').value;
            const age = document.getElementById('editStudentAge').value;
            const grade = document.getElementById('editStudentGrade').value;

            currentEditingCard.querySelector('.card-title').textContent = name;
            currentEditingCard.querySelector('.card-text:nth-child(3)').textContent = `Age: ${age}`;
            currentEditingCard.querySelector('.card-text:nth-child(4)').textContent = `Grade: ${grade}`;

            editStudentModal.hide();
        }
    });
});