const form = document.getElementById('registerForm');
const elements = [
    document.getElementById('firstname'),
    document.getElementById('lastname'),
    document.getElementById('phoneOrEmail'),
    document.getElementById('password')
];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // debugger;
    // 验证逻辑
    elements.forEach(element => {
        if (element.value === '') {
            element.style.borderColor = '#C9382E';
            const warning = document.getElementById(element.id+"Warning");
            warning.hidden = false;
            warning.title = '此项不能为空';
        } else {
            element.style.borderColor = '#F1F2F5';
            const warning = document.getElementById(element.id+"Warning");
            warning.hidden = true;
        }
    });

    // 提交表单
    console.log('表单验证通过，提交表单');
    form.submit();
});