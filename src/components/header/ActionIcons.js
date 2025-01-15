import React from 'react';
import '../../App.css';

export function ActionIcons() {
  return (
    <div className="actionContainer">
      <div className="iconWithBadge">
        <img
          loading="lazy"
          src="/assets/icons/Wallet.svg"
          className="walletIcon"
          alt="Wallet"
        />
        <span className="badge">4576</span>
      </div>
      <div className="iconWithBadge">
        <img
          loading="lazy"
          src="/assets/icons/Cart.svg"
          className="cartIcon"
          alt="Shopping cart"
        />
        <span className="badge">4</span>
      </div>
    </div>
  );
}
