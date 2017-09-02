package stepdefs;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page_objects.*;

public class HotelEntries extends StartUp {

    HotelLoginPage hotelLoginPage;
    HotelHomePage hotelHomePage;

    @Given("^User login into home page with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_login_into_home_page_with_and(String userid, String password) throws Throwable {

        HotelLandingPage hotelLandingPage = new HotelLandingPage(driver);
        hotelLoginPage = hotelLandingPage.navigateToHotelLandingPage();
        hotelLoginPage.userId(userid);
        hotelLoginPage.password(password);
        hotelHomePage = hotelLoginPage.login();


    }

    @When("^user enters \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_and(String hotel, String address, String owner, String phoneNumber, String emailId) throws Throwable {

        hotelHomePage.hotelName(hotel);
        hotelHomePage.address(address);
        hotelHomePage.owner(owner);
        hotelHomePage.phoneNumber(phoneNumber);
        hotelHomePage.emailId(emailId);


    }

    @When("^clicks create button$")
    public void clicks_create_button() throws Throwable {

        hotelHomePage.hotelCreate();

    }

    @Then("^user should see \"([^\"]*)\" entry created on home page$")
    public void user_should_see_entry_created_on_home_page(String hotel) throws Throwable {

        hotelHomePage.verifyHotelCreated(hotel);
    }


    @When("^user deletes hotel \"([^\"]*)\"$")
    public void user_deletes_hotel(String hotel) throws Throwable {

        hotelHomePage.hotelDelete();
    }

    @Then("^\"([^\"]*)\" hotel entry should remove from home page$")
    public void hotel_entry_should_remove_from_home_page(String hotel) throws Throwable {

        hotelHomePage.verifyHotelDeleted(hotel);
    }




}
