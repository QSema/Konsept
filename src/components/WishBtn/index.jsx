import React from "react";
import { useWishlist } from "react-use-wishlist";
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";
import '../WishBtn/style.scss'
import { toast } from "react-toastify";

const WishlistBtn = ({ klikEtdiyimMehsul }) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const toggleFunc = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
      toast.warning('Deleted from wishlist')
    } else {
      addWishlistItem(myProduct);
      toast.info('Added to wishlist')
    }
  };

  return (
    <>
      <button className="btnw" onClick={() => toggleFunc(klikEtdiyimMehsul)}>
        {inWishlist(klikEtdiyimMehsul.id) ? (
            <VscHeartFilled />
        ) : (
           <VscHeart />
        )}
      </button>
    </>
  );
};

export default WishlistBtn;