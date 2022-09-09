const { assert } = require('chai')

const SequinCoin = artifacts.require('./SequinCoin.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('SequinCoin', (accounts) => {
  let token
  
  before(async()=>{
    token = await SequinCoin.deployed()
  })
  
  describe('deployment', async () => {

    it('deploys successfully', async () => {
      const address = await token.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, "")
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async()=>{
      const name = await token.name()
      assert.notEqual(name, undefined)
      assert.notEqual(name, null)
      assert.notEqual(name, "")
    })

    it('has a symbol', async()=>{
      const symbol = await token.symbol()
      assert.notEqual(symbol, undefined)
      assert.notEqual(symbol, null)
      assert.notEqual(symbol, "")
    })

    describe('token distribution', async()=>{
      it('mints tokens', async ()=>{
        await token.mint(accounts[0], "https://www.nft.com")
        const result = await token.totalSupply()
        assert.equal(result.toString(), '1', 'total supply is correct')
  
        const balance = await token.balanceOf(accounts[0]);
        assert.equal(balance.toString(), '1', 'balanceOf is correct')

        const ownerOf = await token.ownerOf('1');
        assert.equal(ownerOf.toString(), accounts[0].toString(), "ownerOf is correct")
      })
    })

  })

})
