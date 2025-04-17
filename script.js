// Lấy phần tử nút và phần tử hiển thị tên
const button = document.getElementById('actionButton');
const membersList = document.getElementById('membersList');

// Mảng chứa tên các thành viên
const members = ['Nguyễn Thanh Thiên', 'Nguyễn Văn Tổng', 'Nguyễn Huỳnh Kỹ Thuật'];

// Thêm sự kiện click vào nút
button.addEventListener('click', () => {
    // Tạo một danh sách HTML để hiển thị tên thành viên
    membersList.innerHTML = '<ul>';
    members.forEach(member => {
        membersList.innerHTML += `<li>${member}</li>`;
    });
    membersList.innerHTML += '</ul>';
});