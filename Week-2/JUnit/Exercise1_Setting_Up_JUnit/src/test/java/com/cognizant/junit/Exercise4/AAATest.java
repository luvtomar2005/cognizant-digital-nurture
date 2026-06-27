package com.cognizant.junit.Exercise4;

import org.junit.After;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class AAATest {

    private int num1;
    private int num2;

    @Before
    public void setUp() {
        num1 = 10;
        num2 = 20;
        System.out.println("Setup completed");
    }

    @Test
    public void testAddition() {

        // Arrange
        int expected = 30;

        // Act
        int actual = num1 + num2;

        // Assert
        assertEquals(expected, actual);
    }

    @After
    public void tearDown() {
        System.out.println("Test completed");
    }
}