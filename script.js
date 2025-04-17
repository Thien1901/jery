const button = document.getElementById('actionButton');
const membersList = document.getElementById('membersList');

const members = [
    { name: 'Nguyễn Thanh Thiên', image: 'image/Thien.jpg' },
    { name: 'Nguyễn Văn Tổng', image: 'image/tong.jpg' },
    { name: 'Nguyễn Huỳnh Kỹ Thuật', image: 'kythuat.png' }
];

button.addEventListener('click', () => {
    membersList.innerHTML = '<ul>';
    members.forEach(member => {
        membersList.innerHTML += `
            <li>
                <img src="${member.image}" alt="Avatar" style="width:80px; height:80px; border-radius:50%; margin-right:10px;">
                ${member.name}
            </li>`;
    });
    membersList.innerHTML += '</ul>';
});