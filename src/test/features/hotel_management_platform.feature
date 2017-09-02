Feature: User should be able to manage hotel entries

  As a user
  I would be able to access hotel management platform application
  So that I can add multiple entries and delete entries

 Background:
   Given User login into home page with "admin" and "password"

   @SingleEntry
   Scenario Outline: User should be able to create entry
     When user enters "<hotel name>", "<address>", "<owner>", "<phone number>" and "<email>"
     And clicks create button
     Then user should see "<hotel details>" entry created on home page

     Examples:
     |hotel name|address|owner|phone number|email|hotel details|
     |Holiday Inn Express| Kirkstall Road, Leeds LS3 1LY|John Lee|0871 902 1616|holiday@Innexpress.com|Holiday Inn Express|


  @DeleteEntry
  Scenario: User should be able to delete entry
    When user deletes hotel "Holiday Inn Express"
    Then "Holiday Inn Express" hotel entry should remove from home page

  @MultipleEntry
  Scenario Outline: User should be able to create entry
    When user enters "<hotel name>", "<address>", "<owner>", "<phone number>" and "<email>"
    And clicks create button
    Then user should see "<hotel details>" entry created on home page

    Examples:
      |hotel name|address|owner|phone number|email|hotel details|
      |Holiday Inn Express| Kirkstall Road, Leeds LS3 1LY|John Lee|0256 902 1789|holiday@Innexpress.com|Holiday Inn Express|
      |Premier Inn| Hunslet Road, Leeds LS23 1ER|Peter|0871 142 1616|premier@Inn.com|Premier Inn|
      |Queens Hotel| Manor Road, Leeds LS10 1SY|Philip|0235 902 4586|queens@Hotel.com|Queens Hotel|


