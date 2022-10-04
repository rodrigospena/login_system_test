//  Sign-Up
let usersCredentials = []

class User {
  constructor(nickname,name,email,age,weight,password) {
    this.nickname = nickname;
    this.name = name;
    this.email = email;
    this.age = age;
    this.weight = weight;
    this.password = password;
    usersCredentials.push(this)
  }
}

new User("rodrigospena","João Rodrigo Soares Pena","joaorodrigopena@gmail.com","19","84","39931")
new User("ceciaprile","Cecília Costa Aprile Velloso","ceciliaprile2003@gmail.com","19","43","251803")
new User("gabispena","Gabriela Soares Pena Novaes","gabisoarespena@gmail.com","27","67","0822")
new User("brenovaes","","","","","7067") 

//  Login
function Login(id,password) {
  const isUser = user => (user.nickname === id) || (user.email === id) ;
  const loginUser = usersCredentials.filter(isUser);
  
  if (loginUser[0] === undefined){
    console.log("Nome e/ou senha inválido.")
  } else
  if (loginUser[0].password === password) {
    console.log("Login feito com sucesso!")
  } else
    console.log("Nome e/ou senha inválido.")
}

Login("rodrigospena","39931")
