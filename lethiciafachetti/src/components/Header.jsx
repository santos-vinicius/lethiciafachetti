function Header() {
  return (
    <div className="flex justify-center items-center space-x-10 p-6 bg-light-cream">
      <div className="flex justify-between items-center space-x-4">
        <h1 className="font-title font-bold text-2xl">Lethícia Fachetti</h1>
        <span>|</span>
        <h2>Psicóloga</h2>
      </div>
      <div className="text-end items-center ">
        <p className="">(11) 00000 - 0000</p>
      </div>
    </div>
  );
}

export default Header;
