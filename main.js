document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Creainess.zip';
    link.download = 'Creainess.zip'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById('downloadpdf').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'guia_creainess.pdf';
    link.download = 'guia_creainess.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});