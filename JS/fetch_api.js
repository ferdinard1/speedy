async function fetchSupplyData() {
    try {
        const circulatingSupplyResponse = await fetch('https://cors-anywhere.herokuapp.com/https://ats.alltoscan.com/api/?circulatingSupply=1&rawInteger=1');
        const totalSupplyResponse = await fetch('https://cors-anywhere.herokuapp.com/https://ats.alltoscan.com/api/index.php?totalSupply=1&rawInteger=1');
        const maxSupplyResponse = await fetch('https://cors-anywhere.herokuapp.com/https://ats.alltoscan.com/api/?maxSupply=1&rawInteger=1');

        const circulatingSupply = await circulatingSupplyResponse.json();
        const totalSupply = await totalSupplyResponse.json();
        const maxSupply = await maxSupplyResponse.json();

        // Update the UI with the fetched data
        displaySupplyData(circulatingSupply, totalSupply, maxSupply);
    } catch (error) {
        console.error('Error fetching supply data:', error);
    }
}
function displaySupplyData(circulating, total, max) {
    document.getElementById('circulatingSupply').textContent = `Circulating Supply: ${circulating.data}`;
    document.getElementById('totalSupply').textContent = `Total Supply: ${total.data}`;
    document.getElementById('maxSupply').textContent = `Max Supply: ${max.data}`;
}

// Call the function to fetch and display data
fetchSupplyData();