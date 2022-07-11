
async function createEmailFromCurrentDate(){
    const d = new Date();
    let time = d.getTime();
    return `chinh.nguyen${time}@test.test`
}
module.exports = {createEmailFromCurrentDate}