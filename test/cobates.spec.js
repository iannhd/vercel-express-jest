const request = require("supertest")
const app = require('../app')
const { getAuth, deleteUser } = require ("firebase/auth")

const auth = getAuth();
const user = auth.currentUser;



afterAll(done => {
   return deleteUser(user).then(() => {
        console.log("====> masuk then");
        // User deleted.
        done()
      }).catch((error) => {
        // An error ocurred
        console.log(error, "===> error dari delete user");
        // ...
      });
    //   done()
  });

describe("GET /", () => {
    test("/", done => {
        request(app)
        .get("/")
        .then(res => {
            expect(res.statusCode).toBe(200)
        })
        done()
    })
})

describe("POST /", () => {
    test('/register', done => {
        request(app)
        .post('/register')
        .send({
            email: "testa2@mail.com",
            password: "qwerty"
        })
        .end((err, res) => {
            if(err){
                console.log(err, "=====> err dari end");
            }
            expect(res.statusCode).toBe(201)
            expect(res.body).toHaveProperty("message", "testa2@mail.com")
        })
        done()
    })
})

describe("POST /", () => {
    test('/login', done => {
        request(app)
        .post('/login')
        .send({
            email: "abdul1@mail.com",
            password: "qwerty"
        })
        .end((err, res) => {
            if(err){
                console.log(err, "=====> err dari end");
            }
            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty("message", "berhasil")
            expect(res.body).toHaveProperty("name", "dudung")
        })
        done()
    })
})

describe("POST /login without proper email", () => {
    test('/login', done => {
        request(app)
        .post('/login')
        .send({
            email: "test",
            password: "qwerty"
        })
        .end((err, res) => {
            if(err){
                console.log(err, "=====> err dari end");
            }
            expect(res.statusCode).toBe(400)
            
        })
        done()
    })
})

describe("POST /register with same email", () => {
    test('/register', done => {
        request(app)
        .post('/register')
        .send({
            email: "test58@mail.com",
            password: "qwerty"
        })
        .end((err, res) => {
            if(err){
                console.log(err, "=====> err dari end");
            }
            expect(res.statusCode).toBe(400)
        })
        done()
    })
})

describe("POST /login with empty password", () => {
    test('/login', done => {
        request(app)
        .post('/login')
        .send({
            email: "test58@mail.com",
            password: ""
        })
        .end((err, res) => {
            if(err){
                console.log(err, "=====> err dari end");
            }
            expect(res.statusCode).toBe(400)
            expect(res.body).toHaveProperty("Error", "auth/invalid-email")    
        })
        done()
    })
})

describe("POST /register without proper email", () => {
    test('/register', done => {
        request(app)
        .post('/register')
        .send({
            email: "test58",
            password: "qwerty"
        })
        .end((err, res) => {
            if(err){
                console.log(err, "=====> err dari end");
            }
            expect(res.statusCode).toBe(400)
        })
        done()
    })
})

// Test negative password kosong untuk login PASSED
// Test negative register tidak memakai proper email UNKNOWN/PASSED
// Test negative register password kosong UNKNOW/PASSED
// Hide uncovered line
// All files must be minimum 80%



describe("POST /register without password", () => {
    test('/register', done => {
        request(app)
        .post('/register')
        .send({
            email: "testa1@mail.com",
            password: ""
        })
        .end((err, res) => {
            if(err){
                console.log(err, "=====> err dari end");
            }
            expect(res.statusCode).toBe(400)
        })
        done()
    })
})