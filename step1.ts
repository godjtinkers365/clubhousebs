import { ClubhouseClient } from 'clubhouse-client'

const pkgJSON = require("./package.json")


const exampleUserId = JSON.parse(pkgJSON).appvariables.exampleUserId
const examplePhoneNumber = JSON.parse(pkgJSON).appvariables.examplePhoneNumber
const exampleVerificationCode = JSON.parse(pkgJSON).appvariables.exampleVerificationCode



module.exports = async function step1(){
  const clubhouse = new ClubhouseClient()
  await clubhouse.completePhoneNumberAuth(
    examplePhoneNumber,
    exampleVerificationCode
  )

  // you should now be authenticated with a userId and authToken
  // you can alternatively auth directly via the ClubhouseClient constructor

  const me = await clubhouse.getMe()

  const profile = await clubhouse.getProfile(exampleUserId)

  // get a single page of users that our example user is following
  const following = await clubhouse.getFollowing(exampleUserId)

  // get a single page of users who are following our example user
  const followers = await clubhouse.getFollowers(exampleUserId)

  // get all of the users that our example user is following
  // (this will attempt to fetch all of the page results)
  const allFollowing = await clubhouse.getAllFollowing(exampleUserId)

  // get all of the users following our example user
  // (this will attempt to fetch all of the page results)
  const allFollowers = await clubhouse.getAllFollowers(exampleUserId)
}