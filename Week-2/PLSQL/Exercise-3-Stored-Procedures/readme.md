# Exercise 3 - Stored Procedures

## Objective

Implement stored procedures using PL/SQL.

## Scenarios

### Scenario 1

Create a stored procedure `ProcessMonthlyInterest` that updates the balance of all savings accounts by applying 1% monthly interest.

### Scenario 2

Create a stored procedure `UpdateEmployeeBonus` that increases employee salary based on the department and bonus percentage passed as parameters.

### Scenario 3

Create a stored procedure `TransferFunds` that transfers money from one account to another after checking that the source account has sufficient balance.

## Concepts Used

- Stored Procedures
- Parameters
- IF Statement
- UPDATE Statement
- SELECT INTO
- DBMS_OUTPUT
- COMMIT

## Files

- `Exercise3.sql` - Contains solutions for all three scenarios.

## How to Run

1. Open Oracle SQL Developer.
2. Connect to the database.
3. Enable **DBMS Output**.
4. Execute `Exercise3.sql`.
5. Call each procedure using an anonymous block.

Example:

```sql
BEGIN
    ProcessMonthlyInterest;
END;
/

BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/

BEGIN
    TransferFunds(101,102,500);
END;
/
```

## Expected Result

- Savings account balances are updated with 1% monthly interest.
- Employees in the specified department receive the given bonus percentage.
- Funds are transferred only if the source account has sufficient balance.
