"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    const client = {
        name: 'Lilla',
        age: 26,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa',
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'KS2 USA',
        }
    };
})();
//# sourceMappingURL=main.js.map