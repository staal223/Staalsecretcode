// Example data - replace this with your actual data fetching method
const reportData = [
    // Populate with real data
];

window.onload = function() {
    populateTable(reportData);
};

function populateTable(data) {
    const tableBody = document.getElementById('nutri-report-table').getElementsByTagName('tbody')[0];
    data.forEach(rowData => {
        let row = tableBody.insertRow();
        Object.values(rowData).forEach(text => {
            let cell = row.insertCell();
            cell.textContent = text;
        });
    });
}
