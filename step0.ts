import { ClubhouseClient } from 'clubhouse-client'

const pkgJSON = require("./package.json")


// const exampleUserId = JSON.parse(pkgJSON).appvariables.exampleUserId
const examplePhoneNumber = JSON.parse(pkgJSON).appvariables.examplePhoneNumber
// const exampleVerificationCode = JSON.parse(pkgJSON).appvariables.exampleVerificationCode



module.exports = async function step0(){
    const clubhouse = new ClubhouseClient()
    await clubhouse.startPhoneNumberAuth(examplePhoneNumber)
}