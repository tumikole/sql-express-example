// const client = require('pg/lib/native/client');
const {getClient } = require('../db')


const getNames = async () => {
    const client = await getClient()
    let statement = 'SELECT * from names';
    try{
        const res = await client.query(statement);
        return res.rows
    }catch(e){
        console.log(e)
        await client.release()
    } 
}

const getSingleName = async (userId) => {
    const client = await getClient()
    let statement = 'SELECT * from names where user_id = $1';
    let parameters = [userId]
    try{
        const res = await client.query(statement , parameters);
        return res.rows
    }catch(e){
        console.log(e)
        await client.release()
    } 
}


module.exports = {getNames , getSingleName}
