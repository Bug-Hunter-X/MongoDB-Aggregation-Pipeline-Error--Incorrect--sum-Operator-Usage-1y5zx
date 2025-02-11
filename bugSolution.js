```javascript
// Correct aggregation pipeline
db.collection.aggregate([
  {$match: { /* some query */ }},
  {$group: {_id: "$field", sum: {$sum: "$value"}}}, //Corrected
  {$sort: {sum: -1}}
])
```