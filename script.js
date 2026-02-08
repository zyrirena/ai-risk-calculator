function calculateTotalRisk() {
    const bL = parseFloat(document.getElementById('biasLikelihood').value) || 0;
    const bI = parseFloat(document.getElementById('biasImpact').value) || 0;
    const sL = parseFloat(document.getElementById('secLikelihood').value) || 0;
    const sI = parseFloat(document.getElementById('secImpact').value) || 0;
    const tL = parseFloat(document.getElementById('transLikelihood').value) || 0;
    const tI = parseFloat(document.getElementById('transImpact').value) || 0;

    const scores = {
        "Bias & Fairness": bL * bI,
        "Security & Privacy": sL * sI,
        "Transparency": tL * tI
    };

    const avgRisk = (scores["Bias & Fairness"] + scores["Security & Privacy"] + scores["Transparency"]) / 3;
    const finalScore = avgRisk.toFixed(1);

    document.getElementById('scoreText').innerText = `Risk Score: ${finalScore}`;
    const ratingDisplay = document.getElementById('ratingText');
    const box = document.querySelector('.result-box');
    const mitigationBox = document.getElementById('mitigationDisplay');

    if (finalScore >= 16) {
        ratingDisplay.innerText = "CRITICAL: High risk detected.";
        box.style.borderLeftColor = "#ef4444";
    } else if (finalScore >= 8) {
        ratingDisplay.innerText = "MODERATE: Monitoring required.";
        box.style.borderLeftColor = "#f59e0b";
    } else {
        ratingDisplay.innerText = "LOW: Safe to proceed.";
        box.style.borderLeftColor = "#10b981";
    }

    let highestCat = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    if (avgRisk > 0) {
        mitigationBox.style.display = "block";
        document.getElementById('strategyList').innerHTML = getStrategies(highestCat);
    }
}

function getStrategies(cat) {
    const strategies = {
        "Bias & Fairness": ["Disparate impact analysis.", "HITL review.", "Fairness testing."],
        "Security & Privacy": ["Red Teaming.", "Data anonymization.", "API Rate-limiting."],
        "Transparency": ["Model Cards.", "SHAP/LIME tools.", "Content labeling."]
    };
    return strategies[cat].map(s => `<li>${s}</li>`).join('');
}

function exportToPDF() {
    const element = document.getElementById('capture-area');
    const model = document.getElementById('modelName').value || "AI-System";
    const btns = document.querySelector('.button-group');
    btns.style.display = 'none';

    html2pdf().set({
        margin: 10,
        filename: `Risk_Report_${model}.pdf`,
        html2canvas: { scale: 2, backgroundColor: '#0f172a' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).from(element).save().then(() => { btns.style.display = 'flex'; });
}