const router = require('express').Router()
const TestSubmission = require('../Models/TestSubmission')
// const Question = require('../Models/Question')

router.post('/submit-Test', async (req, res) => {
    try {
        const { userId, score } = req.body
        const checkUser = await TestSubmission.findOne({userId:req.body.userId})
        console.log("checkUser",checkUser)
        if(checkUser){
            const test = await TestSubmission.updateOne({userId},{$set:{score:req.body.score}},{new:true})
            console.log("first test",test)
        }
        const test = await TestSubmission.create({ userId, score })
        return res.status(200).json({ message: "Test Submitted", test })
    } catch (err) {
        console.log("test submit err: ",err.message)
        return res.status(500).json({ message: err.message })
    }
})

router.get('/get-score/:scoreId', async (req, res) => {
    console.log("backend scoreid",req.params.scoreId)
    try {
        const GetScore = await TestSubmission.findOne({userId: req.params.scoreId})
        console.log("GetScore",GetScore)
        return res.status(200).json({message: "score printed", userId: GetScore.userId, scoreId: GetScore.id, score: GetScore.score});
    } catch (err) {

        return res.status(500).json(err.message)

    }
});


module.exports = router