SET SERVEROUTPUT ON;

BEGIN

    FOR c IN (SELECT CustomerID, DOB FROM Customers)
    LOOP

        IF FLOOR(MONTHS_BETWEEN(SYSDATE, c.DOB) / 12) > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

END;
/

BEGIN

    FOR c IN (SELECT CustomerID, Balance FROM Customers)
    LOOP

        IF c.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = TRUE
            WHERE CustomerID = c.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

END;
/

BEGIN

    FOR l IN
    (
        SELECT c.Name,
               l.LoanID,
               l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: '
            || l.Name
            || ' Loan ID: '
            || l.LoanID
            || ' Due Date: '
            || l.DueDate
        );

    END LOOP;

END;
/