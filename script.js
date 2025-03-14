// Hiệu ứng thông báo chi tiết khi click vào thành viên
function showMemberDetail(memberId) {
    let memberDetails = {
        member1: {
            name: "Thành viên 1",
            role: "Trưởng nhóm - Quản lý dự án",
            description: "Chịu trách nhiệm chính về điều phối công việc và lên kế hoạch dự án."
        },
        member2: {
            name: "Thành viên 2",
            role: "Lập trình viên Frontend",
            description: "Thiết kế giao diện đẹp và tối ưu hóa trải nghiệm người dùng."
        }
        // Thêm chi tiết các thành viên khác ở đây
    };

    if (memberDetails[memberId]) {
        alert(
            `Tên: ${memberDetails[memberId].name}\n` +
            `Vai trò: ${memberDetails[memberId].role}\n` +
            `Mô tả: ${memberDetails[memberId].description}`
        );
    } else {
        alert("Thông tin thành viên đang được cập nhật.");
    }
}
