```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* some query */ }},
  {$group: {_id: "$field", sum: {$sum: "$value"}}}, //Error here
  {$sort: {sum: -1}}
])
```