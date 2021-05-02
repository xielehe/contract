const {  EVM_REVERT } = require('./helpers')
const Token = artifacts.require('./Token')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('token', ([deployer, user]) => {
    let token

    beforeEach(async () => {
        token = await Token.new()
    })

    describe('testing token contract...', () => {
        describe('success', () => {
            it('checking token name', async () => {
                expect(await token.name()).to.be.eq('Decentralized Bank Currency')
            })

            it('checking token symbol', async () => {
                expect(await token.symbol()).to.be.eq('DBC')
            })

            it('checking token initial total supply', async () => {
                expect(Number(await token.totalSupply())).to.eq(0)
            })
        })

        describe('failure', () => {
            it('tokens minting should be rejected', async () => {
                await token.mint(user, '1', {from: user}).should.be.rejectedWith(EVM_REVERT) 
            })
        })
    })

})