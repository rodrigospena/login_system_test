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

new User("rodrigospena","João R S Pena","joaorodrigopena@gmail.com","19","84","1a2b3c")
new User("ceciaprile","Cecília C A Velloso","ceciliaprile2003@gmail.com","19","43","123456")
new User("gabispena","Gabriela S P Novaes","gabisoarespena@gmail.com","27","67","senha123")
new User("brenovaes","","","","","senhabreno") 

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
