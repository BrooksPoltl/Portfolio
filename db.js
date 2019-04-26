localPBConnection = {
    host:'localhost',
    database:'database',
    user:'brooks',
    password: 'password'
}
const prodDbConnection = process.env.DATABASE_URL || localPBConnection
module.exports = {
    production:{
        client:'pg',
        connection: prodDbConnection
    }
}