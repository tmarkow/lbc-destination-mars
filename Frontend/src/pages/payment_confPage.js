import BaseClass from '../util/baseClass';
import DataStore from '../util/DataStore';

/**
 * Logic needed for the checkout page of the website.
 */
class Payment_ConfPage extends BaseClass {
    constructor() {
        super();
        this.bindClassMethods(['renderFlights'], this);
        this.dataStore = new DataStore();
    }

    /**
     * Once the page has loaded, set up the event handlers and fetch the flight list.
     */
    mount() {
        this.dataStore.addChangeListener(this.renderFlights);
        this.getUUID();
    }

    async getUUID() {
        console.log("entered")
        // https://www.educative.io/answers/how-to-create-a-random-uuid-in-javascript
        const uuid = crypto.randomUUID();

        let price = localStorage.getItem("price");
        this.dataStore.set("purchased", uuid);
        this.dataStore.set("price", price);
    }

    // Render Methods --------------------------------------------------------------------------------------------------
    renderFlights() {
        const purchased = this.dataStore.get("purchased");
        let purchaseHtml = "";
        if(purchased) {
            purchaseHtml += `
                <div class ="card">
                    <br/>
                    <div><b>Confirmation#:</b> ${purchased}</div>
                </div>`;
        }

        const price = this.dataStore.get("price");
                let priceHtml = "";
                if(price) {
                    priceHtml += `
                        <div class ="card2">
                            <br/>
                            <div><b>Total:</b> ${price}</div>
                        </div>`;
                }

        console.log(purchased);

        document.getElementById("results").innerHTML = purchaseHtml + priceHtml;
    }

}

/**
 * Main method to run when the page contents have loaded.
 */
const main = async () => {
    const payment_ConfPage = new Payment_ConfPage();
    payment_ConfPage.mount();
};

window.addEventListener('DOMContentLoaded', main);