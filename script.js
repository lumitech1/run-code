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

// Run code and render output in iframe
function runCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = `<style>${document.getElementById('css-code').value}</style>`;
    const jsCode = `<script>${document.getElementById('js-code').value}<\/script>`;
    const output = document.getElementById('output');
    output.contentDocument.body.innerHTML = htmlCode + cssCode + jsCode;
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
