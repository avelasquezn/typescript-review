import { v4 as uuidv4 } from 'uuid';

/**
 * SalesOrderItem class
 * @description
 * Represents a sales order item
 */
export class SalesOrderItem {
    private readonly _orderId: string;
    private readonly _itemId: string;
    private readonly _productId: string;
    private readonly _quantity: number;
    private readonly _unitPrice: number;

    /**
     * Constructor
     * @param orderId - The order id
     * @param productId - The product id
     * @param quantity - The quantity
     * @param unitPrice - The unit price
     */
    constructor(orderId: string, productId: string, quantity: number, unitPrice: number) {
        this._itemId = uuidv4();
        this._orderId = orderId;
        this._productId = productId;
        this._quantity = quantity;
        this._unitPrice = unitPrice;
    }

    /**
     * Calculate the item price
     * @returns The item price
     */
    calculateItemPrice = (): number => this._quantity * this._unitPrice;

    get productId(): string {
        return this._productId;
    }

    get quantity(): number {
        return this._quantity;
    }

    get unitPrice(): number {
        return this._unitPrice;
    }

}