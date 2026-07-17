import officeImage from "./office.jpg";

function App() {

  const office = {
    name: "Smart Office",
    rent: 55000,
    address: "Sector 62, Noida"
  };

  const officeSpaces = [

    {
      id: 1,
      name: "Smart Office",
      rent: 55000,
      address: "Sector 62, Noida"
    },

    {
      id: 2,
      name: "Tech Park",
      rent: 85000,
      address: "Whitefield, Bangalore"
    },

    {
      id: 3,
      name: "Innovation Hub",
      rent: 70000,
      address: "Hitech City, Hyderabad"
    }

  ];

  return (

    <div style={{ textAlign: "center" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="500"
        height="300"
      />

      <hr />

      <h2>Featured Office</h2>

      <p><strong>Name:</strong> {office.name}</p>

      <p>
        <strong>Rent:</strong>

        <span
          style={{
            color: office.rent < 60000 ? "red" : "green"
          }}
        >
          {" "}
          ₹{office.rent}
        </span>

      </p>

      <p><strong>Address:</strong> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {

        officeSpaces.map((item) => (

          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              margin: "20px auto",
              width: "500px",
              borderRadius: "10px"
            }}
          >

            <h3>{item.name}</h3>

            <p>

              <strong>Rent:</strong>

              <span
                style={{
                  color:
                    item.rent < 60000
                      ? "red"
                      : "green"
                }}
              >
                {" "}
                ₹{item.rent}
              </span>

            </p>

            <p>

              <strong>Address:</strong>

              {" "}

              {item.address}

            </p>

          </div>

        ))

      }

    </div>

  );

}

export default App;