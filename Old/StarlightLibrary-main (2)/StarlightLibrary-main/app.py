#Importação de bibliotecas do flask
from flask import Flask, flash, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

#Banco de dados, sqlalchemy
app = Flask(__name__)
app.secret_key = "sua_chave_secreta"  # Defina uma chave secreta para a sessão
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:123456@localhost/biblioteca"
db = SQLAlchemy(app)

#Criação de classes Livro e Usuario
class Livro(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    autor = db.Column(db.String(100), nullable=False)
    editora = db.Column(db.String(100), nullable=False)

class Usuarios(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    senha = db.Column(db.String(100), nullable=False)

#Rotas pro HTML e sincronização com o banco de dados
@app.before_request
def before_request():
    if 'usuario_id' in session:
        # Verifica se o usuário está autenticado antes de cada requisição
        pass  # Você pode adicionar lógica adicional aqui, se necessário

#Rota do Index
@app.route("/")
def index():
    livros = Livro.query.all()
    return render_template("index.html", livros=livros)

#Rota do create
@app.route("/create", methods=["GET", "POST"])
def create():
    if request.method == "POST": #postagem no banco
        livro = Livro(
            nome=request.form["nome"],
            autor=request.form["autor"],
            editora=request.form["editora"]
        )
        db.session.add(livro)
        db.session.commit() #commit pra entrar pro banco
        return redirect(url_for("index"))  #Redirecionamento pro index depois de criar o livro
    return render_template("create.html")

#rota do update que vai ser usado pra atualizar 
@app.route("/update/<int:id>", methods=["GET", "POST"])
def update(id):
    livro = Livro.query.get(id)
    if request.method == "POST":
        livro.nome = request.form["nome"]
        livro.autor = request.form["autor"]
        livro.editora = request.form["editora"]
        db.session.commit()
        return redirect(url_for("index"))
    return render_template("update.html", livro=livro)

#rota do search que serve pra procurar os livros, ver se tem ou nao, ele esta puxando do banco
@app.route("/search", methods=["GET", "POST"])
def search():
    resultados = None
    if request.method == "POST": #pede pro usuario colocar os termos abaixo
        termo_nome = request.form["nome"]
        termo_autor = request.form["autor"]
        termo_editora = request.form["editora"]
        
        query = Livro.query
        #if usado pra busca ser por nome, autor ou editora, ou seja, nao precisa ter todos detalhados
        if termo_nome:
            query = query.filter(Livro.nome.ilike(f"%{termo_nome}%"))
        if termo_autor:
            query = query.filter(Livro.autor.ilike(f"%{termo_autor}%"))
        if termo_editora:
            query = query.filter(Livro.editora.ilike(f"%{termo_editora}%"))
        
        resultados = query.all()
        
    return render_template("search.html", resultados=resultados)

#rota do cadastro do usuario no site
@app.route("/cadastro", methods=["GET", "POST"])
def cadastro():
    if request.method == "POST":
        #obtem os dados do formulário enviado pelo usuário
        nome = request.form["nome"]
        email = request.form["email"]
        senha = request.form["senha"]

        #cria um novo usuário com os dados fornecidos
        novo_usuario = Usuarios(nome=nome, email=email, senha=senha)

        # Adicione o novo usuário ao banco de dados
        db.session.add(novo_usuario)
        db.session.commit()

        # Redirecione o usuário para a página de login após o cadastro bem-sucedido
        return redirect(url_for("login"))
    
    # Se o método for GET, simplesmente renderize o template do formulário de cadastro
    return render_template("cadastro.html")

#rota de login do usuario
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST": #pede as informações nescessarias pro login
        email = request.form["email"]
        senha = request.form["senha"]
        
        # Verifica se o usuário existe no banco de dados
        usuario = Usuarios.query.filter_by(email=email).first()

        if usuario:
            # Verifica se a senha fornecida está correta (use hashing na vida real)
            if usuario.senha == senha:
                # Login bem-sucedido, redireciona para a página inicial
                return redirect(url_for("index"))
            else:
                # Senha incorreta
                erro = "Senha incorreta. Por favor, tente novamente."
                return render_template("login.html", erro=erro)
        else:
            # Usuário não encontrado
            erro = "Usuário não encontrado. Por favor, verifique seu email."
            return render_template("login.html", erro=erro)
    
    # Se o método for GET, simplesmente renderize o template do formulário de login
    return render_template("login.html")

#rota sobre nós, apenas texto, nao tem no banco de dados
@app.route('/sobre-nos')
def sobre_nos():
    return render_template('sobre_nos.html')

if __name__ == "__main__":
    app.run(debug=True)
