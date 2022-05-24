module.exports = function (pool) {
    return {
        getUserId: async (id, name) => {
            let [rows, fields] = await pool.query(`update user set Firstname = '${name}' where id = '${id}'`);
            return rows ? rows : {};
        },
        getStudentId: async (id) => {
            let [rows, fields] = await pool.query(`SELECT * FROM students WHERE id = '${id}' `);
            return rows[0] ? rows[0] : {};
        }
    }
 }
