export const General_Chat = () => {
  return (
    <div
      className="monospace widget text-white"
      style={{
        height: "200px",
        width: "400px",
        right: "50px",
        bottom: "50px",
      }}
    >
      <header
        style={{
          display: "flex",
          width: "100%",
          borderBottom: "1px solid rgb(255, 255, 255, 0.1)",
        }}
      >
        <div
          className="p-1 text-center grow"
          style={{
            borderRight: "1px solid rgb(255, 255, 255, 0.2)",
          }}
        >
          General Chat
        </div>
        <div
          className="p-1 text-center grow opacity-50"
          style={{
            borderRight: "1px solid rgb(255, 255, 255, 0.2)",
          }}
        >
          Planet Chat
        </div>
        <div className="p-1 text-center grow opacity-50">Location Chat</div>
      </header>
      <div className="p-2">
        <div className="text-xs pb-2">
          <span className="me-2  opacity-25">2:33</span>
          <span>
            <span className="underline ">unknown_traveler</span> arrived to
            Nebula Prime.
          </span>
        </div>
        <div className="text-xs pb-2">
          <span className="me-2  opacity-25">2:39</span>
          <span>Trader has landed on </span>
          <span className="underline ">Haik</span>
          <span>
            . Make your way to their location to discover the intriguing
            assortment of new artifacts they have brought.
          </span>
        </div>
      </div>
    </div>
  );
};
