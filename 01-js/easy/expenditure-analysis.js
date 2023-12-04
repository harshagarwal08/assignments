/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryWiseList = [];
  transactions?.forEach((transaction) => {
    const categoryIndex = categoryWiseList.findIndex(
      (item) => item.category === transaction.category
    );
    if (categoryIndex === -1) {
      categoryWiseList.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    } else {
      categoryWiseList[categoryIndex].totalSpent += transaction.price;
    }
  });

  return categoryWiseList;
}

module.exports = calculateTotalSpentByCategory;
