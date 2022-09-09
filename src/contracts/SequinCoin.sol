pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract SequinCoin is ERC721Full {

  constructor() ERC721Full("SequinCoin", "SEQ") public {
    
  }

  function mint(address _to, string memory tokenURI) public returns(bool){
    uint256 _tokenId = totalSupply().add(1);
    _mint(_to, _tokenId);

    _setTokenURI(_tokenId, tokenURI);

    return true;

  }


}

