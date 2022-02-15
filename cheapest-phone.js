const phones = [
    {name: 'samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'walton m32', price: 15000, camera: 8, storage: 8},
    {name: 'shaomi m3', price: 12000, camera: 10, storage: 16},
    {name: 'oppo a2', price: 17000, camera: 8, storage: 32},
    {name: 'nokia n95', price: 8000, camera: 8, storage: 4},
    {name: 'htc h81', price: 25000, camera: 8, storage: 16},
    {name: 'vivo y11', price: 12500, camera: 8, storage: 4},
    {name: 'infinix i3', price: 11000, camera: 8, storage: 16},
    {name: 'redmi pro', price: 20000, camera: 8, storage: 8},
]

let cheapest =phones[0];
for (const phone of phones){
    // compare price only
    if (phone.price < cheapest.price) {

        cheapest = phone;
    }
}
console.log(cheapest);
