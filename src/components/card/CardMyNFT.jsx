function CardMyNFT({ name, src, id, onClick }) {


  return (
    <button
      onClick={onClick}
      className="p-2 flex flex-wrap items-center font-bold mx-4 text-start bg-map5 hover:bg-contain rounded-md w-[95%] my-2"
    >
      <div className="mr-4">
        <img className="my-2 h-12 rounded-full ring-2 ring-white" src={src} alt="icon" />
      </div>

      <span>
        <p className="w-[100%]">Name : {name}</p>
        <p>NFT ID : {id}</p>
        <p>
         
        </p>
      </span>
    </button>
  );
}

export default CardMyNFT;
