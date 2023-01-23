export interface LastDeliveryItem {
  deliveryId: number;
  dateDDMMYY: string;
  timeHHMM: string;
  totalPrice: number;
}

export interface DeliveresGroupByDate {
  date: string;
  deliveries: LastDeliveryItem[];
}
