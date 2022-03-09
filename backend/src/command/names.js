const { getClient } = require("../db");

const saveName = async name => {
  
  const client = await getClient();
//   const now =  now()
  let insertQuery = `INSERT INTO names (name , created_on) values ($1 , $2) RETURNING user_id`;
  let parameters = [name , new Date()];

  try {
    res = await client.query(insertQuery, parameters);
    let user_id = res.rows[0].user_id;
    await client.release();
    return user_id;  
  } catch (e) {
    console.log(e);
    await client.release();
  }
};

module.exports = {
  saveName
};