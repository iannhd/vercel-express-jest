
const {auth} = require('../services/firebase')
const {signInWithEmailAndPassword} = require('firebase/auth')
const { createUserWithEmailAndPassword } = require("firebase/auth")
class TestingController {
    static testingGet(req,res) {
        res.send('Hello Wulink')
        res.status(200)
    }
    static async testingLoginFirebaseAuth(req, res){
        const {email, password} = req.body
        console.log(email, password, "===> ini email dan password")
        try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response, "===> ini response");
        res.status(200).json({message: "berhasil", name: "dudung"})
        } catch (error) {
            console.log(error.message);
            res.status(400).json(error.message)
        }
    }

    static async registerFirebase(req, res){
        const {email, password} = req.body
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response, "==> try");
            res.status(201)
            .json({ message: response._tokenResponse.email })
        } catch (error) {
            console.log(error, "==> ERROR2");
            res.status(400)
        }
    }
}

module.exports = TestingController