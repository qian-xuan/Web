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
        const warning = document.getElementById(element.id+"Warning");
        if (element.value.trim() === '') {
            element.style.borderColor = '#C9382E';
            warning.hidden = false;
            warning.title = '此项不能为空';
        } else {
            element.style.borderColor = '#F1F2F5';
            warning.hidden = true;
        }
    });

    // 提交表单
    // console.log('提交表单');
    form.submit();
});