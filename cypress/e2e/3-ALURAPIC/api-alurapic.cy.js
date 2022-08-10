describe('Buscar fotos e dados', () => {

    it.only('buscar fotos do flavio', () => {

        const tempoEsperado = Math.random() * 3000;

        //fazer requisição 
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            //quero que o status seja 200
            expect(res.status).to.be.equal(200);
            //o corpo da requisição teve resposta (não seja vazio)
            expect(res.body).is.not.empty;
            //quero verificar se há descrição
            expect(res.body[0]).to.have.property('description');
            //qual conteudo
            expect(res.body[0].description).to.be.equal('Farol iluminado');
            expect(res.duration).to.be.lte(tempoEsperado)
        });
    });

    it('fazer login do flavio', () => {
        //fazer requisição 
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            //quero que o status seja 200
            expect(res.status).to.be.equal(200);
            //o corpo da requisição teve resposta (não seja vazio)
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('id');
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal("flavio@alurapic.com.br")
        });
    });
})