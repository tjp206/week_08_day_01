use zoo;

db.animals.dropIndexes();

// db.animals.createIndex({type: "text", description: "text"});

// db.animals.find({$text: {$search: "Polar Bear"}}).pretty();

const id = ObjectId("5f8d918a2796e36c11929291");
db.animals.findOne({_id: id});

db.animals.deleteOne({_id: ObjectId("5f8d918a2796e36c11929291")});

// db.animals.updateOne(
//     {_id: id},
//     {$set: {name: "Pip"}}
// );