import "../Stylesheets/mystyle.css";

function CalculateScore() {

    const Name = "Steeve";
    const School = "DNV Public School";
    const Total = 284;
    const Goal = 300;

    const Score = ((Total / Goal) * 100).toFixed(2);

    return (
        <div>

            <h1>Student Details:</h1>

            <h3>Name: <span>{Name}</span></h3>

            <h3>School: <span>{School}</span></h3>

            <h3>Total: <span>{Total} Marks</span></h3>

            <h3>Score: <span>{Score}%</span></h3>

        </div>
    );
}

export default CalculateScore;