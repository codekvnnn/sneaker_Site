document.addEventListener('DOMContentLoaded', () => {
    const sneakerData = [
        { name: 'Air Max 90', brand: 'Nike', price: 120 },
        { name: 'Yeezy Boost 350', brand: 'Adidas', price: 220 },
        { name: 'Classic', brand: 'Reebok', price: 75 },
        // Add more sneakers as needed
    ];

    const sneakerGrid = document.getElementById('sneakerGrid');

    sneakerData.forEach(sneaker => {
        sneakerGrid.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card sneaker-card">
                    <div class="card-body">
                        <h5 class="card-title">${sneaker.name}</h5>
                        <p class="card-text">${sneaker.brand}</p>
                        <p class="card-text">$${sneaker.price}</p>
                    </div>
                </div>
            </div>
        `;
    });
});
