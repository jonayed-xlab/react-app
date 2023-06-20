function GroupList() {
  const items = ["Dhaka", "Barisal", "Comilla"];
  return (
    <>
      <h1>List Of Items</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>item</li>
        ))}
      </ul>
    </>
  );
}

export default GroupList;
