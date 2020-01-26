Feature: Finding Nationwide Mortgages

    @demo
    Scenario Outline: Verify User able to navigate to Mortgage Pagee
        Given I am on Nationwide home page
        #When I hover mouse on "<TopNavigation>" top navigation and click on "<SubNavigation>" sub navigation
        When I hover mouse on "<TopNavigation>" top navigation
        And Iclick on "<SubNavigation>" sub navigation
        And I click on mortageNo option
        And I click on first time buy option
        And I enter property value "<PropertyValue>"
        And I enter Mortgage amount "<MortgageAmount>"
        And I enter terms of year "<Terms>"
        And I selected help to buy option
        When I click on Find mortgage button
        And I selected the Mortgage type as fixed rate
        And I selected the Product Fee as with Fee
        And I expanded the more details info
        And I selected the Fiveyears fixed mortgage
       



        Examples: Top Level and Sub Navigation
            | TopNavigation |   SubNavigation   | PropertyValue | MortgageAmount | Terms |
            |   Mortgages   |  Mortgage rates   |    300000     |      150000    |   30  |
            

    

