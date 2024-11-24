// Handle tab switching
const tabs = document.querySelectorAll('.tab-btn');
const codeAreas = document.querySelectorAll('.code-area');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        codeAreas.forEach(area => area.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Cập nhật hàm runCode để hỗ trợ JSON
function runCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = `<style>${document.getElementById('css-code').value}</style>`;
    const jsCode = `<script>${document.getElementById('js-code').value}<\/script>`;
    const jsonCode = document.getElementById('json-code').value;

    const output = document.getElementById('output');

    try {
        // Kiểm tra và định dạng JSON
        const formattedJSON = JSON.stringify(JSON.parse(jsonCode), null, 2);
        const jsonOutput = `<pre>${formattedJSON}</pre>`;
        output.contentDocument.body.innerHTML = htmlCode + cssCode + jsCode + jsonOutput;
    } catch (error) {
        // Thông báo lỗi JSON không hợp lệ
        alert('Invalid JSON. Please check your input.');
    }
}


// Clear all code input areas
function clearCode() {
    document.getElementById('html-code').value = '';
    document.getElementById('css-code').value = '';
    document.getElementById('js-code').value = '';
}

// Reset iframe output
function resetOutput() {
    const output = document.getElementById('output');
    output.contentDocument.body.innerHTML = '';
}

// Nút Sidebar
const sidebarButtons = document.querySelectorAll('.sidebar button');

sidebarButtons[0].addEventListener('click', toggleSidebar); // Menu
sidebarButtons[1].addEventListener('click', saveCode); // Lưu
sidebarButtons[2].addEventListener('click', showSettings); // Cài đặt

// 1. Toggle sidebar visibility
function toggleSidebar() {
    const sidebarContent = document.querySelector('.sidebar-content');
    sidebarContent.classList.toggle('hidden'); // Chỉ ẩn phần nội dung của sidebar
}

// 2. Save code to a file
function saveCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
    const jsonCode = document.getElementById('json-code')?.value || '';

    const fileContent = `
        <!-- HTML -->
        ${htmlCode}
        <style>${cssCode}</style>
        <script>${jsCode}</script>
        <pre>${jsonCode}</pre>
    `;

    const blob = new Blob([fileContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'code_output.html';
    link.click();
}

// 3. Show settings (Placeholder functionality)
function showSettings() {
    alert('Cài đặt hiện chưa được hỗ trợ. Vui lòng chờ bản cập nhật tiếp theo!');
}
