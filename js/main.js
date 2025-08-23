document.addEventListener('DOMContentLoaded', function() {
    const deploymentInfo = document.getElementById('deployment-info');
    const deploymentTime = new Date().toLocaleString();
    
    deploymentInfo.innerHTML = `
        <strong>Deployment Information:</strong><br>
        Last updated: ${deploymentTime}<br>
        Environment: ${window.location.hostname.includes('github.io') ? 'GitHub Pages' : 'EC2 Instance'}<br>
        Status: ✅ Successfully deployed via CI/CD pipeline
    `;
});
