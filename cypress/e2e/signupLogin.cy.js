import Login from '../pages/Login.js';
import SignUp from '../pages/SignUp.js';
import AccountCreated from '../pages/AccountCreated.js';
import Menu from '../pages/Menu.js';
import { gerarDadosDeUsuarioDinamicos } from '../utils/funcoes.js';

describe('Testes de SignUp e Login', () => {
    let usuarioJaCadastrado;
    before(() => {
        cy.fixture('massaDeDados/usuarios').then((usuario) => {
            usuarioJaCadastrado = usuario.usuarioJaCadastrado;
        })
    })
    beforeEach(() => {
        cy.visit('/login');
    });
    it('Cadastrar um usuário', () => {
        const usuarioDinamico = gerarDadosDeUsuarioDinamicos();
        Login.acessarFormularioDeSignUp(usuarioDinamico.fisrtName, usuarioDinamico.email);
        SignUp.cadastrarUsuario(usuarioDinamico);
        AccountCreated.tituloContaCriada().should('have.text', 'Account Created!');
        AccountCreated.botaoContinue().click();
        Menu.logout().should('be.visible');
    });
    it('Login de usuário com e-mail e senha corretos', () => {
        Login.realizarLogin(usuarioJaCadastrado.email, usuarioJaCadastrado.password);
        Menu.logout().should('be.visible');
        cy.contains(`Logged in as ${usuarioJaCadastrado.firstName}`);
    });
    it('Tentativa de login com usuário e senha incorretos', () => {
        Login.realizarLogin('tiago_pgats_usuario_nao_cadastrado@email.com', '9563dD3');
        cy.contains('Your email or password is incorrect!');
    });
    it('Logout de usuário', () => {
        Login.realizarLogin(usuarioJaCadastrado.email, usuarioJaCadastrado.password);
        cy.contains(`Logged in as ${usuarioJaCadastrado.firstName}`);
        Menu.logout().click();
        Menu.signUpLogin().should('be.visible');
        Login.botaoLogin().should('be.visible');
    });
    it('Cadastrar usuário com e-mail já cadastrado', () => {
        Login.acessarFormularioDeSignUp(usuarioJaCadastrado.firstName, usuarioJaCadastrado.email);
        cy.contains('Email Address already exist!');
    });
});
