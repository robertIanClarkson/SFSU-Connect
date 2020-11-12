var db = require('./db')

function getNItems(n) {
    return new Promise((resolve, reject) => {
        db.query(`SELECT item.name AS itemName, item.price, item.image, user.name AS userName
              FROM item
              JOIN user ON item.user_id = user.id
              ORDER BY item.created DESC
              LIMIT ?`, [n])
            .then((rows) => {
                if (rows.length == 0) {
                    reject(`(x) ERROR --> Database did not return any items`)
                } else {
                    resolve(rows)
                }
            })
            .catch((err) => {
                reject(`(${err}) ERROR --> DB call failed`)
            })
    });
}
function getNItemsSearch(n,category,text) {
    return new Promise((resolve, reject) => {
        let sqlCommand
        if(category=='All') {
            sqlCommand = `SELECT item.name AS itemName, item.price, item.image, user.name AS userName 
                            FROM item 
                            join user on item.user_id = user.id
                            WHERE `
        }
        else {
            sqlCommand = `SELECT item.name AS itemName, item.price, item.image, user.name AS userName 
                            FROM item 
                            join user on item.user_id = user.id
                            WHERE category_name = '${category}'
                            AND `

        }
        let wordsArray = text.split(' ') // break search string into words
        sqlCommand += `( item.name LIKE '%${wordsArray[0]}%' OR item.description LIKE '%${wordsArray[0]}%' )`
        if (wordsArray.length > 1)
            for (let x = 1; x < wordsArray.length; x++) {
                // append to SQL command
                sqlCommand += ` AND ( item.name LIKE '%${wordsArray[x]}%' OR item.description LIKE '%${wordsArray[x]}%' )`
            }
        sqlCommand += `ORDER BY item.created DESC LIMIT ?`
        db.query(sqlCommand,[n])
            .then((rows) => {
                // console.log(`(+) pulled from db --> ${JSON.stringify(rows)}`)
                console.log(`(+) pulled from db --> ${rows.length} records`)
                resolve(rows)
            })
            .catch((err) => {
                console.log(`(x) Failed to pull from db --> ${err}`)
                reject(err)
            })
    });
}

module.exports = {
    getNItems,
    getNItemsSearch
}