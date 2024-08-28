import {Customer} from "./crm/domain/model/customer";
import {SalesOrder} from "./sales/domain/model/sales-order";

console.log("Hello TypeScript Developer");

let customer = new Customer("John Doe");

let salesOrder = new SalesOrder(customer.id);

salesOrder.addItem("P001", 2, 100);
salesOrder.addItem("P002", 20, 50);

customer.lastOrderPrice = salesOrder.calculateTotalPrice();

console.log(`Customer named ${customer.name} and identified by ID ${customer.id} has just completed and order for a total of ${customer.lastOrderPrice}`);
