const order = {};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

const newOrder = order.customer?.address?.city;
console.log(newOrder);