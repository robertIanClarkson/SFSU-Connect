var db = require('./db')

function getNItems(n) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT item.id, item.name AS itemName, item.price, item.image, user.name AS userName
              FROM item
              JOIN user ON item.user_id = user.id
              WHERE item.available = 1
              ORDER BY item.created DESC
              LIMIT ?`, [n])
      .then((rows) => {
        if(rows.length == 0) {
          reject(`(x) ERROR --> Database did not return any items`)
        }
        else {
          resolve(rows)
        }
      })
      .catch((err) => {
        reject(`(${err}) ERROR --> DB call failed`)
      })
  });
}
function getFItemsSearch(type,category,text) {
    console.log("sql got ",type," ",category," ",text)
    return new Promise((resolve, reject) => {
        let sqlCommand
        if(category==='All') {
            sqlCommand = `SELECT item.name AS itemName, item.price, item.image, user.name AS userName FROM item join user on item.user_id = user.id WHERE `
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
        console.log("type is ", type)

        switch (type) {
            case '1':
                sqlCommand += ` ORDER BY item.price ASC`
                break;
            case '2':
                sqlCommand += ` ORDER BY item.price DESC`
                break;
            case '3':
                sqlCommand += ` ORDER BY item.created ASC`
                break;
            case '4':
                sqlCommand += ` ORDER BY item.created DESC`
                break;
            default:
                console.log("got a value other than 1-4 for filter setting")
        }

        db.query(sqlCommand)
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
    getNItemsSearch,
    getFItemsSearch
}