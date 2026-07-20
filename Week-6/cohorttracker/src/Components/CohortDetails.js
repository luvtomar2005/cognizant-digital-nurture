import styles from "./CohortDetails.css";

function CohortDetails() {

    const cohorts = [

        {

            id:1,

            code:"INTADMDF10 - .NET FSD",

            startedOn:"22-Feb-2022",

            status:"Scheduled",

            coach:"Ashwin",

            trainer:"Jojo Jose"

        },

        {

            id:2,

            code:"ADM21JF014 - Java FSD",

            startedOn:"10-Sep-2021",

            status:"Ongoing",

            coach:"Apoorv",

            trainer:"Bisa Smith"

        },

        {

            id:3,

            code:"CDBJF21025 - Java FSD",

            startedOn:"24-Dec-2021",

            status:"Ongoing",

            coach:"Ashwin",

            trainer:"John Doe"

        }

    ];

    return(

        <div>

            <h1>Cohorts Details</h1>

            {

                cohorts.map((cohort)=>(

                    <div
                        key={cohort.id}
                        className={styles.box}
                    >

                        <h3
                            style={{
                                color:
                                cohort.status==="Ongoing"
                                ? "green"
                                : "blue"
                            }}
                        >

                            {cohort.code}

                        </h3>

                        <dl>

                            <dt>Started On</dt>

                            <dd>{cohort.startedOn}</dd>

                            <dt>Current Status</dt>

                            <dd>{cohort.status}</dd>

                            <dt>Coach</dt>

                            <dd>{cohort.coach}</dd>

                            <dt>Trainer</dt>

                            <dd>{cohort.trainer}</dd>

                        </dl>

                    </div>

                ))

            }

        </div>

    );

}

export default CohortDetails;