var db=require('../dbconnection'); //reference connection database

var Box={

  getAllBoxes:function(callback){
    return db.query("Select * from boxes", callback);
  },
  getBoxById:function(id, callback){
    return db.query("Select * from boxes where id=?", [id], callback);
  },
  addBox:function(Box, callback){
    //console.log("inside service");
    console.log(Box.Id);
    return db.query("Insert into boxes values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [Box.id,
      Box.name,
      Box.mac,
      Box.model,
      Box.version,
      Box.Serial,
      Box.type,
      Box.manuf,
      Box.coordN,
      Box.coordW,
      Box.clientName,
      Box.address,
      Box.code,
      Box.locality,
      Box.phone,
      Box.yearinstall,
      Box.accept,
      Box.port,
      Box.create_at,
      Box.update_at,
      Box.delete_at],callback);
  },
  deleteBox:function(id, callback){
    return db.query("delete from boxes where id=?", [id], callback);
  },
  updateBox:function(id, Box, callback) {
    return db.query("update boxes set name=?, mac=? where id=?", [Box.Boxname, Box.Mac,id],callback);
  },
  deleteAll:function(item,callback){
    var delallboxes=[];
    for(i=0;i<item.length;i++){
       delallboxes[i]=item[i].Id;
   }
   return db.query("delete from boxes where id in (?)",[delallboxes],callback);
 }
};
module.exports=Box;
