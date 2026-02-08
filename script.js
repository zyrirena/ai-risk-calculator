function calculateTotalRisk() {
    // Collect Inputs
    const bL = parseFloat(document.getElementById('biasLikelihood').value) || 0;
    const bI = parseFloat(document.getElementById('biasImpact').value) || 0;
    const sL = parseFloat(document.getElementById('secLikelihood').value) || 0;
    const sI = parseFloat(document.getElementById('secImpact').value) || 0;
    const tL = parseFloat(document.getElementById('transLikelihood').value) || 0;
    const tI = parseFloat(document.getElementById('transImpact').value) || 0;

    // Formula: (Likelihood * Impact) averaged across categories
    const totalScore = ((bL * bI) + (sL * sI) + (tL * tI)) / 3;
    const finalScore = totalScore.toFixed(1);

    const scoreDisplay = document.getElementById('scoreText');
    const ratingDisplay = document.getElementById('ratingText');
    const box = document.querySelector('.result-box');

    scoreDisplay.innerText = `Risk Score: ${finalScore}`;

    // Status Logic
    if (finalScore >= 60) {
        ratingDisplay.innerText = "CRITICAL: High risk. Mitigations mandatory before use.";
        box.style.borderLeftColor = "#ef4444"; // Red
    } else if (finalScore >= 30) {
        ratingDisplay.innerText = "MODERATE: Review guardrails and security layers.";
        box.style.borderLeftColor = "#f59e0b"; // Orange
    } else {
        ratingDisplay.innerText = "LOW: Acceptable risk level for standard development.";
        box.style.borderLeftColor = "#10b981"; // Green
    }
}

function exportToPDF() {
    const element = document.getElementById('capture-area');
    const model = document.getElementById('modelName').value || "Unnamed-AI";
    
    // Hide buttons temporarily so they don't appear in the PDF
    const buttons = document.querySelector('.button-group');
    buttons.style.display = 'none';

    const opt = {
        margin:       10,
        filename:     `AI_Risk_Report_${model}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, backgroundColor: '#0f172a' },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate PDF then show buttons again
    html2pdf().set(opt).from(element).save().then(() => {
        buttons.style.display = 'flex';
    });
}