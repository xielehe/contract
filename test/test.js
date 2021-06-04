const Token = artifacts.require('./Token')
const BigNumber = require('bignumber.js')
const bn = x=>(new BigNumber(x))

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
            it('fallback', async () => {

                const amount = bn("1e18")
                await web3.eth.sendTransaction({
                    from: deployer,
                    value: amount,
                    to: token.address,
                })
            //    const bal = await web3.eth.getBalance(deployer)
                expect((await token.ethBalanceOf(deployer)).toString()).to.be.eq(amount.toString())
            })
        })

        // describe('failure', () => {
        //     it('tokens minting should be rejected', async () => {
        //         await token.mint(user, '1', {from: user}).should.be.rejectedWith(EVM_REVERT) 
        //     })
        // })
    })

})