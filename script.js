document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // 阻止表单默认提交行为

            const formData = new FormData(form);
            console.log("Form data submitted:", Object.fromEntries(formData.entries()));
            // 实际项目中应将数据发送到服务器
        });
    });
});
